import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { WishItem } from '@/components/wish-item'
import { getRoomItems } from '@/lib/data'

export default function RoomPage({ params }: { params: { room: string } }) {
  const { room } = params

  // Verificar se o ambiente existe
  const validRooms = ['cozinha', 'living', 'escritorio', 'quarto', 'banheiro']
  if (!validRooms.includes(room)) {
    notFound()
  }

  // Obter os itens do ambiente
  const items = getRoomItems(room)

  // Mapear os nomes dos ambientes
  const roomNames: Record<string, string> = {
    cozinha: 'Cozinha',
    living: 'Living',
    escritorio: 'Escritório',
    quarto: 'Quarto',
    banheiro: 'Banheiro'
  }

  return (
    <div className='container mx-auto px-4 py-12'>
      <Link href='/' className='mb-8 inline-flex items-center text-gray-600 hover:text-gray-900'>
        <ChevronLeft className='mr-1 h-4 w-4' />
        Voltar para a página inicial
      </Link>

      <header className='mb-12'>
        <h1 className='mb-4 text-3xl font-bold'>{roomNames[room]}</h1>
        <p className='text-gray-600'>
          Aqui estão os itens que desejamos para o nosso {roomNames[room].toLowerCase()}. Você pode
          contribuir com qualquer valor para nos ajudar a adquiri-los.
        </p>
      </header>

      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {items.map((item) => (
          <WishItem key={item.id} item={item} />
        ))}
      </div>

      <div className='mx-auto mt-16 max-w-2xl rounded-lg bg-gray-50 p-6'>
        <h2 className='mb-4 text-center text-xl font-semibold'>Como contribuir</h2>
        <p className='mb-4'>
          Escolha um ou mais itens que você gostaria de nos ajudar a adquirir e faça uma
          transferência do valor correspondente para:
        </p>
        <div className='rounded border bg-white p-4 text-center'>
          <p>
            <strong>Nome:</strong> Seu Nome Completo
          </p>
          <p>
            <strong>PIX:</strong> exemplo@email.com
          </p>
          <p className='mt-2 text-sm text-gray-500'>
            Envie um comprovante para nosso WhatsApp para que possamos agradecer!
          </p>
        </div>
      </div>
    </div>
  )
}
