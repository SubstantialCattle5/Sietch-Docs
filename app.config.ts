export default defineAppConfig({
  docus: {
    // Basic site information
    title: "Sietch Vault",
    titleTemplate: "%s - Sietch Vault",
    description:
      "A secure, nomadic file system for harsh, disconnected environments.",
    url: "https://sietch-vault.io", // Update with your actual URL
    image: "/images/sietch-social-card.png", // Consider using a local image

    // Social links configuration
    socials: {
      github: "SubstantialCattle5/Sietch",
      twitter: "@SietchVault", // If available
      // Custom social link
      website: {
        label: "Official Website",
        icon: "material-symbols:language",
        href: "https://nilaysharan.com/",
        rel: "noopener noreferrer",
      },
      // Consider adding these for wider reach
      // youtube: "sietch-vault",
      // medium: "@sietch-vault",
    },

    // GitHub integration settings
    github: {
      root: "content",
      edit: true,
      contributors: true,
      owner: "SubstantialCattle5",
      repo: "Sietch",
      branch: "main",
      dir: "docs", // If your docs are in a specific directory
    },

    // Global layout default
    layout: "default",

    // Aside navigation configuration
    aside: {
      level: 1, // Show H1 headings in the sidebar
      collapsed: false, // Default state of collapsible navigation
      exclude: ["/legal", "/private"], // Paths to exclude from sidebar
      filter: [], // Additional filtering options
    },

    // Main content area settings
    main: {
      padded: true,
      fluid: true, // Full width content
    },

    // Header configuration
    header: {
      logo: true, // Use Logo.vue component
      title: "sietch", // Custom title in header
      showLinkIcon: true, // Show icons next to links
      exclude: ["/404", "/private"], // Pages to exclude from header nav
      fluid: true, // Full width header
    },

    // Footer configuration
    footer: {
      credits: {
        icon: "noto:shield", // Uses an icon that matches your security theme
        text: "Secured by Sietch Vault",
        href: "https://github.com/SubstantialCattle5/Sietch",
      },
      textLinks: [
        {
          text: "Documentation",
          href: "/docs",
          target: "_self",
        },
        {
          text: "Security",
          href: "/security",
          target: "_self",
        },
        {
          text: "Contributing",
          href: "https://github.com/SubstantialCattle5/Sietch/blob/main/CONTRIBUTING.md",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      ],
      iconLinks: [
        {
          label: "GitHub",
          href: "https://github.com/SubstantialCattle5/Sietch",
          icon: "mdi:github",
        },
        {
          label: "Discord Community",
          href: "https://discord.gg/sietch", // Update with actual Discord link if available
          icon: "mdi:discord",
        },
      ],
      fluid: true, // Full width footer
    },

    // Search configuration
    fuse: {
      // Fuzzy search options
      fuseOptions: {
        keys: ["title", "description", "headers"],
        threshold: 0.2,
        distance: 100,
      },
      // Optional search result highlighting
      highlight: true,
    },
  },
});
