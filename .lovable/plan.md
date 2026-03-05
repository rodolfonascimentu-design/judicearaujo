

## Plano: Seção institucional Forbes Global Properties

### Resumo
Criar um novo componente `ForbesPartnership.tsx` com fundo verde institucional (`bg-primary`), layout centralizado editorial, posicionado entre `InstitutionalCTA` e `BlogPreview` na home.

### Estrutura do componente

**Seção com `py-32 lg:py-44 bg-primary text-center`**, dividida em 3 blocos verticais:

1. **Headline** — Label "PARCERIA GLOBAL" + título "Uma rede global para imóveis extraordinários" + subtítulo curto sobre a Forbes Global Properties. Textos em `text-primary-foreground`.

2. **Logos** — Bloco centralizado com logo J&A e Forbes Global (versões brancas já existentes: `logo-ja.png` e `forbes-global-white.png`) separados por linha vertical fina (`w-px h-12 bg-primary-foreground/30`). Bastante respiro vertical (`my-16`).

3. **Benefícios (grid 2x2 ou 4 colunas em desktop)** — 4 cards com ícones `lucide-react` (`Globe`, `Building2`, `Target`, `TrendingUp`), título curto e descrição de 1 linha. Textos em `text-primary-foreground/80`. Abaixo do grid, stat destaque: "+ de 20 países conectados pela rede Forbes Global Properties".

4. **CTA** — Botão "Anuncie seu imóvel na rede Forbes" com estilo `bg-cream text-primary rounded-full hover:bg-primary-foreground hover:text-primary`.

### Animações (framer-motion)
- Headline: `opacity 0→1, y 24→0`, 0.7s
- Logos: `opacity 0→1, scale 0.95→1`, 0.8s, delay 0.1s
- Benefícios: staggered com `delay: index * 0.1`
- CTA: fade-in, delay 0.3s

### Alterações em arquivos
1. **Criar** `src/components/ForbesPartnership.tsx` — componente completo
2. **Editar** `src/pages/Index.tsx` — importar e inserir `<ForbesPartnership />` entre `<InstitutionalCTA />` e `<BlogPreview />`

