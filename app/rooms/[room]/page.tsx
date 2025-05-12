import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { WishItem } from '@/components/wish-item'
import { getRoomItems } from '@/lib/data'

export default async function RoomPage({ params }: { params: { room: string } }) {
  const { room } = await params

  const validRooms = ['cozinha', 'living', 'escritorio', 'quarto', 'banheiro']
  if (!validRooms.includes(room)) {
    notFound()
  }

  const roomMapping: Record<string, string> = {
    cozinha: 'kitchen',
    living: 'living',
    escritorio: 'office',
    quarto: 'bedroom',
    banheiro: 'bathroom'
  }

  const wishList = getRoomItems(roomMapping[room])

  return (
    <div className='container mx-auto px-4 py-12'>
      <Link href='/' className='mb-8 inline-flex items-center text-gray-600 hover:text-gray-900'>
        <ChevronLeft className='mr-1 h-4 w-4' />
        Voltar para a página inicial
      </Link>

      <header className='mb-12'>
        <h1 className='mb-4 text-3xl font-bold'>{wishList.name}</h1>
        <p className='text-gray-600'>
          Aqui estão os itens que desejo. Você pode contribuir com qualquer valor para me ajudar a
          adquiri-los.
        </p>
      </header>

      <ul className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {wishList.items.map((item) => (
          <li key={item.id}>
            <WishItem item={item} />
          </li>
        ))}
      </ul>

      <div className='mx-auto mt-16 max-w-2xl rounded-lg bg-gray-50 p-6'>
        <h2 className='mb-4 text-center text-xl font-semibold'>Como contribuir</h2>
        <p className='mb-4'>
          Escolha um ou mais itens que você gostaria de me ajudar a adquirir e faça uma
          transferência do valor correspondente para:
        </p>
        <div className='rounded border bg-white p-4 text-center'>
          <p>
            <strong>PIX:</strong>{' '}
            <span className='select-all'>4be85c63-3aa7-40c1-919a-2ac2d086b2ac</span>
          </p>
        </div>
      </div>
    </div>
  )
}
