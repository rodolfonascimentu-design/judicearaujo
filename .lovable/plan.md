

## Plano: Header vazio até logo chegar ao topo

### Comportamento desejado

O header começa **completamente vazio** (sem links, sem idioma, sem controles de fonte, sem logo no header, sem hambúrguer no mobile). Os elementos do header só aparecem quando os logos animados do hero scrollam até a posição do header (quando `heroProgress` atinge ~0.8, momento em que `topVh` chega a ~2.5vh). Nesse ponto, todos os elementos surgem com fade-in, em branco. Depois da dobra (`pastHero`), transicionam para verde como já funciona.

### Implementação

**Arquivo:** `Navbar.tsx`

1. Observar `data-hero-progress` via MutationObserver (já existe) e usar `heroExpanded` (que já rastreia `hp >= 1`) -- ajustar threshold para ~0.85 para coincidir com o momento em que os logos chegam ao topo e começam a desaparecer.

2. Esconder **todos** os elementos do header (logo do header, links desktop, hambúrguer mobile) quando `heroExpanded` é false. Usar `opacity-0 pointer-events-none` → `opacity-100 pointer-events-auto` com transição suave.

3. A lógica de cor permanece: branco antes de `pastHero`, verde depois.

**Detalhes:**
- `heroExpanded` controla visibilidade (opacity + pointer-events com transition 500ms)
- Desktop: logo + links + idioma + fonte -- todos condicionados
- Mobile: hambúrguer -- também condicionado
- Fundo do nav também só aparece após `pastHero` (já funciona assim)

### Resumo
- Um único arquivo: `Navbar.tsx`
- Adicionar wrapper com opacity/transition controlado por `heroExpanded` (threshold ~0.85)
- Todos os elementos do header ficam invisíveis até os logos do hero chegarem ao topo

