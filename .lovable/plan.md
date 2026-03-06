

## Plano: 3 grandes mudanças

### 1. Criar sessão "Administração de Imóveis"

**Novo arquivo:** `src/components/PropertyManagement.tsx`

- Posicionada logo após `FarmsGallery` no `Index.tsx`
- Fundo `bg-[#FFFBF0]` (amarelado quente, seguindo o ritmo visual alternado do site)
- Layout duas colunas no desktop: texto à esquerda, pilares à direita
- Mobile: empilhado verticalmente
- Título "Administração de Imóveis" com `SectionHeader`
- Subtítulo em itálico/display: "Alguns patrimônios merecem mais do que gestão. Merecem curadoria."
- Quatro parágrafos do texto fornecido
- Botão CTA "Solicitar uma avaliação confidencial" no estilo `rounded-full` com cores do site
- Três pilares abaixo em cards com ícones (Shield, Users, TrendingUp do lucide-react):
  - Discrição Absoluta
  - Seleção Estratégica
  - Valorização do Patrimônio
- Animações framer-motion com `whileInView` consistentes com o restante do site

**Editar:** `Index.tsx` — importar e inserir `<PropertyManagement />` entre `FarmsGallery` e `BlogPreview`

---

### 2. Substituir "Encontre o imóvel do seu jeito" por carrossel premium de imóveis

**Novo arquivo:** `src/components/FeaturedCarousel.tsx`

- Substitui `LuxuryHighlights` na posição atual do `Index.tsx`
- Usa `embla-carousel-react` (já instalado) para carrossel horizontal com snap
- Dados: reutiliza os 6 imóveis do `FeaturedProperties.tsx` (property-1 a property-6)
- Layout dos cards:
  - Foto grande ocupando a maior parte do card (~aspect-[3/4])
  - Informações na parte inferior: bairro, título, preço
  - `rounded-lg`, hover com elevação + sombra suave + zoom sutil na imagem (scale 1.03)
- Responsivo via Embla `slidesToScroll`:
  - Desktop: ~3 cards visíveis (basis `33.33%`)
  - Tablet: 2 cards (basis `50%`)
  - Mobile: 1 card centralizado (basis `85%` centrado)
- Efeito premium cinematográfico:
  - Usar `onSelect` do Embla API para detectar o slide central
  - Card central: `scale(1)`, `opacity(1)`
  - Cards laterais: `scale(0.95)`, `opacity(0.7)`
  - Transição suave via CSS `transition: transform 0.4s, opacity 0.4s`
- Navegação: setas laterais discretas (estilo branco/preto como as já ajustadas) + drag nativo do Embla
- Header com `SectionHeader` título "Imóveis em Destaque"

**Editar:** `Index.tsx` — trocar import de `LuxuryHighlights` por `FeaturedCarousel`

---

### 3. Ajustes de scroll no hero

**Editar:** `HeroSection.tsx` — HeroLogos

- Fade-out dos logos começa mais cedo: quando `topVh <= 12` (≈20px antes do header em h-20)
- Alterar a lógica de `fadeOutOpacity` para calcular baseado na distância ao header, não no progresso bruto
- Resultado: logos desaparecem suavemente antes de colidir com o header

**Editar:** `scroll-expansion-hero.tsx` — overlay e blur do vídeo

- Antes do scroll (`showContent = false, scrollProgress = 0`): overlay mais escuro (0.45) + blur maior (6px)
- Durante o scroll (scrollProgress > 0 mas < 1): reduzir overlay gradualmente (lerp de 0.45 para 0.25) e blur (lerp de 6px para 0px)
- Quando `showContent = true`: overlay 0.55 (já existente), blur 2px (já existente)
- O título e barra de busca (overlayContent) já fazem fade-out quando `showContent` volta a false

**Editar:** `HeroSection.tsx` — HeroOverlayContent

- Adicionar fade-out baseado no heroProgress passado como prop: quando o conteúdo está visível e o usuário continua scrollando para baixo, fade-out os elementos antes de colidirem com o header
- Na prática o `ScrollExpandMedia` já faz isso ao setar `showContent = false`; basta confirmar que a transição é suave

### Arquivos a criar
1. `src/components/PropertyManagement.tsx`
2. `src/components/FeaturedCarousel.tsx`

### Arquivos a editar
1. `src/pages/Index.tsx` — trocar LuxuryHighlights por FeaturedCarousel, adicionar PropertyManagement
2. `src/components/HeroSection.tsx` — fade-out dos logos mais cedo
3. `src/components/ui/scroll-expansion-hero.tsx` — overlay/blur dinâmicos baseados no scrollProgress

