type WishList = {
  name: string
  items: WishItem[]
}

type WishItem = {
  id: string
  name: string
  image: any
  price: number
  referenceUrl: string
  description?: string
}
