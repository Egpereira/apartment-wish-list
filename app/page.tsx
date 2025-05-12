import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import kitchenImage from '@/assets/rooms/kitchen.png'
import livingImage from '@/assets/rooms/living.png'
import officeImage from '@/assets/rooms/office.png'
import bedroomImage from '@/assets/rooms/bedroom.png'
import bathroomImage from '@/assets/rooms/bathroom.png'

export default function Home() {
  const rooms = [
    {
      name: 'Cozinha',
      slug: 'cozinha',
      image: kitchenImage
    },
    {
      name: 'Living',
      slug: 'living',
      image: livingImage
    },

    {
      name: 'Escritório',
      slug: 'escritorio',
      image: officeImage
    },
    {
      name: 'Quarto',
      slug: 'quarto',
      image: bedroomImage
    },
    {
      name: 'Banheiro',
      slug: 'banheiro',
      image: bathroomImage
    }
  ]

  return (
    <div className='container mx-auto px-4 py-12'>
      <header className='mb-16 text-center'>
        <h1 className='mb-4 text-4xl font-bold'>Lista de Desejos - Apartamento do Dudi</h1>
        <p className='mx-auto max-w-2xl text-xl text-gray-600'>
          Estou reformando meu apartamento e criei esta lista para inspirar você a me ajudar. Não é
          necessário comprar os itens específicos!
        </p>
      </header>

      <section className='mb-16'>
        <h2 className='mb-6 text-center text-2xl font-semibold'>Como funciona?</h2>
        <ol className='mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3'>
          <li className='rounded-lg bg-white p-6 text-center shadow-md'>
            <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100'>
              <span className='text-2xl font-bold'>1</span>
            </div>
            <h3 className='mb-2 text-lg font-medium'>Navegue pelos ambientes</h3>
            <p className='text-gray-600'>Explore os diferentes cômodos e veja os itens.</p>
          </li>
          <li className='rounded-lg bg-white p-6 text-center shadow-md'>
            <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100'>
              <span className='text-2xl font-bold'>2</span>
            </div>
            <h3 className='mb-2 text-lg font-medium'>Escolha um valor</h3>
            <p className='text-gray-600'>
              Use os itens como referência para decidir quanto deseja contribuir.
            </p>
          </li>
          <li className='rounded-lg bg-white p-6 text-center shadow-md'>
            <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100'>
              <span className='text-2xl font-bold'>3</span>
            </div>
            <h3 className='mb-2 text-lg font-medium'>Faça sua contribuição</h3>
            <p className='text-gray-600'>Envie sua contribuição via PIX.</p>
          </li>
        </ol>
      </section>

      <section>
        <h2 className='mb-8 text-center text-2xl font-semibold'>Ambientes</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {rooms.map((room) => (
            <Link
              href={`/rooms/${room.slug}`}
              key={room.slug}
              className='group block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg'
            >
              <div className='relative aspect-video overflow-hidden'>
                <Image
                  alt=''
                  src={room.image}
                  className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                  placeholder='blur'
                />
              </div>
              <div className='flex items-center justify-between p-4'>
                <h3 className='text-xl font-medium'>{room.name}</h3>
                <ArrowRight className='h-5 w-5 text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-gray-900' />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className='mt-20 border-t pt-8 text-center text-gray-600'>
        <p>Obrigado por ajudar!</p>
        <p className='mt-2'>
          <strong>PIX:</strong>{' '}
          <span className='select-all'>4be85c63-3aa7-40c1-919a-2ac2d086b2ac</span>
        </p>
      </footer>
    </div>
  )
}
