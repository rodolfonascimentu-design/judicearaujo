

## Plano: Corrigir menu mobile + melhorar indicador de scroll

### 1. Corrigir botão hambúrguer sumindo no mobile

**Arquivo:** `Navbar.tsx`

**Problema:** O overlay mobile tem `z-[100]` e o nav tem `z-50`. Quando o menu abre, o overlay cobre o botão.

**Solução:**
- Alterar o `z-index` do `<motion.nav>` para `z-[110]` quando `mobileOpen` estiver ativo
- Isso mantém o botão hambúrguer/X sempre visível e clicável acima do overlay

### 2. Melhorar visibilidade do indicador de scroll no mobile

**Arquivo:** `scroll-expansion-hero.tsx`

**Problema:** O indicador de scroll (linha pulsante + texto "Scroll") tem opacidade máxima de `0.6`, a barra é `bg-cream/30` e o texto `text-cream/40` — quase invisível no mobile.

**Solução:**
- Aumentar a opacidade do container de `0.6` para `0.85`
- Trocar a barra de `bg-cream/30` para `bg-cream/60` (mais visível)
- Trocar o texto de `text-cream/40` para `text-cream/70` e aumentar o tamanho no mobile para `text-[11px]`
- Aumentar a altura da barra de `h-10` para `h-12` para mais presença visual
- Manter a animação pulsante elegante existente

### Arquivos a editar
1. `Navbar.tsx` — z-index condicional
2. `scroll-expansion-hero.tsx` — opacidade e tamanho do scroll hint

