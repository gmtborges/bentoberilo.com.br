export const headerData = {
  links: [
    { text: "Início", href: "/" },
    { text: "Sobre mim", href: "/#sobre-mim" },
    { text: "Currículo", href: "/#curriculo" },
    { text: "Cirurgias e Procedimentos", href: "/#cirurgias" },
    // { text: "Blog", href: "/blog" },
  ],
  actions: [
    {
      text: "Agendar",
      href: "/agendar",
    },
  ],
};

export const footerData = {
  addresses: [
    {
      title: "Clínica Otorhinus",
      address:
        "Av. Rio Madeira, 380 - Nossa Senhora das Graças Manaus/AM - CEP: 69053-030",
      map: {
        id: "clinica-otorhinus",
        title: "Localização Clínica Otorhinus",
        latlng:
          "Otorhinus+Manaus+-+Otorrinolaringologista+em+Manaus/@-3.1064925,-60.0229435",
      },
      tel: [
        {
          text: "(92) 98451-6306",
          href: "tel:+5592984516306",
        },
      ],
    },
    {
      title: "Clínica Otorrinosky",
      address: "Av. Via Láctea, 11 - Aleixo, Manaus - AM, 69060-085",
      map: {
        id: "clinica-otorrinosky",
        title: "Localização Clínica Otorrinosky",
        latlng: "Clinical+Otorhinolaryngology+Sky/@-3.0936697,-59.9986145",
      },
      tel: [{ text: "(92) 98210-4866", href: "tel:+5592982104866" }],
    },
  ],
  secondaryLinks: [
    {
      text: "@bento_segundo",
      href: "https://instagram.com/bento_segundo",
    },
    // { text: 'Whatsapp +55 62 9', href: 'https://wa.me/55629' },
  ],
  footNote: `
    Feito por <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://gmtborges.com/" target="_blank">gmtborges.com</a>
  `,
};
