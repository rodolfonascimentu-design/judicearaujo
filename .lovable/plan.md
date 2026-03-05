

## Plano: Reestruturar seção "Avalie seu imóvel" para layout editorial premium

### Resumo
Transformar a seção centralizada simples em um layout de duas colunas com copy persuasiva, lista de benefícios, CTA refinado e imagem editorial dominante.

### Alterações

#### 1. Gerar imagem editorial
- Gerar uma imagem de ambiente interno luxuoso com vista privilegiada (estilo editorial) e salvar como `src/assets/cta-proprietarios.jpg`.

#### 2. Reescrever `src/components/InstitutionalCTA.tsx`
Substituir o layout centralizado por duas colunas (`grid grid-cols-1 lg:grid-cols-2 gap-16`):

**Coluna esquerda** (texto + CTA):
- Label: "PROPRIETÁRIOS" — `text-[10px] tracking-[0.35em] uppercase text-muted-foreground`
- Título: "Venda seu imóvel com segurança e máxima valorização" — `font-display text-2xl md:text-3xl lg:text-4xl font-light`
- Parágrafo descritivo com copy fornecida
- 3 benefícios com ícone Check (`lucide-react`) em cor primary:
  - Avaliação profissional do imóvel
  - Divulgação para compradores qualificados
  - Alcance internacional
- Botão CTA "Avaliar meu imóvel": `bg-cream text-primary` → hover: `bg-primary text-white`, `rounded-full px-10 py-4`, transição 300ms
- Texto de reforço abaixo: "Avaliação rápida e confidencial." em `text-xs text-muted-foreground`

**Coluna direita** (imagem):
- Imagem grande com `rounded-lg`, sombra suave, `object-cover`, aspect ratio ~3:4

**Animações** (framer-motion):
- Coluna esquerda: `opacity 0→1, y 30→0`, duração 0.7s
- Coluna direita: `opacity 0→1, scale 1.03→1`, duração 0.8s, delay 0.2s
- Ambas com `viewport={{ once: true }}`

### Resultado
Seção premium de duas colunas que transmite confiança e exclusividade, incentivando proprietários a iniciar avaliação do imóvel.

