

## Plano: Ajustar botão da lupa + reposicionar scroll indicator

### 1. Botão da lupa — remover padding extra, alinhar com 8px de margem (`HeroSection.tsx`)

O botão atualmente tem `mr-1.5` (6px) e o container tem `px-3 py-1.5`. Vou ajustar para que o botão fique com **8px** de distância da borda direita e da borda inferior da barra branca:

- Container do input row: `px-3 py-1.5` → `px-2 pb-2 pt-1.5` (8px de padding direito e inferior)
- Botão: `mr-1.5` → `mr-0` (a margem agora vem do padding do container)

### 2. Scroll indicator — alinhar com a barrinha central dos logos (`scroll-expansion-hero.tsx`)

A barrinha central dos logos tem 80px de altura e está centrada verticalmente no container posicionado em `top: 42vh`. O centro dos logos fica em ~42vh, e a base da barrinha fica em `42vh + 40px`. O scroll indicator precisa começar logo abaixo dessa base.

Atualmente está em `top: calc(42vh + 56px)` — vou ajustar para `top: calc(42vh + 48px)` para que a linha do scroll indicator fique visualmente contínua com a base da barrinha dos logos (considerando o gap de 3 entre eles). O valor exato pode precisar de ajuste fino, mas o cálculo é: posição do container (42vh) + metade da altura da barra (40px) + pequeno gap (8px).

### Arquivos afetados

1. **`src/components/HeroSection.tsx`** — padding do container e margem do botão
2. **`src/components/ui/scroll-expansion-hero.tsx`** — posição vertical do scroll indicator

