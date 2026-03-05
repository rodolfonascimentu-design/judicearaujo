

## Plano: Nova fonte, peso do body text e cards maiores com info externa

### 1. Trocar fonte principal para uma semi-serifada moderna

Substituir **Cormorant Garamond** por **DM Serif Display** -- serifada moderna, clean, elegante, com toque contemporâneo. Alternativa: **Playfair Display** (mais clássica). Ambas são do Google Fonts.

**Arquivos afetados:**
- `index.html` -- trocar URL do Google Fonts para carregar DM Serif Display
- `src/index.css` -- atualizar `font-family` nos headings e utilitários `.font-serif`, `.font-display`
- `tailwind.config.ts` -- atualizar `fontFamily.serif` e `fontFamily.display`

### 2. Aumentar peso do body text (Inter)

O peso atual é `font-weight: 300` (light). Mudar para **400** (regular) no `body` do CSS. Também trocar todas as ocorrências de `font-light` nos textos de info dos cards (PropertyInfo) para `font-normal`.

**Arquivos afetados:**
- `src/index.css` -- `font-weight: 300` → `font-weight: 400`
- `ExclusiveGallery.tsx` e `FarmsGallery.tsx` -- `font-light` → `font-normal` nos spans do PropertyInfo

### 3. Cards maiores com título/info fora da imagem

Nos dois componentes de galeria (grid mode, não carousel):
- Aumentar aspect ratio de `aspect-[2/3]` para `aspect-[3/4]` (cards mais largos/altos)
- Aumentar gap de `gap-6` para `gap-8`
- Mover título e PropertyInfo para **fora** do card de imagem (já estão parcialmente fora, mas confirmar que estejam totalmente externos)
- Dentro da imagem, manter **somente** o botão "Ver detalhes" no hover
- No grid, usar `lg:grid-cols-3` ou manter `lg:grid-cols-4` mas com `max-w-8xl` para cards mais largos

**Arquivos afetados:**
- `src/components/ExclusiveGallery.tsx` -- ajustar grid, aspect ratio, info externa
- `src/components/FarmsGallery.tsx` -- mesmas alterações

### Resumo de arquivos
1. `index.html` -- nova URL Google Fonts (DM Serif Display + Inter)
2. `src/index.css` -- font-family headings, font-weight body
3. `tailwind.config.ts` -- fontFamily.serif/display
4. `src/components/ExclusiveGallery.tsx` -- cards maiores, info externa
5. `src/components/FarmsGallery.tsx` -- cards maiores, info externa

