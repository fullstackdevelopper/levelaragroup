export type Product = {
    slug: string
    title: string
    category: string
    categoryLabel: string
    image: string
    price: number
    oldPrice?: number | null
    discount?: string | null
    description: string
}

export const products: Product[] = [
    {
        slug: "app-1",
        title: "App 1",
        category: "filter-app",
        categoryLabel: "Application",
        image: "/img/store/app-1.jpg",
        price: 120,
        oldPrice: 150,
        discount: "-20%",
        description: "Description du produit App 1",
    },

    {
        slug: "app-2",
        title: "App 2",
        category: "filter-app",
        categoryLabel: "Application",
        image: "/img/store/app-2.jpg",
        price: 180,
        oldPrice: null,
        discount: null,
        description: "Description du produit App 2",
    },

    {
        slug: "app-3",
        title: "App 3",
        category: "filter-app",
        categoryLabel: "Application",
        image: "/img/store/app-3.jpg",
        price: 210,
        oldPrice: 260,
        discount: "-15%",
        description: "Description du produit App 3",
    },

    {
        slug: "product-1",
        title: "Product 1",
        category: "filter-product",
        categoryLabel: "Produit",
        image: "/img/store/product-1.jpg",
        price: 99,
        oldPrice: 130,
        discount: "-25%",
        description: "Description du produit Product 1",
    },

    {
        slug: "product-2",
        title: "Product 2",
        category: "filter-product",
        categoryLabel: "Produit",
        image: "/img/store/product-2.jpg",
        price: 75,
        oldPrice: null,
        discount: null,
        description: "Description du produit Product 2",
    },

    {
        slug: "product-3",
        title: "Product 3",
        category: "filter-product",
        categoryLabel: "Produit",
        image: "/img/store/product-3.jpg",
        price: 140,
        oldPrice: 170,
        discount: "-18%",
        description: "Description du produit Product 3",
    },

    {
        slug: "branding-1",
        title: "Branding 1",
        category: "filter-branding",
        categoryLabel: "Branding",
        image: "/img/store/branding-1.jpg",
        price: 250,
        oldPrice: 320,
        discount: "-22%",
        description: "Description du produit Branding 1",
    },

    {
        slug: "branding-2",
        title: "Branding 2",
        category: "filter-branding",
        categoryLabel: "Branding",
        image: "/img/store/branding-2.jpg",
        price: 300,
        oldPrice: null,
        discount: null,
        description: "Description du produit Branding 2",
    },

    {
        slug: "branding-3",
        title: "Branding 3",
        category: "filter-branding",
        categoryLabel: "Branding",
        image: "/img/store/branding-3.jpg",
        price: 270,
        oldPrice: 340,
        discount: "-19%",
        description: "Description du produit Branding 3",
    },

    {
        slug: "books-1",
        title: "Books 1",
        category: "filter-books",
        categoryLabel: "Livre",
        image: "/img/store/books-1.jpg",
        price: 45,
        oldPrice: 60,
        discount: "-10%",
        description: "Description du produit Books 1",
    },

    {
        slug: "books-2",
        title: "Books 2",
        category: "filter-books",
        categoryLabel: "Livre",
        image: "/img/store/books-2.jpg",
        price: 55,
        oldPrice: null,
        discount: null,
        description: "Description du produit Books 2",
    },

    {
        slug: "books-3",
        title: "Books 3",
        category: "filter-books",
        categoryLabel: "Livre",
        image: "/img/store/books-3.jpg",
        price: 80,
        oldPrice: 100,
        discount: "-20%",
        description: "Description du produit Books 3",
    },
]