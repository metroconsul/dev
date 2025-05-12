"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"

type Product = {
  id: number
  name: string
  description: string
  image: string
  price: number
}

export default function Shop() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const products: Product[] = [
    {
      id: 1,
      name: "Zomo Ice Grape",
      description: "Sabor refrescante de uva com notas geladas intensas",
      image: "/images/zomo-grape.png",
      price: 89.9,
    },
    {
      id: 2,
      name: "Ignite Mango",
      description: "Doce e suculento sabor de manga tropical com toque cítrico",
      image: "/images/ignite-mango.png",
      price: 89.9,
    },
    {
      id: 3,
      name: "Maskking Cool Mint",
      description: "Sensação refrescante intensa com notas de menta pura",
      image: "/images/maskking-mint.png",
      price: 89.9,
    },
    {
      id: 4,
      name: "Blueberry Blast",
      description: "Explosão de sabor de frutas vermelhas com toque gelado",
      image: "/images/berry-blast.png",
      price: 89.9,
    },
    {
      id: 5,
      name: "Strawberry Dream",
      description: "Sabor intenso de morango silvestre com leve toque adocicado",
      image: "/images/strawberry-dream.png",
      price: 89.9,
    },
    {
      id: 6,
      name: "Vanilla Cloud",
      description: "Cremoso sabor de baunilha com notas suaves de café",
      image: "/images/vanilla-latte.png",
      price: 89.9,
    },
    {
      id: 7,
      name: "Watermelon Chill",
      description: "Refrescante sabor de melancia com toque gelado perfeito",
      image: "/images/watermelon-chill.png",
      price: 89.9,
    },
    {
      id: 8,
      name: "Lemon Twist",
      description: "Cítrico e refrescante sabor de limão com toque de doçura",
      image: "/images/lemon-twist.png",
      price: 89.9,
    },
    {
      id: 9,
      name: "Coffee Caramel",
      description: "Rico sabor de café com notas doces de caramelo",
      image: "/images/coffee-caramel.png",
      price: 89.9,
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black p-4 md:p-8 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="container mx-auto max-w-7xl"
        >
          <div className="flex items-center mb-8">
            <Link href="/" className="text-white hover:text-yellow-300 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold ml-4">SHOP</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              >
                <Link href={`/product/${product.id}`} className="flex flex-col">
                  {/* White card with image */}
                  <div className="bg-white p-4 rounded-md shadow-md h-[200px] flex items-center justify-center hover:shadow-lg transition-shadow">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={140}
                      height={180}
                      className="object-contain max-h-full"
                      priority={index < 4}
                    />
                  </div>

                  {/* Black section with product info */}
                  <div className="bg-black pt-2 pb-3">
                    <h3 className="text-white text-lg font-medium">{product.name}</h3>
                    <p className="text-gray-400 text-xs mt-1 mb-2 line-clamp-2 h-8">{product.description}</p>

                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold">R$ {product.price.toFixed(2)}</span>
                      <span className="text-gray-400 hover:text-white text-sm">Ver detalhes</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}
