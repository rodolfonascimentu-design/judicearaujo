

## Plano: Página de Listagem de Imóveis (Resultado de Busca)

### Visão Geral

Criar uma página completa de resultados de busca (`/imoveis`) que mantém a identidade visual premium do site, com cards reutilizáveis, scroll infinito simulado, favoritos, skeleton loading e transições cinematográficas.

---

### Arquitetura de Arquivos

```text
src/
├── pages/
│   └── Properties.tsx          ← Nova página de listagem
├── components/
│   └── SearchPropertyCard.tsx  ← Card com favorito, tags, hover premium
│   └── SearchBar.tsx           ← Barra fixa de resultados/filtros
│   └── PropertyCardSkeleton.tsx← Skeleton loading dos cards
```

---

### 1. Roteamento e Navegação da Busca

- Adicionar rota `/imoveis` em `App.tsx` apontando para `Properties.tsx`
- No `HeroSection.tsx`, capturar o valor do input de busca e o tipo ativo (Venda/Locação/Temporada), e usar `useNavigate` para redirecionar para `/imoveis?q=Barra+da+Tijuca&type=venda`
- A página `Properties.tsx` lê os query params para exibir os resultados

### 2. Header

- Reutilizar o `Navbar` existente exatamente como está (já funciona em qualquer rota)
- O header mantém logos, menu hambúrguer e comportamento de scroll

### 3. Barra Fixa de Resultados (`SearchBar.tsx`)

- Posicionada abaixo do header com `sticky top-20 z-40`
- Fundo branco com `backdrop-blur` e sombra sutil
- **Lado esquerdo:** "32 imóveis à venda na Barra da Tijuca" (dinâmico com query params)
- **Lado direito:** botões "Ordenar", "Filtrar" e ícone "Salvar busca" (sem funcionalidade por enquanto, apenas UI)
- Tipografia: `font-sans text-xs tracking-[0.15em] uppercase` consistente com o site

### 4. Card de Imóvel (`SearchPropertyCard.tsx`)

Baseado no `PropertyCard` existente, com melhorias:

- **Favorito:** ícone de coração no canto superior direito da imagem. Ao clicar, animação de escala (pulse) com `framer-motion` e estado ativo (preenchido). Estado armazenado em `useState` local (sem backend por enquanto)
- **Tags:** badges sutis no canto superior esquerdo (ex: "Lançamento", "Exclusivo", "Novo"). Estilo: `bg-charcoal/60 backdrop-blur-md text-cream text-[10px] tracking-[0.2em]` (mesmo padrão do neighborhood badge atual)
- **Hover premium:**
  - Elevação sutil do card (`translateY(-4px)`)
  - Sombra suave (`shadow-lg`)
  - Zoom na imagem (`scale-1.05`, 700ms)
  - Overlay escuro gradual revelando info extra (tipo do imóvel, nº de vagas)
  - Botão "Ver Detalhes" aparece com fade-in
- **Imagem lazy loaded** com micro fade-in ao carregar (estado `loaded` + `opacity transition`)

### 5. Grid da Listagem (`Properties.tsx`)

- Layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14`
- Fundo branco (`bg-white`)
- Padding generoso: `px-6 lg:px-12 py-12`
- `max-w-7xl mx-auto`
- Cards com animação fade-in + translateY ao entrar na viewport (framer-motion `whileInView`)

### 6. Scroll Infinito

- Dados mock: array de ~18 imóveis usando as 6 imagens existentes rotacionadas
- Carregar 9 imóveis iniciais
- Usar `IntersectionObserver` no final da lista para detectar scroll e carregar mais 6
- Loading indicator: spinner discreto ou skeleton cards no rodapé
- Simular delay de 800ms com `setTimeout`

### 7. Skeleton Loading (`PropertyCardSkeleton.tsx`)

- Usar o componente `Skeleton` existente (`src/components/ui/skeleton.tsx`)
- Replicar a forma do card: retângulo aspect-[4/3] + linhas de texto
- Exibido no carregamento inicial e ao carregar mais itens

### 8. Transição Cinematográfica

- Usar `framer-motion` `layoutId` nos cards para criar transição suave ao navegar
- Como não há página de detalhe ainda, o clique no card fará uma animação de expansão sutil no próprio card (scale up + fade) como feedback visual
- Preparar estrutura para futura integração com página de detalhe

### 9. Traduções (i18n)

Adicionar chaves em `translations.ts` para PT/EN/ES:
- `search.results`: "{count} imóveis à venda em {location}"
- `search.sort`: "Ordenar"
- `search.filter`: "Filtrar"  
- `search.save`: "Salvar busca"
- `search.viewDetails`: "Ver Detalhes"
- Tags: `tag.launch`, `tag.new`, `tag.exclusive`, `tag.construction`

### 10. Performance

- Todas as imagens com `loading="lazy"`
- Cards renderizados com `whileInView` e `viewport={{ once: true }}` para animação única
- Scroll infinito evita renderizar tudo de uma vez

