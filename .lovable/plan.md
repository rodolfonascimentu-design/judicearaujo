

## Plano: Transições bidirecionais, novas fontes e otimização SEO/performance

### 1. Transições fluidas bidirecionais (scroll down e scroll up)

Todos os componentes usam `viewport={{ once: true }}`, o que faz a animação disparar apenas uma vez. Para que as seções animem tanto ao descer quanto ao subir:

**Arquivos afetados (11 componentes):**
- `SectionHeader.tsx`, `PropertyCard.tsx`, `ExclusiveGallery.tsx`, `FarmsGallery.tsx`, `LuxuryHighlights.tsx`, `ForbesPartnership.tsx`, `InstitutionalCTA.tsx`, `EditorialSection.tsx`, `BlogPreview.tsx`, `Newsletter.tsx`, `CTASection.tsx`

**Alteração:** Trocar `once: true` por `once: false` em todos os `viewport` props e `useInView`. Adicionar `margin: "-80px"` onde não existir, para que a animação dispare quando o elemento estiver ~80px dentro da viewport (evita disparo prematuro).

### 2. Troca de fontes

**Fonte principal (headings):** Substituir **Space Grotesk** por **Cormorant Garamond** — serifada, moderna, elegante, amplamente usada no mercado de luxo.

**Fonte body (textos):** Substituir **Urbanist** por **Inter** — fina, extremamente legível, com excelente renderização em telas. Peso 300 (light) como padrão para manter a leveza.

**Arquivos afetados:**
- `src/index.css` — trocar o `@import` do Google Fonts e as declarações `font-family`
- `tailwind.config.ts` — atualizar `fontFamily.serif`, `fontFamily.sans`, `fontFamily.display`

### 3. Otimização SEO e performance

**`index.html`:**
- Adicionar `<link rel="preconnect">` para Google Fonts e domínios de assets
- Adicionar `<link rel="dns-prefetch">` complementar
- Adicionar meta tags SEO: `robots`, `canonical`, `og:image`, `og:url`, `og:locale`, `twitter:card`
- Adicionar schema.org JSON-LD para `RealEstateAgent`
- Trocar o carregamento da fonte de `@import` CSS para `<link rel="preload">` no HTML (elimina render-blocking)

**`src/index.css`:**
- Remover `@import url(...)` do Google Fonts (movido para HTML com preload)
- Adicionar `font-display: swap` via CSS

**Componentes com imagens:**
- Verificar que todas as `<img>` já têm `loading="lazy"` (a maioria já tem)

### Resumo de arquivos

1. **`index.html`** — meta tags SEO, preconnect, JSON-LD
2. **`src/index.css`** — novas fontes, remover @import
3. **`tailwind.config.ts`** — atualizar fontFamily
4. **11 componentes** — `once: true` → `once: false` em viewport/useInView

