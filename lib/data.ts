// kitchen images
import kitchenLight1 from '@/assets/kitchen/light-1.png'
import kitchenLight2 from '@/assets/kitchen/light-2.png'
import laundrySink from '@/assets/kitchen/laundry-sink.png'
import laundryTap from '@/assets/kitchen/laundry-tap.png'
import kitchenSink from '@/assets/kitchen/kitchen-sink.png'
import kitchenTap from '@/assets/kitchen/kitchen-tap.png'
import wallHooks from '@/assets/kitchen/wall-hooks.png'

// living images
import ceilingFan from '@/assets/living/ceiling-fan.png'
import livingLight1 from '@/assets/living/light-1.png'
import livingLight2 from '@/assets/living/light-2.png'
import livingLight3 from '@/assets/living/light-3.png'
import mirror from '@/assets/living/mirror.png'

// office images
import table from '@/assets/office/table.png'
import monitorArm from '@/assets/office/monitor-arm.png'

// bedroom images
import sideTable from '@/assets/bedroom/side-table.png'

// bathroom images
import bathroomLight from '@/assets/bathroom/light.png'
import bathroomSink from '@/assets/bathroom/sink.png'
import bathroomTap from '@/assets/bathroom/tap.png'
import metals from '@/assets/bathroom/metals.png'
import shower from '@/assets/bathroom/shower.png'

