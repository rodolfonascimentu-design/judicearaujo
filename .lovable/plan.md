

## Plano: Substituir CTASection por galeria de fazendas

### O que muda

**1. Criar `src/components/FarmsGallery.tsx`**
- Cópia da estrutura do `ExclusiveGallery.tsx` (grid 3 colunas com transição para carrossel)
- Header: label "Seleção Exclusiva" → título "Fazendas Exclusivas"
- Dados: 6 fazendas com nomes temáticos (ex: "Fazenda Colonial · Petrópolis", "Haras de Luxo · Itaipava", etc.)
- Reutiliza as mesmas imagens `property-1` a `property-6` (placeholder até ter fotos reais de fazendas)
- Mesma lógica de grid → carrossel, mesmos efeitos hover e animações

**2. Atualizar `src/pages/Index.tsx`**
- Remover import e uso do `CTASection`
- Adicionar import e uso do `FarmsGallery` no lugar dele (antes do Footer)

### Arquivo criado
- `src/components/FarmsGallery.tsx`

### Arquivo editado
- `src/pages/Index.tsx` — troca CTASection por FarmsGallery

