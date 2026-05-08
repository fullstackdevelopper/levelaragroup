import DetailProduit from "@/components/DetailProduit"
import { products } from "@/app/data/produits"

type Props = {
    params: Promise<{
        slug: string
    }>
}

export default async function ProductPage({ params }: Props) {

    const { slug } = await params

    const product = products.find(
        (item) => item.slug === slug
    )

    if (!product) {
        return (
            <div className="container py-5">
                <h2>Produit introuvable</h2>
                <p>{slug}</p>
            </div>
        )
    }

    return <DetailProduit product={product} />
}