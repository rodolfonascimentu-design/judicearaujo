

## Plano: Alinhar logos com scroll indicator + transições suaves no navbar

### 1. Alinhar barrinha dos logos com a barrinha do scroll indicator (`HeroSection.tsx`)

Atualmente o conjunto logos+barrinha está posicionado com `top: 50vh` (centro vertical), mas o scroll indicator está em `bottom: 12` (48px do fundo). Vou alinhar verticalmente a barrinha central dos logos com a barrinha do scroll indicator, posicionando o conjunto de logos de forma que a barrinha central fique alinhada acima da barrinha do scroll — não centralizado na tela, mas sim ancorado em relação ao scroll indicator.

**Mudança:** Trocar `topVh = lerp(50, 2.5, moveT)` para algo como `lerp(42, 2.5, moveT)` (ajustar para que a barrinha central fique visualmente alinhada com a linha do scroll indicator, que fica a ~`bottom-12` = ~`calc(100vh - 48px - 56px - gap)`). O valor exato será calibrado para que as duas barrinhas verticais fiquem na mesma coluna central, uma acima da outra.

### 2. Navbar — todos brancos até a dobra, verde só após dobra (`Navbar.tsx`)

Atualmente já funciona parcialmente (branco quando `heroExpanded && !pastHero`, verde quando `pastHero`). O pedido é confirmar que **tudo** (logos, links, idioma, font controls, mobile button) ficam brancos enquanto no hero expandido. Já está assim no código, mas vou garantir que as transições sejam mais suaves.

**Mudanças de suavização:**
- `transition-all duration-500` no nav → aumentar para `duration-700`
- Links: `transition-colors duration-300` → `duration-500`
- Logos container: `transition={{ duration: 0.3 }}` → `duration: 0.5`
- AnimatePresence dos nav links: `transition={{ duration: 0.3 }}` → `duration: 0.5` com ease
- Background do nav: adicionar transição mais suave entre transparent → white usando `motion.nav` animate em vez de className toggle
- Sombra: transição gradual com `transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)"`

### 3. HeroLogos — transição de saída mais suave (`HeroSection.tsx`)

- Quando `heroProgress` se aproxima de 1, fazer fade-out gradual em vez de corte abrupto
- Mudar: `isVisible = barVisible && !pastHero && heroProgress < 1` → `heroProgress < 0.95`
- Opacity: usar `lerp(1, 0, clamp((heroProgress - 0.85) / 0.15))` para fade suave nos últimos 15% do scroll

### Arquivos afetados

1. **`src/components/HeroSection.tsx`** — ajustar posição vertical inicial dos logos e suavizar fade-out
2. **`src/components/Navbar.tsx`** — aumentar durações de transição para fluidez