const items: Record<string, WishList> = {
  kitchen: {
    name: 'Cozinha',
    items: [
      {
        id: 'light-1',
        name: 'Iluminação - Placa Led 120x15cm',
        image: kitchenLight1,
        price: 499.0,
        referenceUrl:
          'https://www.inspirehome.com.br/painel-luminaria-de-embutir-led-retangular-4000k-36w-bivolt-120x15cm-branco-romalux-80024/p'
      },
      {
        id: 'light-2',
        name: 'Iluminação - Placa Led 30x30cm',
        image: kitchenLight2,
        price: 37.22,
        referenceUrl:
          'https://www.inspirehome.com.br/painel-luminaria-de-embutir-led-pop-quadrado-4000k-24w-bivolt-30x30cm-aluminio-e-poliestireno-branco-avant-858130874/p'
      },
      {
        id: 'laundry-sink',
        name: 'Cuba Lavanderia',
        image: laundrySink,
        price: 283.1,
        referenceUrl:
          'https://www.tramontina.com.br/cuba-de-embutir-tramontina-lavinia-40-bl-em-aco-inox-escovado-40x34-cm/94020102.html?gad_source=1&gbraid=0AAAAAC9EDsLlXtx9kYK3XPnOOmr0al5tP&gclid=Cj0KCQjwh_i_BhCzARIsANimeoEfl5s4oE_Re4MWA2_wFTLGbL6R5fZsr3_gae1DNcW3hRrHgrHqQ4AaAtBMEALw_wcB'
      },
      {
        id: 'laundry-tap',
        name: 'Torneira Lavanderia',
        image: laundryTap,
        price: 209.9,
        referenceUrl:
          'https://www.amazon.com.br/Torneira-para-Cozinha-Mesa-Docol/dp/B0C6BHZGLZ/ref=ci_mcx_mr_mp_m_d_sccl_2_7/143-0713729-6602162'
      },
      {
        id: 'kitchen-sink',
        name: 'Cuba Cozinha',
        image: kitchenSink,
        price: 1087.0,
        referenceUrl:
          'https://www.mercadolivre.com.br/cuba-premium-cozinha-gourmet-54x44x20cm-inox-304-acetinado-cor-cinza/p/MLB37961532'
      },
      {
        id: 'kitchen-tap',
        name: 'Torneira Cozinha',
        image: kitchenTap,
        price: 206.91,
        referenceUrl:
          'https://www.pingoo.casa/torneira-para-cozinha-gourmet-misturador-monocomando-em-aco-inox-304-escovado-iriri-prata-prata-escovado'
      },
      {
        id: 'wall-hooks',
        name: 'Ganchos (x3)',
        image: wallHooks,
        price: 74.7,
        referenceUrl:
          'https://www.leroymerlin.com.br/cabideiro-gancho-jota-de-parede-couro-sint--marrom-escuro-courocaramelo_1571141365'
      }
    ]
  },
  living: {
    name: 'Living',
    items: [
      {
        id: 'ceiling-fan',
        name: 'Ventilador de Teto',
        image: ceilingFan,
        price: 629.89,
        referenceUrl:
          'https://www.amazon.com.br/Ventilador-Arno-Ultimate-Bivolt-Controle/dp/B0CP4CXPPM/ref=sr_1_6'
      },
      {
        id: 'light-1',
        name: 'Iluminação - Spot',
        image: livingLight1,
        price: 42.9,
        referenceUrl:
          'https://www.inspirehome.com.br/spot-de-sobrepor-face-recuada-quadrado-par20-12x12x13-5cm-abs-branco-portofino-pl2357/p'
      },
      {
        id: 'light-2',
        name: 'Iluminação - Plafon',
        image: livingLight2,
        price: 259.98,
        referenceUrl:
          'https://www.madeiramadeira.com.br/plafon-para-4-lampadas-redondo-50cm-7653-jd-molina-186567.html'
      },
      {
        id: 'light-3',
        name: 'Iluminação - Arandela',
        image: livingLight3,
        price: 1079.43,
        referenceUrl:
          'https://www.inspirehome.com.br/arandela-tedesca-g-articulado-29x58cm-metal-foco-metallo-ar-126-g/p'
      },
      {
        id: 'mirror',
        name: 'Espelho',
        image: mirror,
        price: 522.0,
        referenceUrl:
          'https://www.madeiramadeira.com.br/espelho-grande-corpo-inteiro-de-parede-moldura-aco-170x70cm-industrial-preto-607943852.html'
      }
    ]
  },
  office: {
    name: 'Escritório',
    items: [
      {
        id: 'ceiling-fan',
        name: 'Ventilador de Teto',
        image: ceilingFan,
        price: 629.89,
        referenceUrl:
          'https://www.amazon.com.br/Ventilador-Arno-Ultimate-Bivolt-Controle/dp/B0CP4CXPPM/ref=sr_1_6'
      },
      {
        id: 'table',
        name: 'Mesa de Escritório com Tampo (135 x 70 cm)',
        image: table,
        price: 3695.5,
        referenceUrl:
          'https://loja.slik.com.br/produtos/mesa-com-regulagem-de-altura-eletrica-slikdesk-lift'
      },
      {
        id: 'monitor-arm',
        name: 'Braço Articulado (Monitor)',
        image: monitorArm,
        price: 200.0,
        referenceUrl: 'https://www.amazon.com.br/dp/B0765KZ264/'
      }
    ]
  },
  bedroom: {
    name: 'Quarto',
    items: [
      {
        id: 'ceiling-fan',
        name: 'Ventilador de Teto',
        image: ceilingFan,
        price: 629.89,
        referenceUrl:
          'https://www.amazon.com.br/Ventilador-Arno-Ultimate-Bivolt-Controle/dp/B0CP4CXPPM/ref=sr_1_6'
      },
      {
        id: 'side-table',
        name: 'Mesa de Cabeceira',
        image: sideTable,
        price: 411.07,
        referenceUrl: 'https://www.casavee.com.br/mesa-lateral-bandeja-mel-escuro-35-cm-x-50-cm'
      }
    ]
  },
  bathroom: {
    name: 'Banheiro',
    items: [
      {
        id: 'light',
        name: 'Iluminação - Placa Led',
        image: bathroomLight,
        price: 478.2,
        referenceUrl:
          'https://www.inspirehome.com.br/painel-luminaria-de-embutir-led-recuado-retangular-4000k-18w-bivolt-60x15cm-branco-romalux-80083/p'
      },
      {
        id: 'sink',
        name: 'Cuba',
        image: bathroomSink,
        price: 120.8,
        referenceUrl:
          'https://www.lojadexco.com.br/deca/deca-cuba-de-embutir-deca-retangular-l-375-17/p'
      },
      {
        id: 'tap',
        name: 'Torneira',
        image: bathroomTap,
        price: 499.99,
        referenceUrl:
          'https://www.amazon.com.br/Torneira-Misturador-Monocomando-Para-Lavat%C3%B3rio/dp/B07TKN4N34'
      },
      {
        id: 'metals',
        name: 'Metais',
        image: metals,
        price: 691.92,
        referenceUrl:
          'https://www.belametais.com.br/kit-de-acessorios-para-banheiro-picasso-preto-fosco'
      },
      {
        id: 'shower',
        name: 'Chuveiro',
        image: shower,
        price: 619.9,
        referenceUrl:
          'https://www.condec.com.br/chuveiro-acqua-plus-com-tubo-standard-1990-black-matte-deca'
      }
    ]
  }
}

export function getRoomItems(room: string): WishList {
  return items[room] || []
}

export function getAllRooms() {
  return Object.keys(items).map((slug) => ({
    slug,
    name: slug.charAt(0).toUpperCase() + slug.slice(1)
  }))
}
