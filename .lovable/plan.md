

## Plano: Reordenar seções e ajustar fundo dos depoimentos

### Alterações

**1. `src/pages/Index.tsx` — reordenar seções**
- Mover `BlogPreview` para depois de `FarmsGallery` (última seção antes do Footer)
- Mover `Testimonials` para logo após `ForbesPartnership`
- Nova ordem: Hero → ExclusiveGallery → InstitutionalCTA → LuxuryHighlights → ForbesPartnership → Testimonials → FarmsGallery → BlogPreview → Footer

**2. `src/components/Testimonials.tsx` — fundo claro**
- Remover `className="bg-primary"` do `TestimonialsSection`
- Passar fundo claro (cream/background) para que combine com as demais seções
- Ajustar as cores de texto correspondentes (o componente já lida com isso via `isDark`)

