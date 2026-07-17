# Site HACKYARA 2026

Site estático do HACKYARA, hackathon de inovação de Santa Helena-PR (UTFPR Campus Santa Helena, 04 a 06 de setembro de 2026). Tema: gestão de resíduos na agropecuária e sustentabilidade.

Construído com React 19, Vite 6 e Tailwind CSS 4. Cores e tom de voz seguem o Guia de Branding & Design HACKYARA 2026; a tipografia usa Sora (títulos) e Hanken Grotesk (corpo), escolhidas no redesign editorial.

## Comandos

```bash
npm install      # instalar dependências
npm run dev      # servidor de desenvolvimento
npm run build    # gera a versão final em dist/
npm run preview  # serve o build local pra conferência
```

## Estrutura

- `src/data.js` — todo o conteúdo editável: links, datas, cronograma, prêmios, FAQ, contatos
- `src/sections/` — um componente por seção da página (Hero, Evento, Desafio, Programação, Premiação, Patrocínio, FAQ)
- `src/layout/` — Navbar e Footer
- `src/ui/` — peças reutilizáveis: Eyebrow, Reveal, Onda e ShapeGrid
- `public/` — logos (colorida, branca pra fundo escuro) e favicon com a cauda da Iara
- `public/img/` — fotos usadas nas seções

## Paleta (do guia de marca)

| Cor | HEX |
| --- | --- |
| Azul-Marinho (Iara) | `#08204D` |
| Turquesa (Água) | `#15C4D2` |
| Verde-Esmeralda (Campo) | `#19B789` |
| Cinza Texto | `#2D2D2D` |
| Azul Névoa (fundo) | `#EAF2F5` |

## Publicação

O build (`dist/`) é 100% estático: funciona em Vercel, Netlify, GitHub Pages ou qualquer hospedagem simples. Pra atualizar conteúdo (datas, prêmios, links de inscrição), edite `src/data.js` e rode `npm run build` de novo.
