

## Plano: 3 ajustes pontuais

### 1. Quebra de linha no texto "+20 países" no mobile
**Arquivo:** `ForbesPartnership.tsx` (linha 140)

- Remover `whitespace-nowrap` da classe do `<motion.p>`
- Adicionar `max-w-[280px] mx-auto` no mobile para forçar quebra natural dentro do grid
- Manter `whitespace-nowrap` apenas em `md:` para desktop continuar em uma linha

### 2. Transição fluida hambúrguer → X no menu mobile
**Arquivo:** `Navbar.tsx`

- Substituir a troca abrupta entre `<Menu>` e `<X>` por um único botão com animação
- Usar `motion.div` com duas barras (`span`) que rotacionam e transicionam para formar o X
- Quando `mobileOpen = false`: 3 barras horizontais (hambúrguer)
- Quando `mobileOpen = true`: 2 barras cruzadas em X com rotação animada
- Usar `framer-motion` `animate` com `rotate` e `translateY` para transição suave entre estados
- O botão fica sempre visível (não desaparece e reaparece)
- Na overlay mobile, remover o botão X separado (linha 204-209) — o mesmo botão no nav faz o toggle

### 3. Setas brancas com ícone preto nos carrosséis
**Arquivos:** `ExclusiveGallery.tsx` e `FarmsGallery.tsx`

- Trocar `bg-muted hover:bg-muted/80` por `bg-white hover:bg-white shadow-sm`
- Trocar `text-foreground/60 hover:text-foreground` por `text-black`
- Aplicar em todas as setas: desktop (hidden md:flex) e mobile (md:hidden)
- Total: 4 botões em cada arquivo (2 desktop + 2 mobile)

