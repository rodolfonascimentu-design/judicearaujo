

## Plano: Fonte regular nos titulos, carrossel permanente e lifestyle responsivo

### 1. Titulos com font-weight regular

Atualmente os titulos usam DM Serif Display com `font-medium` ou `font-light`. Trocar todos para `font-normal` (400) para reduzir o peso visual.

**Arquivos:** Todos os componentes que usam `font-display` com `font-medium` ou `font-light` nos h2/h3 -- ExclusiveGallery, FarmsGallery, LuxuryHighlights, CTASection, ForbesPartnership, BlogPreview, InstitutionalCTA, EditorialSection, Newsletter, OfficeLocations, Navbar, Footer, SectionHeader.

### 2. ExclusiveGallery e FarmsGallery -- carrossel permanente com 4 itens

Remover a logica de grid/`isCarouselMode` e o IntersectionObserver. Ambas as secoes passam a ser **sempre carrossel** com setas (prev/next), foto grande e informacoes (titulo, metragem, quartos, vagas) posicionadas **abaixo** da imagem (fora do overlay). Reduzir o array de 6 para 4 itens em cada.

**Estrutura do carrossel:**
- Imagem grande com aspect-ratio `16/9` ou `2/1`
- Setas de navegacao laterais (ChevronLeft/Right)
- Abaixo da imagem: titulo + PropertyInfo + botao "Ver detalhes"
- Dots indicadores

**Arquivos:** `ExclusiveGallery.tsx`, `FarmsGallery.tsx`

### 3. LuxuryHighlights -- carrossel no mobile/tablet, grid no desktop

No desktop (`lg:`), manter o grid de 4 colunas atual. No mobile e tablet, transformar em carrossel com setas para navegar entre os 4 cards, evitando scroll excessivo.

**Implementacao:** Usar estado + setas para telas `< lg`. Detectar via hook `useMediaQuery` ou CSS condicional com `useState` + `window.matchMedia`.

**Arquivo:** `LuxuryHighlights.tsx`

### Resumo de arquivos
1. Componentes com titulos -- `font-medium`/`font-light` para `font-normal`
2. `ExclusiveGallery.tsx` -- carrossel permanente, 4 itens, info externa
3. `FarmsGallery.tsx` -- carrossel permanente, 4 itens, info externa
4. `LuxuryHighlights.tsx` -- carrossel mobile/tablet, grid desktop

