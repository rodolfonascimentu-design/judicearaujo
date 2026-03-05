

## Plano: Padronizar cards de lifestyle + Redesenhar seção Forbes

### 1. `src/components/LuxuryHighlights.tsx` — Padronizar descrições com 2 linhas

Atualmente "Campo" tem 1 linha curta e "Casas" também. Vou garantir que todas as descrições tenham tamanho similar (2 linhas) e fixar a altura mínima do bloco de texto para que fiquem visualmente iguais:

- Atualizar descrições curtas para terem comprimento equivalente a 2 linhas:
  - "Campo" → "Refúgio, natureza e privacidade em meio à paisagem."
  - "Casas" → "Espaço, exclusividade e design que inspiram."
- Adicionar `min-h-[2.5rem]` ou `line-clamp-2` no `<p>` da descrição para garantir que todos ocupem exatamente 2 linhas visuais

### 2. `src/components/ForbesPartnership.tsx` — Layout split com animações direcionais

Transformar de layout centralizado (1 coluna) para layout em 2 colunas:

- **Lado esquerdo**: Label "Parceria Global", headline, subtítulo e logo Forbes (maior, `h-32 lg:h-40`). Animação de entrada da esquerda para direita (`initial={{ opacity: 0, x: -60 }}`)
- **Lado direito**: Grid 2×2 com os 4 cards de benefícios. Animação de entrada da direita para esquerda (`initial={{ opacity: 0, x: 60 }}`)
- **Abaixo (full-width)**: Mensagem "+20 países" com cores mais vivas:
  - Mudar de `text-primary-foreground/50` para `text-[hsl(var(--gold-light))]` 
  - Aumentar tamanho para `text-lg md:text-xl`
  - Manter o CountUp animado
