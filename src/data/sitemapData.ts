// Full sitemap data extracted from judicearaujo.com.br/mapa-do-site

export interface SitemapPropertyType {
  label: string;
  href: string;
}

export interface SitemapNeighborhood {
  name: string;
  types: SitemapPropertyType[];
}

export interface SitemapCity {
  name: string;
  neighborhoods: SitemapNeighborhood[];
}

export interface SitemapCategory {
  name: string;
  cities: SitemapCity[];
}

const sitemapData: SitemapCategory[] = [
  {
    name: "Comprar",
    cities: [
      {
        name: "Angra dos Reis - RJ",
        neighborhoods: [
          { name: "Angra dos Reis", types: [{ label: "Casas", href: "/imoveis?q=Angra dos Reis&type=venda&tipologia=casa" }] },
          { name: "Caetés", types: [{ label: "Terrenos", href: "/imoveis?q=Caetés&type=venda&tipologia=terreno" }] },
          { name: "Camorim Pequeno", types: [{ label: "Casas", href: "/imoveis?q=Camorim Pequeno&type=venda&tipologia=casa" }] },
          { name: "Centro", types: [{ label: "Casas", href: "/imoveis?q=Centro Angra&type=venda&tipologia=casa" }] },
          { name: "Frade (Cunhambebe)", types: [{ label: "Casas", href: "/imoveis?q=Frade&type=venda&tipologia=casa" }] },
          { name: "Ilha Grande", types: [{ label: "Casas", href: "/imoveis?q=Ilha Grande&type=venda&tipologia=casa" }] },
          { name: "Mombaça", types: [{ label: "Casas", href: "/imoveis?q=Mombaça&type=venda&tipologia=casa" }] },
          { name: "Monsuaba", types: [{ label: "Casas", href: "/imoveis?q=Monsuaba&type=venda&tipologia=casa" }] },
          { name: "Nova Angra (Cunhambebe)", types: [{ label: "Casas", href: "/imoveis?q=Nova Angra&type=venda&tipologia=casa" }] },
          { name: "Piraquara (Cunhambebe)", types: [{ label: "Casas", href: "/imoveis?q=Piraquara&type=venda&tipologia=casa" }] },
          { name: "Portogalo", types: [{ label: "Casas", href: "/imoveis?q=Portogalo&type=venda&tipologia=casa" }] },
          {
            name: "São Bento",
            types: [
              { label: "Terrenos", href: "/imoveis?q=São Bento Angra&type=venda&tipologia=terreno" },
              { label: "Hotel / Pousadas", href: "/imoveis?q=São Bento Angra&type=venda&tipologia=hotel" },
            ],
          },
        ],
      },
      {
        name: "Areal - RJ",
        neighborhoods: [
          { name: "Alberto Torres", types: [{ label: "Sítios", href: "/imoveis?q=Alberto Torres&type=venda&tipologia=sitio" }] },
          {
            name: "Areal",
            types: [
              { label: "Casas", href: "/imoveis?q=Areal&type=venda&tipologia=casa" },
              { label: "Sítios", href: "/imoveis?q=Areal&type=venda&tipologia=sitio" },
              { label: "Terrenos", href: "/imoveis?q=Areal&type=venda&tipologia=terreno" },
            ],
          },
        ],
      },
      {
        name: "Armação dos Búzios - RJ",
        neighborhoods: [
          { name: "Armação dos Búzios", types: [{ label: "Casas", href: "/imoveis?q=Armação dos Búzios&type=venda&tipologia=casa" }] },
          { name: "Ferradura", types: [{ label: "Casas", href: "/imoveis?q=Ferradura&type=venda&tipologia=casa" }] },
          { name: "Ferradurinha", types: [{ label: "Casas", href: "/imoveis?q=Ferradurinha&type=venda&tipologia=casa" }] },
          {
            name: "Geribá",
            types: [
              { label: "Casas", href: "/imoveis?q=Geribá&type=venda&tipologia=casa" },
              { label: "Hotel / Pousadas", href: "/imoveis?q=Geribá&type=venda&tipologia=hotel" },
            ],
          },
          { name: "Humaitá", types: [{ label: "Casas", href: "/imoveis?q=Humaitá Búzios&type=venda&tipologia=casa" }] },
          { name: "Manguinhos", types: [{ label: "Casas", href: "/imoveis?q=Manguinhos&type=venda&tipologia=casa" }] },
          { name: "Portal da Ferradura", types: [{ label: "Casas", href: "/imoveis?q=Portal da Ferradura&type=venda&tipologia=casa" }] },
          { name: "Praia Rasa", types: [{ label: "Casas", href: "/imoveis?q=Praia Rasa&type=venda&tipologia=casa" }] },
          { name: "São José", types: [{ label: "Casas", href: "/imoveis?q=São José Búzios&type=venda&tipologia=casa" }] },
        ],
      },
      {
        name: "Barra Do Piraí - RJ",
        neighborhoods: [
          { name: "Barra Do Piraí", types: [{ label: "Fazendas", href: "/imoveis?q=Barra Do Piraí&type=venda&tipologia=fazenda" }] },
        ],
      },
      {
        name: "Engenheiro Paulo de Frontin - RJ",
        neighborhoods: [
          { name: "Fazenda Das Palmas", types: [{ label: "Casas", href: "/imoveis?q=Fazenda Das Palmas&type=venda&tipologia=casa" }] },
        ],
      },
      {
        name: "Mangaratiba - RJ",
        neighborhoods: [
          { name: "Portobello", types: [{ label: "Terrenos", href: "/imoveis?q=Portobello&type=venda&tipologia=terreno" }] },
        ],
      },
      {
        name: "Paraíba do Sul - RJ",
        neighborhoods: [
          { name: "Fagundes", types: [{ label: "Terrenos", href: "/imoveis?q=Fagundes&type=venda&tipologia=terreno" }] },
          { name: "Paraíba Do Sul", types: [{ label: "Sítios", href: "/imoveis?q=Paraíba Do Sul&type=venda&tipologia=sitio" }] },
          { name: "Secretário", types: [{ label: "Terrenos", href: "/imoveis?q=Secretário Paraíba&type=venda&tipologia=terreno" }] },
        ],
      },
      {
        name: "Paraty - RJ",
        neighborhoods: [
          { name: "Angra dos Reis", types: [{ label: "Casas", href: "/imoveis?q=Paraty&type=venda&tipologia=casa" }] },
        ],
      },
      {
        name: "Paty Do Alferes - RJ",
        neighborhoods: [
          {
            name: "Vale das Videiras",
            types: [
              { label: "Sítios", href: "/imoveis?q=Vale das Videiras&type=venda&tipologia=sitio" },
              { label: "Terrenos", href: "/imoveis?q=Vale das Videiras&type=venda&tipologia=terreno" },
            ],
          },
        ],
      },
      {
        name: "Petrópolis - RJ",
        neighborhoods: [
          {
            name: "Araras",
            types: [
              { label: "Casas", href: "/imoveis?q=Araras Petrópolis&type=venda&tipologia=casa" },
              { label: "Terrenos", href: "/imoveis?q=Araras Petrópolis&type=venda&tipologia=terreno" },
              { label: "Sítios", href: "/imoveis?q=Araras Petrópolis&type=venda&tipologia=sitio" },
              { label: "Flats", href: "/imoveis?q=Araras Petrópolis&type=venda&tipologia=flat" },
            ],
          },
          {
            name: "Bingen",
            types: [
              { label: "Prédio Comercial", href: "/imoveis?q=Bingen&type=venda&tipologia=prediocomercial" },
              { label: "Apartamentos", href: "/imoveis?q=Bingen&type=venda&tipologia=apartamento" },
              { label: "Casas", href: "/imoveis?q=Bingen&type=venda&tipologia=casa" },
              { label: "Terrenos", href: "/imoveis?q=Bingen&type=venda&tipologia=terreno" },
            ],
          },
          {
            name: "Bonsucesso",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Bonsucesso Petrópolis&type=venda&tipologia=apartamento" },
              { label: "Casas", href: "/imoveis?q=Bonsucesso Petrópolis&type=venda&tipologia=casa" },
              { label: "Terrenos", href: "/imoveis?q=Bonsucesso Petrópolis&type=venda&tipologia=terreno" },
            ],
          },
          { name: "Brejal", types: [{ label: "Sítios", href: "/imoveis?q=Brejal&type=venda&tipologia=sitio" }] },
          { name: "Carangola", types: [{ label: "Casas", href: "/imoveis?q=Carangola&type=venda&tipologia=casa" }] },
          { name: "Castelanea", types: [{ label: "Casas", href: "/imoveis?q=Castelanea&type=venda&tipologia=casa" }] },
          {
            name: "Centro",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Centro Petrópolis&type=venda&tipologia=apartamento" },
              { label: "Casas", href: "/imoveis?q=Centro Petrópolis&type=venda&tipologia=casa" },
              { label: "Coberturas", href: "/imoveis?q=Centro Petrópolis&type=venda&tipologia=cobertura" },
              { label: "Casa Comercial", href: "/imoveis?q=Centro Petrópolis&type=venda&tipologia=casacomercial" },
              { label: "Terrenos", href: "/imoveis?q=Centro Petrópolis&type=venda&tipologia=terreno" },
              { label: "Sala Comercial", href: "/imoveis?q=Centro Petrópolis&type=venda&tipologia=salacomercial" },
            ],
          },
          {
            name: "Coronel Veiga",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Coronel Veiga&type=venda&tipologia=apartamento" },
              { label: "Casas", href: "/imoveis?q=Coronel Veiga&type=venda&tipologia=casa" },
            ],
          },
          {
            name: "Corrêas",
            types: [
              { label: "Terrenos", href: "/imoveis?q=Corrêas&type=venda&tipologia=terreno" },
              { label: "Casas", href: "/imoveis?q=Corrêas&type=venda&tipologia=casa" },
              { label: "Apartamentos", href: "/imoveis?q=Corrêas&type=venda&tipologia=apartamento" },
              { label: "Lofts", href: "/imoveis?q=Corrêas&type=venda&tipologia=loft" },
            ],
          },
          {
            name: "Cuiabá",
            types: [
              { label: "Casas", href: "/imoveis?q=Cuiabá Petrópolis&type=venda&tipologia=casa" },
              { label: "Terrenos", href: "/imoveis?q=Cuiabá Petrópolis&type=venda&tipologia=terreno" },
            ],
          },
          {
            name: "Duarte Silveira",
            types: [
              { label: "Casas", href: "/imoveis?q=Duarte Silveira&type=venda&tipologia=casa" },
              { label: "Terrenos", href: "/imoveis?q=Duarte Silveira&type=venda&tipologia=terreno" },
            ],
          },
          { name: "Duchas", types: [{ label: "Casas", href: "/imoveis?q=Duchas&type=venda&tipologia=casa" }] },
          { name: "Estrada da Saudade", types: [{ label: "Casas", href: "/imoveis?q=Estrada da Saudade&type=venda&tipologia=casa" }] },
          { name: "Fazenda Inglesa", types: [{ label: "Casas", href: "/imoveis?q=Fazenda Inglesa&type=venda&tipologia=casa" }] },
          { name: "Independência", types: [{ label: "Casas", href: "/imoveis?q=Independência Petrópolis&type=venda&tipologia=casa" }] },
          {
            name: "Itaipava",
            types: [
              { label: "Casas", href: "/imoveis?q=Itaipava&type=venda&tipologia=casa" },
              { label: "Apartamentos", href: "/imoveis?q=Itaipava&type=venda&tipologia=apartamento" },
              { label: "Terrenos", href: "/imoveis?q=Itaipava&type=venda&tipologia=terreno" },
              { label: "Flats", href: "/imoveis?q=Itaipava&type=venda&tipologia=flat" },
              { label: "Coberturas", href: "/imoveis?q=Itaipava&type=venda&tipologia=cobertura" },
              { label: "Sala Comercial", href: "/imoveis?q=Itaipava&type=venda&tipologia=salacomercial" },
            ],
          },
          { name: "Morin", types: [{ label: "Casas", href: "/imoveis?q=Morin&type=venda&tipologia=casa" }] },
          {
            name: "Mosela",
            types: [
              { label: "Casas", href: "/imoveis?q=Mosela&type=venda&tipologia=casa" },
              { label: "Terrenos", href: "/imoveis?q=Mosela&type=venda&tipologia=terreno" },
            ],
          },
          {
            name: "Nogueira",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Nogueira&type=venda&tipologia=apartamento" },
              { label: "Casas", href: "/imoveis?q=Nogueira&type=venda&tipologia=casa" },
              { label: "Coberturas", href: "/imoveis?q=Nogueira&type=venda&tipologia=cobertura" },
              { label: "Terrenos", href: "/imoveis?q=Nogueira&type=venda&tipologia=terreno" },
            ],
          },
          {
            name: "Pedro do Rio",
            types: [
              { label: "Casas", href: "/imoveis?q=Pedro do Rio&type=venda&tipologia=casa" },
              { label: "Terrenos", href: "/imoveis?q=Pedro do Rio&type=venda&tipologia=terreno" },
            ],
          },
          {
            name: "Posse",
            types: [
              { label: "Casas", href: "/imoveis?q=Posse&type=venda&tipologia=casa" },
              { label: "Terrenos", href: "/imoveis?q=Posse&type=venda&tipologia=terreno" },
            ],
          },
          { name: "Quarteirão Brasileiro", types: [{ label: "Casas", href: "/imoveis?q=Quarteirão Brasileiro&type=venda&tipologia=casa" }] },
          {
            name: "Quarteirão Ingelheim",
            types: [
              { label: "Casas", href: "/imoveis?q=Quarteirão Ingelheim&type=venda&tipologia=casa" },
              { label: "Hotel / Pousadas", href: "/imoveis?q=Quarteirão Ingelheim&type=venda&tipologia=hotel" },
            ],
          },
          {
            name: "Quitandinha",
            types: [
              { label: "Casas", href: "/imoveis?q=Quitandinha&type=venda&tipologia=casa" },
              { label: "Apartamentos", href: "/imoveis?q=Quitandinha&type=venda&tipologia=apartamento" },
            ],
          },
          {
            name: "Retiro",
            types: [
              { label: "Casas", href: "/imoveis?q=Retiro Petrópolis&type=venda&tipologia=casa" },
              { label: "Apartamentos", href: "/imoveis?q=Retiro Petrópolis&type=venda&tipologia=apartamento" },
              { label: "Coberturas", href: "/imoveis?q=Retiro Petrópolis&type=venda&tipologia=cobertura" },
              { label: "Terrenos", href: "/imoveis?q=Retiro Petrópolis&type=venda&tipologia=terreno" },
            ],
          },
          { name: "Rocio", types: [{ label: "Casas", href: "/imoveis?q=Rocio&type=venda&tipologia=casa" }] },
          { name: "Saldanha Marinho", types: [{ label: "Casas", href: "/imoveis?q=Saldanha Marinho&type=venda&tipologia=casa" }] },
          {
            name: "Samambaia",
            types: [
              { label: "Casas", href: "/imoveis?q=Samambaia&type=venda&tipologia=casa" },
              { label: "Coberturas", href: "/imoveis?q=Samambaia&type=venda&tipologia=cobertura" },
            ],
          },
          {
            name: "Secretário",
            types: [
              { label: "Casas", href: "/imoveis?q=Secretário Petrópolis&type=venda&tipologia=casa" },
              { label: "Terrenos", href: "/imoveis?q=Secretário Petrópolis&type=venda&tipologia=terreno" },
            ],
          },
          { name: "Taquara", types: [{ label: "Casas", href: "/imoveis?q=Taquara Petrópolis&type=venda&tipologia=casa" }] },
          {
            name: "Vale das Videiras",
            types: [
              { label: "Terrenos", href: "/imoveis?q=Vale das Videiras&type=venda&tipologia=terreno" },
              { label: "Casas", href: "/imoveis?q=Vale das Videiras&type=venda&tipologia=casa" },
            ],
          },
          {
            name: "Valparaíso",
            types: [
              { label: "Casas", href: "/imoveis?q=Valparaíso&type=venda&tipologia=casa" },
              { label: "Apartamentos", href: "/imoveis?q=Valparaíso&type=venda&tipologia=apartamento" },
              { label: "Coberturas", href: "/imoveis?q=Valparaíso&type=venda&tipologia=cobertura" },
              { label: "Terrenos", href: "/imoveis?q=Valparaíso&type=venda&tipologia=terreno" },
            ],
          },
        ],
      },
      {
        name: "Rio de Janeiro - RJ",
        neighborhoods: [
          { name: "Alto da Boa Vista", types: [{ label: "Casas", href: "/imoveis?q=Alto da Boa Vista&type=venda&tipologia=casa" }] },
          {
            name: "Barra da Tijuca",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Barra da Tijuca&type=venda&tipologia=apartamento" },
              { label: "Casas", href: "/imoveis?q=Barra da Tijuca&type=venda&tipologia=casa" },
              { label: "Coberturas", href: "/imoveis?q=Barra da Tijuca&type=venda&tipologia=cobertura" },
              { label: "Lojas", href: "/imoveis?q=Barra da Tijuca&type=venda&tipologia=loja" },
              { label: "Flats", href: "/imoveis?q=Barra da Tijuca&type=venda&tipologia=flat" },
              { label: "Sala Comercial", href: "/imoveis?q=Barra da Tijuca&type=venda&tipologia=salacomercial" },
              { label: "Terrenos", href: "/imoveis?q=Barra da Tijuca&type=venda&tipologia=terreno" },
            ],
          },
          {
            name: "Botafogo",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Botafogo&type=venda&tipologia=apartamento" },
              { label: "Coberturas", href: "/imoveis?q=Botafogo&type=venda&tipologia=cobertura" },
              { label: "Casas", href: "/imoveis?q=Botafogo&type=venda&tipologia=casa" },
            ],
          },
          {
            name: "Copacabana",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Copacabana&type=venda&tipologia=apartamento" },
              { label: "Coberturas", href: "/imoveis?q=Copacabana&type=venda&tipologia=cobertura" },
            ],
          },
          { name: "Cosme Velho", types: [{ label: "Casas", href: "/imoveis?q=Cosme Velho&type=venda&tipologia=casa" }] },
          {
            name: "Flamengo",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Flamengo&type=venda&tipologia=apartamento" },
              { label: "Coberturas", href: "/imoveis?q=Flamengo&type=venda&tipologia=cobertura" },
            ],
          },
          {
            name: "Gávea",
            types: [
              { label: "Coberturas", href: "/imoveis?q=Gávea&type=venda&tipologia=cobertura" },
              { label: "Apartamentos", href: "/imoveis?q=Gávea&type=venda&tipologia=apartamento" },
              { label: "Lofts", href: "/imoveis?q=Gávea&type=venda&tipologia=loft" },
              { label: "Casas", href: "/imoveis?q=Gávea&type=venda&tipologia=casa" },
              { label: "Lojas", href: "/imoveis?q=Gávea&type=venda&tipologia=loja" },
            ],
          },
          {
            name: "Humaitá",
            types: [
              { label: "Coberturas", href: "/imoveis?q=Humaitá&type=venda&tipologia=cobertura" },
              { label: "Apartamentos", href: "/imoveis?q=Humaitá&type=venda&tipologia=apartamento" },
              { label: "Casas", href: "/imoveis?q=Humaitá&type=venda&tipologia=casa" },
              { label: "Casa Comercial", href: "/imoveis?q=Humaitá&type=venda&tipologia=casacomercial" },
            ],
          },
          {
            name: "Ipanema",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Ipanema&type=venda&tipologia=apartamento" },
              { label: "Coberturas", href: "/imoveis?q=Ipanema&type=venda&tipologia=cobertura" },
              { label: "Flats", href: "/imoveis?q=Ipanema&type=venda&tipologia=flat" },
              { label: "Sala Comercial", href: "/imoveis?q=Ipanema&type=venda&tipologia=salacomercial" },
              { label: "Prédio Comercial", href: "/imoveis?q=Ipanema&type=venda&tipologia=prediocomercial" },
            ],
          },
          {
            name: "Itanhangá",
            types: [
              { label: "Casas", href: "/imoveis?q=Itanhangá&type=venda&tipologia=casa" },
              { label: "Apartamentos", href: "/imoveis?q=Itanhangá&type=venda&tipologia=apartamento" },
              { label: "Terrenos", href: "/imoveis?q=Itanhangá&type=venda&tipologia=terreno" },
            ],
          },
          { name: "Jacarepaguá", types: [{ label: "Casas", href: "/imoveis?q=Jacarepaguá&type=venda&tipologia=casa" }] },
          {
            name: "Jardim Botânico",
            types: [
              { label: "Casas", href: "/imoveis?q=Jardim Botânico&type=venda&tipologia=casa" },
              { label: "Coberturas", href: "/imoveis?q=Jardim Botânico&type=venda&tipologia=cobertura" },
              { label: "Apartamentos", href: "/imoveis?q=Jardim Botânico&type=venda&tipologia=apartamento" },
              { label: "Terrenos", href: "/imoveis?q=Jardim Botânico&type=venda&tipologia=terreno" },
            ],
          },
          {
            name: "Joá",
            types: [
              { label: "Terrenos", href: "/imoveis?q=Joá&type=venda&tipologia=terreno" },
              { label: "Casas", href: "/imoveis?q=Joá&type=venda&tipologia=casa" },
            ],
          },
          {
            name: "Lagoa",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Lagoa&type=venda&tipologia=apartamento" },
              { label: "Coberturas", href: "/imoveis?q=Lagoa&type=venda&tipologia=cobertura" },
              { label: "Casas", href: "/imoveis?q=Lagoa&type=venda&tipologia=casa" },
              { label: "Flats", href: "/imoveis?q=Lagoa&type=venda&tipologia=flat" },
            ],
          },
          {
            name: "Laranjeiras",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Laranjeiras&type=venda&tipologia=apartamento" },
              { label: "Casas", href: "/imoveis?q=Laranjeiras&type=venda&tipologia=casa" },
              { label: "Coberturas", href: "/imoveis?q=Laranjeiras&type=venda&tipologia=cobertura" },
            ],
          },
          {
            name: "Leblon",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Leblon&type=venda&tipologia=apartamento" },
              { label: "Coberturas", href: "/imoveis?q=Leblon&type=venda&tipologia=cobertura" },
              { label: "Casas", href: "/imoveis?q=Leblon&type=venda&tipologia=casa" },
            ],
          },
          { name: "Leme", types: [{ label: "Coberturas", href: "/imoveis?q=Leme&type=venda&tipologia=cobertura" }] },
          { name: "Recreio dos Bandeirantes", types: [{ label: "Apartamentos", href: "/imoveis?q=Recreio dos Bandeirantes&type=venda&tipologia=apartamento" }] },
          {
            name: "São Conrado",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=São Conrado&type=venda&tipologia=apartamento" },
              { label: "Coberturas", href: "/imoveis?q=São Conrado&type=venda&tipologia=cobertura" },
              { label: "Casas", href: "/imoveis?q=São Conrado&type=venda&tipologia=casa" },
              { label: "Terrenos", href: "/imoveis?q=São Conrado&type=venda&tipologia=terreno" },
            ],
          },
          {
            name: "Urca",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Urca&type=venda&tipologia=apartamento" },
              { label: "Casas", href: "/imoveis?q=Urca&type=venda&tipologia=casa" },
            ],
          },
          { name: "Vargem Grande", types: [{ label: "Casas", href: "/imoveis?q=Vargem Grande RJ&type=venda&tipologia=casa" }] },
          { name: "Vidigal", types: [{ label: "Casas", href: "/imoveis?q=Vidigal&type=venda&tipologia=casa" }] },
        ],
      },
      {
        name: "São José do Vale do Rio Preto - RJ",
        neighborhoods: [
          { name: "São José do Vale do Rio Preto", types: [{ label: "Casas", href: "/imoveis?q=São José do Vale do Rio Preto&type=venda&tipologia=casa" }] },
        ],
      },
      {
        name: "Teresópolis - RJ",
        neighborhoods: [
          { name: "Albuquerque", types: [{ label: "Casas", href: "/imoveis?q=Albuquerque Teresópolis&type=venda&tipologia=casa" }] },
          { name: "Área Rural de Teresópolis", types: [{ label: "Fazendas", href: "/imoveis?q=Área Rural Teresópolis&type=venda&tipologia=fazenda" }] },
          { name: "Carlos Guinle", types: [{ label: "Casas", href: "/imoveis?q=Carlos Guinle&type=venda&tipologia=casa" }] },
          { name: "Parque do Imbui", types: [{ label: "Casas", href: "/imoveis?q=Parque do Imbui&type=venda&tipologia=casa" }] },
          { name: "Vargem Grande", types: [{ label: "Terrenos", href: "/imoveis?q=Vargem Grande Teresópolis&type=venda&tipologia=terreno" }] },
        ],
      },
      {
        name: "Três Rios - RJ",
        neighborhoods: [
          { name: "Bemposta", types: [{ label: "Fazendas", href: "/imoveis?q=Bemposta&type=venda&tipologia=fazenda" }] },
        ],
      },
      {
        name: "Vassouras - RJ",
        neighborhoods: [
          { name: "Vassouras", types: [{ label: "Casas", href: "/imoveis?q=Vassouras&type=venda&tipologia=casa" }] },
        ],
      },
    ],
  },
  {
    name: "Alugar",
    cities: [
      {
        name: "Angra dos Reis - RJ",
        neighborhoods: [
          { name: "Marinas", types: [{ label: "Casas", href: "/imoveis?q=Marinas Angra&type=locação&tipologia=casa" }] },
        ],
      },
      {
        name: "Petrópolis - RJ",
        neighborhoods: [
          { name: "Araras", types: [{ label: "Casas", href: "/imoveis?q=Araras Petrópolis&type=locação&tipologia=casa" }] },
          { name: "Bonsucesso", types: [{ label: "Casas", href: "/imoveis?q=Bonsucesso Petrópolis&type=locação&tipologia=casa" }] },
          {
            name: "Centro",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Centro Petrópolis&type=locação&tipologia=apartamento" },
              { label: "Casas", href: "/imoveis?q=Centro Petrópolis&type=locação&tipologia=casa" },
              { label: "Coberturas", href: "/imoveis?q=Centro Petrópolis&type=locação&tipologia=cobertura" },
              { label: "Lojas", href: "/imoveis?q=Centro Petrópolis&type=locação&tipologia=loja" },
            ],
          },
          {
            name: "Corrêas",
            types: [
              { label: "Casas", href: "/imoveis?q=Corrêas&type=locação&tipologia=casa" },
              { label: "Apartamentos", href: "/imoveis?q=Corrêas&type=locação&tipologia=apartamento" },
            ],
          },
          { name: "Cuiabá", types: [{ label: "Casas", href: "/imoveis?q=Cuiabá Petrópolis&type=locação&tipologia=casa" }] },
          { name: "Fazenda Inglesa", types: [{ label: "Casas", href: "/imoveis?q=Fazenda Inglesa&type=locação&tipologia=casa" }] },
          { name: "Independência", types: [{ label: "Casas", href: "/imoveis?q=Independência Petrópolis&type=locação&tipologia=casa" }] },
          {
            name: "Itaipava",
            types: [
              { label: "Casas", href: "/imoveis?q=Itaipava&type=locação&tipologia=casa" },
              { label: "Coberturas", href: "/imoveis?q=Itaipava&type=locação&tipologia=cobertura" },
              { label: "Apartamentos", href: "/imoveis?q=Itaipava&type=locação&tipologia=apartamento" },
            ],
          },
          { name: "Nogueira", types: [{ label: "Casas", href: "/imoveis?q=Nogueira&type=locação&tipologia=casa" }] },
          { name: "Pedro do Rio", types: [{ label: "Casas", href: "/imoveis?q=Pedro do Rio&type=locação&tipologia=casa" }] },
          { name: "Quarteirão Brasileiro", types: [{ label: "Sala Comercial", href: "/imoveis?q=Quarteirão Brasileiro&type=locação&tipologia=salacomercial" }] },
          { name: "Samambaia", types: [{ label: "Casas", href: "/imoveis?q=Samambaia&type=locação&tipologia=casa" }] },
          { name: "Secretário", types: [{ label: "Casas", href: "/imoveis?q=Secretário Petrópolis&type=locação&tipologia=casa" }] },
          { name: "Valparaíso", types: [{ label: "Casas", href: "/imoveis?q=Valparaíso&type=locação&tipologia=casa" }] },
        ],
      },
      {
        name: "Rio de Janeiro - RJ",
        neighborhoods: [
          {
            name: "Barra da Tijuca",
            types: [
              { label: "Casas", href: "/imoveis?q=Barra da Tijuca&type=locação&tipologia=casa" },
              { label: "Coberturas", href: "/imoveis?q=Barra da Tijuca&type=locação&tipologia=cobertura" },
              { label: "Apartamentos", href: "/imoveis?q=Barra da Tijuca&type=locação&tipologia=apartamento" },
              { label: "Sala Comercial", href: "/imoveis?q=Barra da Tijuca&type=locação&tipologia=salacomercial" },
              { label: "Flats", href: "/imoveis?q=Barra da Tijuca&type=locação&tipologia=flat" },
            ],
          },
          {
            name: "Botafogo",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Botafogo&type=locação&tipologia=apartamento" },
              { label: "Prédio Comercial", href: "/imoveis?q=Botafogo&type=locação&tipologia=prediocomercial" },
              { label: "Lojas", href: "/imoveis?q=Botafogo&type=locação&tipologia=loja" },
            ],
          },
          {
            name: "Centro",
            types: [
              { label: "Sala Comercial", href: "/imoveis?q=Centro RJ&type=locação&tipologia=salacomercial" },
              { label: "Lojas", href: "/imoveis?q=Centro RJ&type=locação&tipologia=loja" },
            ],
          },
          { name: "Copacabana", types: [{ label: "Apartamentos", href: "/imoveis?q=Copacabana&type=locação&tipologia=apartamento" }] },
          { name: "Flamengo", types: [{ label: "Apartamentos", href: "/imoveis?q=Flamengo&type=locação&tipologia=apartamento" }] },
          {
            name: "Gávea",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Gávea&type=locação&tipologia=apartamento" },
              { label: "Sala Comercial", href: "/imoveis?q=Gávea&type=locação&tipologia=salacomercial" },
              { label: "Lojas", href: "/imoveis?q=Gávea&type=locação&tipologia=loja" },
              { label: "Casas", href: "/imoveis?q=Gávea&type=locação&tipologia=casa" },
            ],
          },
          {
            name: "Ipanema",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Ipanema&type=locação&tipologia=apartamento" },
              { label: "Prédio Comercial", href: "/imoveis?q=Ipanema&type=locação&tipologia=prediocomercial" },
              { label: "Coberturas", href: "/imoveis?q=Ipanema&type=locação&tipologia=cobertura" },
            ],
          },
          { name: "Itanhangá", types: [{ label: "Casas", href: "/imoveis?q=Itanhangá&type=locação&tipologia=casa" }] },
          { name: "Jardim Botânico", types: [{ label: "Coberturas", href: "/imoveis?q=Jardim Botânico&type=locação&tipologia=cobertura" }] },
          { name: "Lagoa", types: [{ label: "Apartamentos", href: "/imoveis?q=Lagoa&type=locação&tipologia=apartamento" }] },
          {
            name: "Leblon",
            types: [
              { label: "Apartamentos", href: "/imoveis?q=Leblon&type=locação&tipologia=apartamento" },
              { label: "Coberturas", href: "/imoveis?q=Leblon&type=locação&tipologia=cobertura" },
              { label: "Casas", href: "/imoveis?q=Leblon&type=locação&tipologia=casa" },
            ],
          },
          { name: "Leme", types: [{ label: "Coberturas", href: "/imoveis?q=Leme&type=locação&tipologia=cobertura" }] },
        ],
      },
    ],
  },
  {
    name: "Temporada",
    cities: [
      {
        name: "Angra dos Reis - RJ",
        neighborhoods: [
          { name: "Marinas", types: [{ label: "Casas", href: "/imoveis?q=Marinas Angra&type=temporada&tipologia=casa" }] },
          { name: "Mombaça", types: [{ label: "Casas", href: "/imoveis?q=Mombaça&type=temporada&tipologia=casa" }] },
          { name: "Piraquara (Cunhambebe)", types: [{ label: "Casas", href: "/imoveis?q=Piraquara&type=temporada&tipologia=casa" }] },
          { name: "São Bento", types: [{ label: "Casas", href: "/imoveis?q=São Bento Angra&type=temporada&tipologia=casa" }] },
          { name: "Tanguá", types: [{ label: "Casas", href: "/imoveis?q=Tanguá&type=temporada&tipologia=casa" }] },
        ],
      },
      {
        name: "Paraty - RJ",
        neighborhoods: [
          { name: "Angra dos Reis", types: [{ label: "Casas", href: "/imoveis?q=Paraty&type=temporada&tipologia=casa" }] },
        ],
      },
      {
        name: "Petrópolis - RJ",
        neighborhoods: [
          {
            name: "Araras",
            types: [
              { label: "Casas", href: "/imoveis?q=Araras Petrópolis&type=temporada&tipologia=casa" },
              { label: "Sítios", href: "/imoveis?q=Araras Petrópolis&type=temporada&tipologia=sitio" },
            ],
          },
          { name: "Brejal", types: [{ label: "Casas", href: "/imoveis?q=Brejal&type=temporada&tipologia=casa" }] },
          { name: "Corrêas", types: [{ label: "Casas", href: "/imoveis?q=Corrêas&type=temporada&tipologia=casa" }] },
          { name: "Cuiabá", types: [{ label: "Casas", href: "/imoveis?q=Cuiabá Petrópolis&type=temporada&tipologia=casa" }] },
          { name: "Fazenda Inglesa", types: [{ label: "Casas", href: "/imoveis?q=Fazenda Inglesa&type=temporada&tipologia=casa" }] },
          { name: "Itaipava", types: [{ label: "Casas", href: "/imoveis?q=Itaipava&type=temporada&tipologia=casa" }] },
          { name: "Nogueira", types: [{ label: "Casas", href: "/imoveis?q=Nogueira&type=temporada&tipologia=casa" }] },
          { name: "Pedro do Rio", types: [{ label: "Casas", href: "/imoveis?q=Pedro do Rio&type=temporada&tipologia=casa" }] },
          { name: "Secretário", types: [{ label: "Casas", href: "/imoveis?q=Secretário Petrópolis&type=temporada&tipologia=casa" }] },
        ],
      },
      {
        name: "Teresópolis - RJ",
        neighborhoods: [
          { name: "Carlos Guinle", types: [{ label: "Casas", href: "/imoveis?q=Carlos Guinle&type=temporada&tipologia=casa" }] },
        ],
      },
    ],
  },
];

export default sitemapData;
