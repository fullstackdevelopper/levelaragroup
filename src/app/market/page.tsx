"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export default function Store() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Casque Audio Premium",
      price: 120,
      description: "Qualité sonore exceptionnelle avec réduction de bruit.",
      image: "https://images.unsplash.com/photo-1518441902110-79b9b6c6b3c1",
      category: "Tech",
    },
    {
      id: 2,
      name: "Montre Élégante",
      price: 85,
      description: "Design moderne et résistant à l'eau.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      category: "Mode",
    },
    {
      id: 3,
      name: "Chaussures Sport",
      price: 60,
      description: "Confort et performance pour tous les jours.",
      image: "https://images.unsplash.com/photo-1528701800489-20be3c61d1e7",
      category: "Sport",
    },
    {
      id: 4,
      name: "Sac à Dos",
      price: 45,
      description: "Parfait pour le travail et les voyages.",
      image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a",
      category: "Accessoires",
    },
    {
      id: 5,
      name: "Smartphone",
      price: 350,
      description: "Performance rapide et caméra haute résolution.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      category: "Tech",
    },
    {
      id: 6,
      name: "Lunettes de Soleil",
      price: 25,
      description: "Protection UV avec style.",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      category: "Mode",
    },
  ]);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">🛍️ Notre Boutique</h2>

      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6">
            <div className="card h-100 shadow-sm border-0">

              {/* IMAGE */}
              <div style={{ overflow: "hidden" }}>
                <img
                  src={`${product.image}?auto=format&fit=crop&w=600&q=80`}
                  className="card-img-top"
                  alt={product.name}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              {/* BODY */}
              <div className="card-body d-flex flex-column">
                <span className="badge bg-secondary mb-2 w-fit">
                  {product.category}
                </span>

                <h5 className="card-title">{product.name}</h5>

                <p className="card-text text-muted small">
                  {product.description}
                </p>

                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <strong className="text-primary">
                    ${product.price}
                  </strong>

                  <button className="btn btn-sm btn-outline-primary">
                    Ajouter
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}