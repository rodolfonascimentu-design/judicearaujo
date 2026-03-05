

## Plano: Redesign da barra de busca inspirada na referência

### Design da referência (imagem)
- Tabs flutuando **acima** do container (não dentro)
- Tab ativa em dourado/gold, inativas em branco/cinza claro
- Container escuro semi-transparente com blur, bordas arredondadas generosas
- Label "BUSCAR IMÓVEL" em caps acima do placeholder
- Input com placeholder cinza claro sobre fundo escuro
- Botão de busca circular dourado/gold à direita

### Adaptação com as cores do projeto
- Fundo do container: verde escuro semi-transparente (`rgba(0, 63, 54, 0.85)`) com backdrop-blur
- Tabs acima: ativa em gold (`#D4A853` ou similar quente), inativas em `cream/60`
- Label "BUSCAR IMÓVEL" em branco/cream, tracking largo, tamanho pequeno
- Placeholder em `cream/40`
- Botão circular em gold com ícone branco
- Bordas arredondadas `rounded-2xl`

### Mobile
- Mesmo layout dark, tabs menores
- Input + label empilhados
- Botão "Buscar" full-width em gold abaixo do input

### Implementação

**Arquivo:** `HeroSection.tsx` (componente `HeroOverlayContent`)

1. **Tabs:** Mover para fora do container principal, centralizar acima com `mb-3`. Tab ativa com cor gold e underline/pill gold. Inativas em branco translúcido.

2. **Container:** Trocar fundo branco por verde escuro translúcido com blur. Adicionar `rounded-2xl`.

3. **Interior:** Adicionar label "BUSCAR IMÓVEL" em uppercase, tracking largo, tamanho `10px`, cor cream. Abaixo, input com placeholder cream/40 e texto branco.

4. **Botão desktop:** Circular, fundo gold (`bg-[#D4A853]`), ícone branco.

5. **Botão mobile:** Full-width, fundo gold, texto branco "Buscar" + lupa.

6. **Animações:** Manter staggered entrance existente.

### Resumo
- Um único arquivo: `HeroSection.tsx`
- Redesign completo do `HeroOverlayContent` seguindo a referência dark com cores do projeto

