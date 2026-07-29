# Site HACKYARA 2026 — versão estilo MLH

Versão alternativa do site do HACKYARA inspirada na linguagem visual do mlh.com: papel milimetrado de fundo, tipografia monoespaçada, fotos com moldura branca, contadores animados e letreiro deslizante. Todo o conteúdo (textos, imagens, logo) é do HACKYARA — a referência entrou só como direção de estilo.

Stack: React 19, Vite 6, Tailwind CSS 4. O site original (versão editorial) continua intacto em `../Hackyara-site`.

## Comandos

```bash
npm install      # instalar dependências
npm run dev      # servidor de desenvolvimento
npm run build    # gera a versão final em dist/
npm run preview  # serve o build local
```

## Estrutura

- `src/data.js` — conteúdo editável: links, stats, cronograma, prêmios
- `src/components/` — um componente por seção
- `public/` — logos e imagens (compartilhadas com a versão editorial)

## Elementos da pegada MLH

- `.papel-grade` + manchas de cor: fundo de papel técnico (index.css)
- `Letreiro.jsx`: faixa deslizante infinita com CSS puro
- `Stats.jsx`: contadores que sobem quando entram na tela
- `.foto-moldura` + rotação leve: fotos estilo polaroid
- `Botao.jsx`: botão reto com seta que desliza no hover
- Tudo respeita `prefers-reduced-motion`
