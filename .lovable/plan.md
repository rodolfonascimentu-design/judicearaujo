

## Plano: Seção "Visite um dos nossos escritórios"

### Resumo
Criar um novo componente `OfficeLocations.tsx` posicionado entre BlogPreview e Footer, com design compacto, elegante e alinhado à estética de luxo do site.

### Design
- Fundo `bg-[#FDFDFD]` (consistente com BlogPreview) ou off-white suave
- Layout: 3 cards lado a lado (grid 3 colunas no desktop, empilhados no mobile)
- Cada card terá uma imagem placeholder do escritório no topo com efeito de zoom suave no hover
- Abaixo da imagem: nome da unidade, endereço, telefones, WhatsApp (com ícone clicável abrindo `wa.me`), e-mail (com `mailto:`), e horário de funcionamento
- Cards com borda sutil (`border border-border/50`) e `rounded-[4px]` seguindo o padrão do site
- Tipografia: labels em `text-[10px] tracking-[0.2em] uppercase`, dados em `text-sm font-light`
- Ícones do Lucide (MapPin, Phone, Mail, MessageCircle) com hover sutil em cor primary
- Animação de entrada com `framer-motion` (fade-up escalonado por card)
- Seção compacta: `py-24 lg:py-32` (menor que outras seções)
- SectionHeader reutilizado com título "Visite um dos nossos escritórios"

### Dados das 3 unidades
1. **Zona Sul - RJ** — Ipanema, tel 2540.9999, WhatsApp 99559.2196
2. **Itaipava - Petrópolis** — Estrada União Indústria, tel 2222.0382, WhatsApp 99967.3830
3. **Barra & Lançamentos - RJ** — DownTown, Barra 99967.3830, Lançamentos 99511.3331

### Arquivos afetados
1. **Criar `src/components/OfficeLocations.tsx`** — novo componente com os 3 cards
2. **Editar `src/pages/Index.tsx`** — importar e inserir `<OfficeLocations />` entre `<BlogPreview />` e `<Footer />`

