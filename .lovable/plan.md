

## Plano: Fade-in lento dos logos + logos verdes no header

### Resumo
Duas mudanças principais:
1. **Fade-in lento (4s)** dos logos centralizados ao carregar a página, para que o usuário veja o surgimento cinematográfico.
2. **Logos verdes no header** — substituir as logos brancas do hero pelas versões verdes (uploads `j.png` e `f.png`) quando o header fica com fundo branco.

### Alterações

#### 1. Copiar assets verdes
- Copiar `user-uploads://j.png` → `src/assets/logo-ja-green.png`
- Copiar `user-uploads://f.png` → `src/assets/logo-forbes-green.png`

#### 2. `src/components/HeroSection.tsx` — Fade-in de 4 segundos
No componente `HeroLogos`:
- Aumentar o delay do `setTimeout` de `300ms` para ~`500ms` e mudar a `transition` de `opacity 0.8s` para **`opacity 4s ease`** quando `mounted` e não `pastHero`. Isso faz o fade-in durar 4 segundos no estado inicial centralizado.
- O restante (scroll shrink + move to top) permanece igual.

#### 3. `src/components/Navbar.tsx` — Usar logos verdes no header
- Importar `logoJaGreen` de `src/assets/logo-ja-green.png` e `logoForbesGreen` de `src/assets/logo-forbes-green.png`.
- Substituir `jaLogoFull` e `forbesLogo` no bloco de logos do header por essas versões verdes.
- Remover qualquer filtro `brightness-0 invert` se houver, já que as imagens já são verdes.

### Resultado visual
- **Page load:** Logos brancas aparecem no centro da tela com um fade-in suave de 4 segundos sobre o vídeo escuro.
- **Scroll:** Logos encolhem e sobem até o header.
- **Header branco:** Logos verdes (das imagens enviadas) aparecem no canto esquerdo com boa legibilidade sobre fundo branco.

