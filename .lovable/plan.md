

## Plano: Header branco, setas fora do card, swipe mobile e search bar melhorada

### 1. Header -- links sempre visíveis em branco antes da dobra

Atualmente os links só aparecem quando `heroExpanded || pastHero`. Remover essa condição: links, idioma e controles de fonte ficam **sempre visíveis**. Cor branca (cream) antes da dobra, verde (primary) depois.

**Arquivo:** `Navbar.tsx` -- remover `showNavLinks` como condição de renderização. Manter apenas para cor.

### 2. Setas de navegação fora do card (ExclusiveGallery + FarmsGallery)

Mover os botões prev/next de `absolute` dentro da imagem para **fora** do container da imagem, posicionados lateralmente ao card com espaçamento. No mobile, ficam abaixo da imagem junto aos dots.

**Arquivos:** `ExclusiveGallery.tsx`, `FarmsGallery.tsx`

### 3. Swipe/touch nos carrosseis mobile

Adicionar suporte a drag/swipe via `framer-motion` (`drag="x"`, `onDragEnd`) nos três carrosseis: ExclusiveGallery, FarmsGallery e LuxuryHighlights (mobile). Ao arrastar para esquerda → next, para direita → prev.

**Arquivos:** `ExclusiveGallery.tsx`, `FarmsGallery.tsx`, `LuxuryHighlights.tsx`

### 4. Search bar mobile melhorada

No mobile (`md:` breakpoint), separar o layout em duas linhas:
- **Linha 1:** Tabs (Venda/Locação/Temporada) + input de busca
- **Linha 2:** Botão full-width com texto "Buscar" + ícone lupa, com animação de hover/tap

Adicionar animação de entrada staggered (tabs → input → botão) para fluidez.

**Arquivo:** `HeroSection.tsx` (componente `HeroOverlayContent`)

### Resumo de arquivos
1. `Navbar.tsx` -- links sempre visíveis, branco → verde
2. `ExclusiveGallery.tsx` -- setas fora, swipe
3. `FarmsGallery.tsx` -- setas fora, swipe
4. `LuxuryHighlights.tsx` -- swipe mobile
5. `HeroSection.tsx` -- search bar mobile redesign

