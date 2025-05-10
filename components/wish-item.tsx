import { ExternalLink } from 'lucide-react'

interface Item {
  id: string
  name: string
  image: string
  price: number
  referenceUrl: string
  description?: string
}

export function WishItem({ item }: { item: Item }) {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg'>
      <div className='relative aspect-square overflow-hidden'>
        <img
          src={item.image || '/placeholder.svg'}
          alt={item.name}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='p-4'>
        <h3 className='mb-2 text-lg font-medium'>{item.name}</h3>
        {item.description && <p className='mb-3 text-sm text-gray-600'>{item.description}</p>}
        <div className='flex items-center justify-between'>
          <span className='text-xl font-bold'>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(item.price)}
          </span>
          <a
            href={item.referenceUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center text-sm text-gray-500 hover:text-gray-900'
          >
            Ver referência
            <ExternalLink className='ml-1 h-3 w-3' />
          </a>
        </div>
      </div>
    </div>
  )
}
