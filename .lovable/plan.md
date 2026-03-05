

## Plano: Ajustes na seção Forbes Partnership

### Alterações no `src/components/ForbesPartnership.tsx`

**1. Stat "20 países" — menor e em linha única**
- Reduzir tamanho de `text-3xl md:text-4xl lg:text-5xl` para `text-xl md:text-2xl`
- Juntar tudo numa única linha: `+20 países conectados pela rede Forbes Global Properties`
- Usar `whitespace-nowrap`

**2. Hover nos títulos dos benefícios**
- Adicionar `whileHover` no card inteiro ou no `<h3>` com leve `scale` ou `y` shift e mudança de opacidade do texto

**3. Reposicionar logos — entre o subtítulo e o grid de benefícios**
- Mover o bloco de logos para depois do headline e antes dos benefits
- Aumentar espaçamento (`my-16 lg:my-20`)

**4. Animação cinematográfica dos logos**
- Barrinha central aparece primeiro: `opacity 0→1`, duração 1s
- Logo Forbes aparece depois: `opacity 0→1, x: 40→0`, delay 0.8s, duração 1.2s
- Logo J&A aparece: `opacity 0→1, x: -40→0`, delay 0.8s, duração 1.2s
- Efeito lento e elegante, com os logos "saindo" a partir da barra central

