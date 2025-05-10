interface WishItem {
  id: string
  name: string
  image: string
  price: number
  referenceUrl: string
  description?: string
}

// Dados de exemplo para cada ambiente
const items: Record<string, WishItem[]> = {
  cozinha: [
    {
      id: 'cozinha-1',
      name: 'Conjunto de Panelas Antiaderentes',
      image: '/placeholder.svg?height=300&width=300',
      price: 599.9,
      referenceUrl: 'https://exemplo.com/panelas',
      description: 'Conjunto com 5 peças de alta durabilidade'
    },
    {
      id: 'cozinha-2',
      name: 'Liquidificador Potente',
      image: '/placeholder.svg?height=300&width=300',
      price: 349.9,
      referenceUrl: 'https://exemplo.com/liquidificador'
    },
    {
      id: 'cozinha-3',
      name: 'Jogo de Facas Profissionais',
      image: '/placeholder.svg?height=300&width=300',
      price: 429.9,
      referenceUrl: 'https://exemplo.com/facas',
      description: 'Conjunto com 6 facas e suporte'
    },
    {
      id: 'cozinha-4',
      name: 'Cafeteira Elétrica',
      image: '/placeholder.svg?height=300&width=300',
      price: 279.9,
      referenceUrl: 'https://exemplo.com/cafeteira'
    },
    {
      id: 'cozinha-5',
      name: 'Conjunto de Potes Herméticos',
      image: '/placeholder.svg?height=300&width=300',
      price: 189.9,
      referenceUrl: 'https://exemplo.com/potes',
      description: 'Kit com 10 potes de diferentes tamanhos'
    },
    {
      id: 'cozinha-6',
      name: 'Torneira Gourmet com Ducha',
      image: '/placeholder.svg?height=300&width=300',
      price: 899.9,
      referenceUrl: 'https://exemplo.com/torneira'
    }
  ],
  living: [
    {
      id: 'living-1',
      name: 'Sofá 3 Lugares Retrátil',
      image: '/placeholder.svg?height=300&width=300',
      price: 2499.9,
      referenceUrl: 'https://exemplo.com/sofa',
      description: 'Confortável e elegante para a sala'
    },
    {
      id: 'living-2',
      name: 'Smart TV 55"',
      image: '/placeholder.svg?height=300&width=300',
      price: 3299.9,
      referenceUrl: 'https://exemplo.com/tv'
    },
    {
      id: 'living-3',
      name: 'Mesa de Centro',
      image: '/placeholder.svg?height=300&width=300',
      price: 599.9,
      referenceUrl: 'https://exemplo.com/mesa-centro'
    },
    {
      id: 'living-4',
      name: 'Tapete 2x3m',
      image: '/placeholder.svg?height=300&width=300',
      price: 899.9,
      referenceUrl: 'https://exemplo.com/tapete',
      description: 'Macio e resistente para a sala de estar'
    },
    {
      id: 'living-5',
      name: 'Luminária de Piso',
      image: '/placeholder.svg?height=300&width=300',
      price: 459.9,
      referenceUrl: 'https://exemplo.com/luminaria'
    }
  ],
  escritorio: [
    {
      id: 'escritorio-1',
      name: 'Cadeira Ergonômica',
      image: '/placeholder.svg?height=300&width=300',
      price: 1299.9,
      referenceUrl: 'https://exemplo.com/cadeira',
      description: 'Conforto para longas horas de trabalho'
    },
    {
      id: 'escritorio-2',
      name: 'Mesa de Escritório',
      image: '/placeholder.svg?height=300&width=300',
      price: 899.9,
      referenceUrl: 'https://exemplo.com/mesa-escritorio'
    },
    {
      id: 'escritorio-3',
      name: 'Monitor Ultrawide',
      image: '/placeholder.svg?height=300&width=300',
      price: 2499.9,
      referenceUrl: 'https://exemplo.com/monitor'
    },
    {
      id: 'escritorio-4',
      name: 'Organizador de Cabos',
      image: '/placeholder.svg?height=300&width=300',
      price: 129.9,
      referenceUrl: 'https://exemplo.com/organizador'
    }
  ],
  quarto: [
    {
      id: 'quarto-1',
      name: 'Colchão King Size',
      image: '/placeholder.svg?height=300&width=300',
      price: 3499.9,
      referenceUrl: 'https://exemplo.com/colchao',
      description: 'Espuma viscoelástica de alta densidade'
    },
    {
      id: 'quarto-2',
      name: 'Guarda-roupa 6 Portas',
      image: '/placeholder.svg?height=300&width=300',
      price: 2899.9,
      referenceUrl: 'https://exemplo.com/guarda-roupa'
    },
    {
      id: 'quarto-3',
      name: 'Jogo de Lençóis 400 Fios',
      image: '/placeholder.svg?height=300&width=300',
      price: 499.9,
      referenceUrl: 'https://exemplo.com/lencois'
    },
    {
      id: 'quarto-4',
      name: 'Criado-mudo (par)',
      image: '/placeholder.svg?height=300&width=300',
      price: 699.9,
      referenceUrl: 'https://exemplo.com/criado-mudo'
    },
    {
      id: 'quarto-5',
      name: 'Cortina Blackout',
      image: '/placeholder.svg?height=300&width=300',
      price: 399.9,
      referenceUrl: 'https://exemplo.com/cortina'
    }
  ],
  banheiro: [
    {
      id: 'banheiro-1',
      name: 'Conjunto de Box para Banheiro',
      image: '/placeholder.svg?height=300&width=300',
      price: 1299.9,
      referenceUrl: 'https://exemplo.com/box',
      description: 'Vidro temperado com perfil de alumínio'
    },
    {
      id: 'banheiro-2',
      name: 'Chuveiro com Ducha',
      image: '/placeholder.svg?height=300&width=300',
      price: 599.9,
      referenceUrl: 'https://exemplo.com/chuveiro'
    },
    {
      id: 'banheiro-3',
      name: 'Conjunto de Toalhas',
      image: '/placeholder.svg?height=300&width=300',
      price: 299.9,
      referenceUrl: 'https://exemplo.com/toalhas',
      description: 'Kit com 4 toalhas de banho e 4 de rosto'
    },
    {
      id: 'banheiro-4',
      name: 'Armário para Banheiro',
      image: '/placeholder.svg?height=300&width=300',
      price: 899.9,
      referenceUrl: 'https://exemplo.com/armario-banheiro'
    }
  ]
}

export function getRoomItems(room: string): WishItem[] {
  return items[room] || []
}

export function getAllRooms() {
  return Object.keys(items).map((slug) => ({
    slug,
    name: slug.charAt(0).toUpperCase() + slug.slice(1)
  }))
}
