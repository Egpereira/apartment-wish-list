import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const rooms = [
    {
      name: 'Cozinha',
      slug: 'cozinha',
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      name: 'Living',
      slug: 'living',
      image: '/placeholder.svg?height=300&width=400'
    },

    {
      name: 'Escritório',
      slug: 'escritorio',
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      name: 'Quarto',
      slug: 'quarto',
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      name: 'Banheiro',
      slug: 'banheiro',
      image: '/placeholder.svg?height=300&width=400'
    }
  ]

  return (
    <div className='container mx-auto px-4 py-12'>
      <header className='mb-16 text-center'>
        <h1 className='mb-4 text-4xl font-bold'>Nossa Lista de Desejos</h1>
        <p className='mx-auto max-w-2xl text-xl text-gray-600'>
          Estamos reformando nosso apartamento e criamos esta lista para inspirar você a nos ajudar.
          Não é necessário comprar os itens específicos - sua contribuição em dinheiro nos ajudará a
          realizar nossos sonhos!
        </p>
      </header>

      <section className='mb-16'>
        <h2 className='mb-6 text-center text-2xl font-semibold'>Como funciona?</h2>
        <div className='mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='rounded-lg bg-white p-6 text-center shadow-md'>
            <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100'>
              <span className='text-2xl font-bold'>1</span>
            </div>
            <h3 className='mb-2 text-lg font-medium'>Navegue pelos ambientes</h3>
            <p className='text-gray-600'>
              Explore os diferentes cômodos e veja os itens que desejamos.
            </p>
          </div>
          <div className='rounded-lg bg-white p-6 text-center shadow-md'>
            <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100'>
              <span className='text-2xl font-bold'>2</span>
            </div>
            <h3 className='mb-2 text-lg font-medium'>Escolha um valor</h3>
            <p className='text-gray-600'>
              Use os itens como referência para decidir quanto deseja contribuir.
            </p>
          </div>
          <div className='rounded-lg bg-white p-6 text-center shadow-md'>
            <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100'>
              <span className='text-2xl font-bold'>3</span>
            </div>
            <h3 className='mb-2 text-lg font-medium'>Faça sua contribuição</h3>
            <p className='text-gray-600'>
              Envie sua contribuição via PIX ou transferência bancária.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className='mb-8 text-center text-2xl font-semibold'>Ambientes</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {rooms.map((room) => (
            <Link
              href={`/ambientes/${room.slug}`}
              key={room.slug}
              className='group block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg'
            >
              <div className='aspect-vide relative overflow-hidden'>
                <img
                  src={room.image || '/placeholder.svg'}
                  alt={`Ambiente ${room.name}`}
                  className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
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
        <p>Obrigado por nos ajudar a transformar nosso apartamento em um lar!</p>
        <p className='mt-2'>
          <strong>PIX:</strong> exemplo@email.com
        </p>
      </footer>
    </div>
  )
}
