

## Plano: Redesign da seção Parceria Global

### Alterações

**1. Nova logo combinada**
- Copiar `Forbes_Global_Properties-2.png` para `src/assets/`
- Substituir as duas logos separadas (J&A + Forbes + divider) pela nova logo única, exibida em tamanho grande com animação de fade-in + scale elegante

**2. Cards de benefícios — estilo glassmorphism chique**
- Cada card ganha fundo `bg-white/5` com `backdrop-blur-sm`, borda `border border-white/10`, padding generoso e `rounded-2xl`
- Hover: `bg-white/10`, leve elevação (`y: -6`, `scale: 1.03`), borda mais visível (`border-white/20`)
- Ícones dentro de um círculo sutil `bg-white/10 rounded-full` com tamanho maior (`w-14 h-14`)
- Animação staggered mais lenta (delay `i * 0.15`, duração `0.8s`)

**3. Textos aparecendo devagar**
- Label "Parceria Global": delay 0.2s, duração 0.8s
- Título: delay 0.4s, duração 0.9s
- Subtítulo: delay 0.6s, duração 0.9s
- Logo: delay 0.8s, duração 1.2s com scale 0.9→1
- Cards: delay base 1.0s + stagger
- Stat: delay 1.4s

**4. Stat de "20 países" — menor e mais dinâmica**
- Reduzir para `text-base md:text-lg`, com tracking mais espaçado
- Adicionar uma linha decorativa horizontal fina (`w-16 h-px bg-primary-foreground/20`) acima do stat para separação visual

**5. Cores e variação visual**
- Usar accent colors nos ícones: cada ícone com uma tonalidade diferente no hover (gold-light `hsl(171 50% 22%)` e `primary-foreground` alternados)
- Títulos dos cards em `text-primary-foreground` (branco cheio) para contraste
- Label "Parceria Global" com cor gold-light para quebrar a monotonia

**6. Espaçamento maior**
- Aumentar padding da seção para `py-36 lg:py-52`
- Gap entre cards: `gap-6 lg:gap-8`
- Espaço entre logo e cards: `my-20 lg:my-24`
- Espaço entre headline e subtítulo: `mb-8`

### Arquivo modificado
- `src/components/ForbesPartnership.tsx` — rewrite completo do layout e animações

### Arquivo criado
- `src/assets/Forbes_Global_Properties-2.png` — copiado do upload

