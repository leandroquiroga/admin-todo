import { ProductCardProps } from "../../utils/features/products/interfaces";


export const products: ProductCardProps[] = [
  {
    id: 'UUID-ABC-1',
    name: 'Jeans Clasico Verde Gastado',
    price: 19000,
    description: 'Jeans Clasico de color verde gastado, estilo clasico y comodo',
    avaibleSizes: [
      {
        size: '42',
        count: 0,
      },
      {
        size: '44',
        count: 5,
      }, {
        size: '46',
        count: 4,
      }, {
        size: '48',
        count: 2,
      },
      {
        size: '50',
        count: 0,
      }

    ],
    image: '/images/products/creaslim-F7eJxHoR1lg-unsplash.jpg',
  },
  {
    id: 'UUID-ABC-2',
    name: 'Buzo Hodies Tricolor',
    price: 25000,
    description: 'Buzo hodies tricolor, estilo clasico y comodo',
    avaibleSizes: [{
      size: 'L',
      count: 10,
    }, {
      size: 'XL',
      count: 5,
    }, {
      size: 'XXL',
      count: 2,
    }],
    image: '/images/products/creaslim-Qv2Yw-L68lc-unsplash.jpg',
  },
  {
    id: 'UUID-ABC-3',
    name: 'Jeans Clasico Color Negro',
    price: 24000,
    description: 'Jean clasico color negro, estilo clasico y comodo',
    avaibleSizes: [{
      size: '44',
      count: 5,
    }, {
      size: '46',
      count: 3,
    }, {
      size: '48',
      count: 2,
    }],
    image: '/images/products/creaslim-SUUGUg7RXYY-unsplash.jpg',
  },
  {
    id: 'UUID-ABC-4',
    name: 'Chaqueta de Cuero con Corderoy Maron',
    price: 84000,
    description: 'Chaqueta de cuero con corderoy de primera calidad, color marron. Super abrigada',
    avaibleSizes: [{
      size: '44',
      count: 5,
    }, {
      size: '46',
      count: 3,
    }, {
      size: '48',
      count: 2,
    }],
    image: '/images/products/dmitry-spravko-2cmLR_I_hn0-unsplash.jpg',
  },
  {
    id: 'UUID-ABC-5',
    name: 'Gorra BRXTN',
    price: 30000,
    description: 'Gorra skate plana de color negra y marron',
    avaibleSizes: [{
      size: '44',
      count: 5,
    }, {
      size: '46',
      count: 3,
    }, {
      size: '48',
      count: 2,
    }],
    image: '/images/products/luke-pamer-hiZ7wtdX-nI-unsplash.jpg',
  },
  {
    id: 'UUID-ABC-6',
    name: 'Remera Oversize Blanca',
    price: 15000,
    description: 'Remera oversize lisa de color blanco, estilo clasico y comodo',
    avaibleSizes: [{
      size: '44',
      count: 5,
    }, {
      size: '46',
      count: 3,
    }, {
      size: '48',
      count: 2,
    }],
    image: '/images/products/mediamodifier-ogmenj2NGho-unsplash.jpg',
  },
  {
    id: 'UUID-ABC-7',
    name: 'Remera Clasica Blanca Out Cast',
    price: 14000,
    description: 'Remera clasica estapanda de color blanco, estilo clasico y comodo',
    avaibleSizes: [{
      size: 'S',
      count: 5,
    }, {
      size: 'M',
      count: 3,
    }, {
      size: 'L',
      count: 2,
    },
    {
      size: 'XL',
      count: 2,
    },
    {
      size: 'XXL',
      count: 2,
    }
    ],
    image: '/images/products/taylor-dG4Eb_oC5iM-unsplash.jpg',
  },
]