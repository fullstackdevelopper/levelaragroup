import Image from "next/image"
import { Product } from "@/app/data/produits"

type Props = {
    product: Product
}

export default function DetailProduit({ product }: Props) {

    return (
        <section className="py-5">

            <div className="container">

                <div className="row g-5 align-items-center">

                    <div className="col-lg-6">

                        <Image
                            src={product.image}
                            alt={product.title}
                            width={800}
                            height={600}
                            className="img-fluid rounded-4 shadow"
                        />

                    </div>

                    <div className="col-lg-6">

                        <span className="badge bg-dark mb-3">
                            {product.categoryLabel}
                        </span>

                        <h1 className="fw-bold mb-3">
                            {product.title}
                        </h1>

                        <div className="d-flex align-items-center gap-3 mb-4">

                            <span className="fs-2 fw-bold">
                                ${product.price}
                            </span>

                            {product.oldPrice && (
                                <span className="text-decoration-line-through text-muted">
                                    ${product.oldPrice}
                                </span>
                            )}

                            {product.discount && (
                                <span className="badge bg-danger">
                                    {product.discount}
                                </span>
                            )}

                        </div>

                        <p className="text-muted">
                            {product.description}
                        </p>

                        <button className="btn btn-dark rounded-pill px-5 py-3">
                            Acheter maintenant
                        </button>

                    </div>

                </div>

            </div>

        </section>
    )
}