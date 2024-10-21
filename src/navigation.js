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
      title: "Pronto Clínica Pediátrica",
      address: "Rua 83, 603. Setor Sul",
      map: {
        id: "pronto-clinica",
        title: "Localização Pronto Clínica Pediátrica",
        latlng: "Pronto+Clínica+Pediátrica/@-16.6841012,-49.2518424",
      },
      tel: [
        {
          text: "(62) 3218-2722",
          href: "tel:+556232182722",
        },
      ],
    },
    {
      title: "Clínica Ver Crescer",
      address:
        "Av. Multirão com a Portugal, 1148, Setor Marista.<br />Ed. Órion Business & Health,<br />Sala 2707 C, 27º andar.",
      map: {
        id: "clinica-vercrescer",
        title: "Localização Clínica Ver Crescer",
        latlng:
          "Clinica+Ver+Crescer+Pediatria+e+Ultrassonografia/@-16.697015,-49.269493",
      },
      tel: [
        { text: "(62) 9 9316-2918", href: "tel:+5562993162918" },
        { text: "(62) 3626-4195", href: "tel:+556236264195" },
      ],
    },
  ],
  secondaryLinks: [
    {
      text: "@bento_segundo",
      href: "https://instagram.com/bento_segundo",
    },
    // { text: 'Whatsapp +55 62 9', href: 'https://wa.me/55629' },
  ],
  socialLinks: [
    {
      ariaLabel: "Instagram",
      icon: "tabler:brand-instagram",
      href: "https://instagram.com/bento_segundo",
    },
    {
      ariaLabel: "Email",
      icon: "tabler:mail",
      href: "mailto:",
    },
  ],
  footNote: `
    Feito por <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://gmtborges.com/" target="_blank">gmtborges.com</a>
  `,
};
