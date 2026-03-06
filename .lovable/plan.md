

## Plano: Ajustes de fade-out no hero (logos + H1/busca) e overlay/blur

### 1. Logos — fade-out mais cedo (~30vh)

**Arquivo:** `HeroSection.tsx` (linhas 214-218)

- Alterar o threshold de fade-out de `topVh <= 12` para `topVh <= 30`
- Ajustar a rampa de fade: `clamp((30 - topVh) / 28)` para uma transição suave desde 30vh até ~2vh
- Resultado: logos começam a desaparecer bem antes de chegarem ao header

### 2. H1 e barra de busca — fade-out ao se aproximarem do header

**Arquivo:** `scroll-expansion-hero.tsx` (linhas 172-183)

- O `overlayContent` (H1 + busca) aparece quando `showContent = true` e some quando `showContent = false`
- Adicionar fade-out baseado no scroll da página quando `mediaFullyExpanded = true`: monitorar `window.scrollY` e quando o conteúdo se aproximar do header (~30vh do topo), reduzir a opacidade gradualmente até 0
- Criar um novo state `contentFadeOut` que vai de 1→0 conforme `scrollY` aumenta (0→200px)
- Aplicar esse multiplicador na opacidade do `overlayContent`

### 3. Overlay e blur — transição mais pronunciada

**Arquivo:** `scroll-expansion-hero.tsx` (linhas 130-151)

- Blur: já vai de `6px → 0px` durante scroll (correto)
- Overlay: alterar de `0.45 - scrollProgress * 0.2` (range 0.45→0.25) para `0.45 - scrollProgress * 0.25` (range 0.45→0.20)
- Após expansão (`showContent = true`): manter overlay em 0.20 em vez de 0.55, para que o vídeo fique mais visível depois também
- Blur pós-expansão: mudar de `2px` para `0px` para manter a nitidez

### Arquivos a editar
1. `HeroSection.tsx` — threshold de fade-out dos logos (30vh)
2. `scroll-expansion-hero.tsx` — overlay 0.45→0.20, blur 6→0, fade-out do overlayContent ao scrollar

