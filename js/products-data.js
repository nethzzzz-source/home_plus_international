/* Home Plus International - product + category data (EN/DE) */

(function () {
  const PLACEHOLDER_IMAGE = 'assets/images/drink-placeholder.svg';

  window.HomePlusProductsData = {
    categories: [
      {
        id: 'soft',
        icon: 'assets/images/icon-soft.svg',
        label: { en: 'Soft Drinks', de: 'Erfrischungsgetränke' },
      },
      {
        id: 'juices',
        icon: 'assets/images/icon-juices.svg',
        label: { en: 'Juices', de: 'Säfte' },
      },
      {
        id: 'water',
        icon: 'assets/images/icon-water.svg',
        label: { en: 'Mineral Water', de: 'Mineralwasser' },
      },
      {
        id: 'energy',
        icon: 'assets/images/icon-energy.svg',
        label: { en: 'Energy Drinks', de: 'Energy-Drinks' },
      },
      {
        id: 'alcoholic',
        icon: 'assets/images/icon-alcohol.svg',
        label: { en: 'Alcoholic Beverages', de: 'Alkoholische Getränke' },
      },
    ],

    products: [
      {
        id: 'cola-classic',
        categoryId: 'soft',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Cola Classic', de: 'Cola Classic' },
        description: {
          en: 'Crisp, refreshing cola for everyday demand.',
          de: 'Spritzige, erfrischende Cola für den täglichen Bedarf.',
        },
        packaging: { en: 'Bottles & bulk', de: 'Flaschen & Großgebinde' },
        badges: ['bestSeller'],
      },
      {
        id: 'lemon-soda',
        categoryId: 'soft',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Lemon Soda', de: 'Zitronenlimonade' },
        description: {
          en: 'Zesty lemon flavor with a clean finish.',
          de: 'Herber Zitronengeschmack mit klarem Finish.',
        },
        packaging: { en: 'Cans & bottles', de: 'Dosen & Flaschen' },
        badges: [],
      },
      {
        id: 'tropical-soda',
        categoryId: 'soft',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Tropical Soda', de: 'Tropische Limonade' },
        description: {
          en: 'A premium tropical blend for modern menus.',
          de: 'Premium tropische Mischung für moderne Speisekarten.',
        },
        packaging: { en: 'Cans', de: 'Dosen' },
        badges: ['discountAvailable'],
      },

      {
        id: 'orange-juice',
        categoryId: 'juices',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Orange Juice 1L', de: 'Orangensaft 1L' },
        description: {
          en: 'Fresh taste—ideal for breakfast and on-the-go.',
          de: 'Frischer Geschmack – ideal für Frühstück und unterwegs.',
        },
        packaging: { en: '1L bottles', de: '1L Flaschen' },
        badges: [],
      },
      {
        id: 'apple-juice',
        categoryId: 'juices',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Apple Juice', de: 'Apfelsaft' },
        description: {
          en: 'Natural apple flavor with a smooth, balanced taste.',
          de: 'Natürliches Apfelaroma mit sanftem, ausgewogenem Geschmack.',
        },
        packaging: { en: 'Bottles & bulk', de: 'Flaschen & Großgebinde' },
        badges: ['bestSeller', 'discountAvailable'],
      },
      {
        id: 'multifruit-juice',
        categoryId: 'juices',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Multifruit Juice', de: 'Multifruchtsaft' },
        description: {
          en: 'A colorful blend that customers love all year.',
          de: 'Bunt gemischt – beliebt bei Kunden das ganze Jahr.',
        },
        packaging: { en: 'Cans & bottles', de: 'Dosen & Flaschen' },
        badges: [],
      },

      {
        id: 'still-water-500',
        categoryId: 'water',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Still Mineral Water 500ml', de: 'Mineralwasser still 500ml' },
        description: {
          en: 'Everyday hydration with consistent quality.',
          de: 'Alltags-Hydration mit gleichbleibender Qualität.',
        },
        packaging: { en: 'Bottles & bulk', de: 'Flaschen & Großgebinde' },
        badges: ['bestSeller', 'discountAvailable'],
      },
      {
        id: 'sparkling-water-500',
        categoryId: 'water',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Sparkling Mineral Water 500ml', de: 'Mineralwasser spritzig 500ml' },
        description: {
          en: 'Fresh bubbles and reliable availability.',
          de: 'Frische Perlage und verlässliche Verfügbarkeit.',
        },
        packaging: { en: 'Bottles & bulk', de: 'Flaschen & Großgebinde' },
        badges: ['discountAvailable'],
      },
      {
        id: 'water-2l-bottle',
        categoryId: 'water',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Mineral Water 2L', de: 'Mineralwasser 2L' },
        description: {
          en: 'Great for offices, events, and high-demand venues.',
          de: 'Ideal für Büros, Events und Locations mit hohem Bedarf.',
        },
        packaging: { en: '2L bottles', de: '2L Flaschen' },
        badges: [],
      },

      {
        id: 'energy-250',
        categoryId: 'energy',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Energy Drink 250ml', de: 'Energy-Drink 250ml' },
        description: {
          en: 'Crisp energy—popular with restaurants and retailers.',
          de: 'Kräftiger Kick – beliebt bei Gastronomie und Handel.',
        },
        packaging: { en: 'Cans', de: 'Dosen' },
        badges: ['bestSeller'],
      },
      {
        id: 'energy-zero-250',
        categoryId: 'energy',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Energy Drink Zero 250ml', de: 'Energy-Drink Zero 250ml' },
        description: {
          en: 'Refreshing energy with zero sugar (placeholder).',
          de: 'Erfrischende Energie ohne Zucker (Platzhalter).',
        },
        packaging: { en: 'Cans', de: 'Dosen' },
        badges: ['discountAvailable'],
      },
      {
        id: 'energy-500-bulk',
        categoryId: 'energy',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Energy Mix Bulk', de: 'Energy Mix Großgebinde' },
        description: {
          en: 'Bulk-ready assortment for high-volume outlets.',
          de: 'Sortiment für Großmengen – für stark frequentierte Standorte.',
        },
        packaging: { en: 'Bulk', de: 'Großgebinde' },
        badges: [],
      },

      {
        id: 'lager-500',
        categoryId: 'alcoholic',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Lager Beer 500ml', de: 'Bier Lager 500ml' },
        description: {
          en: 'A balanced lager for bars and events (placeholder).',
          de: 'Ein ausgewogenes Lager für Bars und Events (Platzhalter).',
        },
        packaging: { en: 'Bottles & crates', de: 'Flaschen & Kisten' },
        badges: ['discountAvailable'],
      },
      {
        id: 'wine-red',
        categoryId: 'alcoholic',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Red Wine 750ml', de: 'Rotwein 750ml' },
        description: {
          en: 'Premium selection for restaurants and retail (placeholder).',
          de: 'Premium-Auswahl für Gastronomie und Handel (Platzhalter).',
        },
        packaging: { en: '750ml bottles', de: '750ml Flaschen' },
        badges: [],
      },
      {
        id: 'aperitif-spritz',
        categoryId: 'alcoholic',
        image: PLACEHOLDER_IMAGE,
        name: { en: 'Aperitif Spritz', de: 'Aperitif Spritz' },
        description: {
          en: 'Ready-to-serve aperitif experience (placeholder).',
          de: 'Ready-to-serve Aperitif-Erlebnis (Platzhalter).',
        },
        packaging: { en: 'Cans & bottles', de: 'Dosen & Flaschen' },
        badges: ['bestSeller'],
      },
    ],

    featuredProductIds: [
      'cola-classic',
      'still-water-500',
      'sparkling-water-500',
      'apple-juice',
      'energy-250',
      'aperitif-spritz',
    ],
  };
})();

