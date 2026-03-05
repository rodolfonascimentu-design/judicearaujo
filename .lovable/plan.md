

## Plano: Redesign da barra de busca + nova headline

### Mudanças

1. **Headline** (linha 33): trocar texto para "Para quem escolhe viver diferente"

2. **Barra de busca — menos redonda** (linha 51): trocar `rounded-2xl` para `rounded-lg` (~8px em vez de 16px)

3. **Remover lupa ao lado do placeholder** (linhas 96-99): remover o ícone `<Search>` que fica antes do input

4. **Tabs (Venda/Locação/Temporada) — compactas e modernas**:
   - Reduzir padding dos botões: `px-7 py-3.5` → `px-5 py-2`
   - Reduzir padding do container: `px-2 pt-2` → `px-1.5 pt-1.5`
   - Trocar o underline animado por um **pill/chip** de fundo animado (motion.div com `layoutId` que desliza atrás do item ativo — efeito "sliding pill" fluido)
   - Fundo do pill: `bg-primary/10` com `rounded-full`
   - Texto ativo: cor primary; inativo: cinza claro
   - Remover border-bottom do container de tabs

5. **Input row — menos espaço branco**:
   - Reduzir padding: `px-4 py-2.5` → `px-3 py-1.5`
   - Input interno: `py-5` → `py-3`

### Arquivos afetados

- **`src/components/HeroSection.tsx`** — todas as mudanças acima no `HeroOverlayContent`

