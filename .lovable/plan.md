

## Plano: Busca branca, info alinhada, logos centralizados e headline mobile

### 1. Barra de busca 100% branca

Mudar o fundo da search bar de `rgba(255, 255, 255, 0.75)` para `rgba(255, 255, 255, 1)` -- branco puro. Manter bordas e sombras existentes.

**Arquivo:** `HeroSection.tsx` -- linha 53, `background` style

### 2. Texto/ícones do carrossel alinhados com a foto (não com as setas)

Atualmente o `motion.div` com info (`mt-6 px-1`) está no mesmo nível das setas, então começa na borda esquerda incluindo o espaço das setas. Adicionar `md:pl-[calc(2.75rem+1.25rem)]` (largura da seta 44px + gap 20px) para alinhar com o início da imagem no desktop.

**Arquivos:** `ExclusiveGallery.tsx`, `FarmsGallery.tsx` -- div da info abaixo da imagem

### 3. Logos centralizados no mobile

O container dos logos usa `left-1/2` + `translateX(-50%)`, mas os logos podem ter tamanhos desiguais causando desalinhamento visual. Adicionar `justify-center` explícito e garantir que o flex container esteja perfeitamente centrado com `w-max`.

**Arquivo:** `HeroSection.tsx` -- `HeroLogos` component

### 4. Headline "Para quem escolhe viver diferente" em uma linha no mobile, cor branca

Reduzir o tamanho no mobile de `text-2xl` para `text-[20px]` ou `text-xl` e adicionar `whitespace-nowrap` para forçar uma linha. Garantir `text-white` (já usa `text-cream`, mas confirmar que é branco puro).

**Arquivo:** `HeroSection.tsx` -- headline h1 no `HeroOverlayContent`

### Resumo de arquivos
1. `HeroSection.tsx` -- busca branca, logos centralizados, headline mobile
2. `ExclusiveGallery.tsx` -- padding left na info para alinhar com foto
3. `FarmsGallery.tsx` -- mesmo ajuste de alinhamento

