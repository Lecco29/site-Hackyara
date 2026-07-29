# build do site
FROM node:22-alpine AS build
WORKDIR /app

# copia só os manifests primeiro: a camada de dependências só é refeita
# quando o package-lock muda, não a cada alteração de código
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# entrega dos estáticos
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# 127.0.0.1 e não localhost: o nginx escuta só em IPv4 e o wget do busybox
# tenta ::1 primeiro, o que faria o healthcheck falhar com o site no ar
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
