import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

type Item = {
  id: string
  name: string
  image: any
  price: number
  referenceUrl: string
  description?: string
}

export function WishItem({ item }: { item: Item }) {
  return (
    <div className='grid overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg'>
      <div className='relative aspect-square overflow-hidden'>
        <Image
          fill
          alt=''
          src={item.image}
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <div className='bg-slate-100 p-4'>
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
