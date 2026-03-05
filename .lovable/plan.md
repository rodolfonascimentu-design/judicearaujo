

## Plano: Nova animação de entrada dos logos com barrinha central

### Sequência da animação ao carregar a página

1. **Overlay mais escuro** no vídeo de fundo (opacidade inicial `0.45` em vez de `0.25`)
2. **Barrinha vertical** surge primeiro no centro da tela (fade-in, ~1s delay) — igual à do scroll indicator mas maior (~80px de altura, 2px de largura)
3. **Logo J&A desliza para a esquerda** a partir da barrinha (delay ~1.5s, `x: 0 → -gap`)
4. **Logo Forbes desliza para a direita** a partir da barrinha (delay ~1.5s, `x: 0 → +gap`)
5. **Scroll indicator** aparece abaixo, alinhado verticalmente com a barrinha central

### Comportamento no scroll

- Conforme o usuário scrolla, o conjunto (barrinha + logos) sobe do centro (50vh) até o topo (2.5vh) e reduz de escala — igual ao comportamento atual
- Quando o scroll atinge 100% (search bar aparece):
  - Logos desaparecem do centro e o **Navbar** assume
  - Menu mostra links (Lançamentos, Avaliar Imóvel, Blog) com **texto branco** e **fundo transparente** (sem o bg-white)
  - Logos vão para o lado esquerdo do header (como já funciona após passar da dobra)

### Navbar durante o hero expandido

- Quando `showContent = true` e ainda está no hero (não `pastHero`): mostrar os nav links em branco sobre fundo transparente
- Quando `pastHero`: comportamento atual (fundo branco, texto verde)

### Arquivos afetados

1. **`src/components/HeroSection.tsx`** — `HeroLogos`:
   - Adicionar estados de animação staged: `barVisible`, `logosVisible` (com timeouts 1s e 1.8s)
   - Renderizar a barrinha como elemento separado que aparece primeiro
   - Logos J&A e Forbes começam na posição da barrinha (x: 0) e deslizam para lados opostos
   - Ordem: J&A à esquerda, Forbes à direita (invertendo a ordem atual)
   - Barrinha alinhada verticalmente com o scroll indicator

2. **`src/components/ui/scroll-expansion-hero.tsx`**:
   - Aumentar opacidade inicial do overlay de `0.25` para `0.45` (mais escuro antes do scroll)

3. **`src/components/Navbar.tsx`**:
   - Adicionar nova fase: quando hero está expandido (`showContent`) mas não `pastHero`, mostrar links em branco sem fundo
   - Ler `heroProgress` via `document.documentElement.dataset.heroProgress` ou receber via prop/context
   - Quando `heroProgress >= 1` e `!pastHero`: links brancos, fundo transparente
   - Quando `pastHero`: comportamento atual (fundo branco, texto verde, logos à esquerda)

