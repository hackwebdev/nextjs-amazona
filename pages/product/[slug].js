import { useRouter } from 'next/router'
import data from '../../utils/data'

export default function ProductScreen() {
  const router = useRouter()
  //   console.log(router)
  const { slug } = router.query
  //   get product by the slug
  const product = data.products.find((a) => a.slug === slug)
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  )
}
