

## Plano: Cards externos nas galerias + Forbes headline + Scroll indicator

### 1. `ExclusiveGallery.tsx` e `FarmsGallery.tsx` — Info fora do card (grid mode)

Atualmente o titulo e as infos (metragem, quartos, vagas) aparecem como overlay dentro da imagem no hover. Vou mover essas informações para fora do card, abaixo da imagem, com texto escuro visível sempre. O botão "Ver detalhes" permanece dentro do card como overlay no hover.

**Mudanças no grid (ambos arquivos):**
- Remover o `<div>` de overlay com titulo + PropertyInfo (linhas 99-103)
- Manter apenas o overlay do botão "Ver detalhes" (linhas 104-109)
- Trocar o wrapper de `<motion.div>` com `aspect-[2/3]` para um container que separa imagem e texto
- Adicionar abaixo da imagem: titulo em `text-foreground` e PropertyInfo em `text-muted-foreground` (cores escuras)
- Ajustar PropertyInfo para usar `text-foreground/60` em vez de `text-cream/60`

### 2. `ForbesPartnership.tsx` — Quebra de linha na headline

Linha 81-83: trocar o texto para usar `<br />`:
```
Uma rede global<br />para imóveis extraordinários
```

### 3. `scroll-expansion-hero.tsx` — Scroll indicator maior e mais visível

- Linha 154: barrinha `h-10` → `h-14`, `bg-cream/30` → `bg-cream/50`
- Linha 158: texto `text-[10px]` → `text-xs`, `text-cream/40` → `text-cream/70`
- Aumentar opacidade geral do indicator de `0.6` para `0.8` (linha 150)

