"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Star, ShoppingCart, Play } from "lucide-react"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"

type Product = {
  id: number
  name: string
  description: string
  shortDescription: string
  image: string
  price: number
  rating: number
  brand: string
  inStock: boolean
  longDescription: string
  Price: string
  
}

export default function ProductDetail() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const params = useParams()
  const productId = Number(params.id)

  useEffect(() => {
    setIsLoaded(true)
    const foundProduct = products.find((p) => p.id === productId)
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [productId])

  const products: Product[] = [
    {
      id: 1,
      name: "ZOMO ICE GRAPE",
      shortDescription: "Sabor refrescante de uva com notas geladas intensas",
      description: "Sabor Premium de Uva Gelada",
      image: "/images/zomo-grape.png",
      price: 89.9,
      rating: 4,
      brand: "ZOMO LIMITED",
      inStock: true,
      longDescription:
        "Experimente a sensação refrescante de uvas frescas com um toque gelado que proporciona uma experiência única a cada tragada. O ZOMO ICE GRAPE combina o sabor doce e suculento da uva com notas mentoladas que refrescam instantaneamente. Com 1500 puffs garantidos, este pod descartável oferece uma experiência duradoura e satisfatória para os apreciadores de sabores frutados com um toque refrescante.",
      btcPrice: "0.00075",
      ethPrice: "0.00095",
    },
    {
      id: 2,
      name: "IGNITE MANGO",
      shortDescription: "Doce e suculento sabor de manga tropical com toque cítrico",
      description: "Manga Tropical Premium",
      image: "/images/ignite-mango.png",
      price: 89.9,
      rating: 5,
      brand: "IGNITE PREMIUM",
      inStock: true,
      longDescription:
        "O IGNITE MANGO traz a experiência tropical completa em cada tragada. O sabor autêntico de manga madura se mistura perfeitamente com sutis notas cítricas, criando um equilíbrio perfeito entre doçura e refrescância. Desenvolvido com tecnologia avançada de atomização, este pod garante uma produção de vapor consistente e um sabor intenso do início ao fim. Com 1500 puffs, você terá uma experiência prolongada deste delicioso sabor tropical.",
      btcPrice: "0.00075",
      ethPrice: "0.00095",
    },
    {
      id: 3,
      name: "MASKKING COOL MINT",
      shortDescription: "Sensação refrescante intensa com notas de menta pura",
      description: "Menta Gelada Premium",
      image: "/images/maskking-mint.png",
      price: 89.9,
      rating: 4,
      brand: "MASKKING PRO",
      inStock: true,
      longDescription:
        "O MASKKING COOL MINT oferece uma experiência refrescante incomparável. Com um sabor intenso de menta pura, cada tragada proporciona uma sensação de frescor imediato que se espalha suavemente. A tecnologia de resfriamento avançada garante que a sensação gelada permaneça consistente do início ao fim. Perfeito para quem busca uma experiência revigorante e limpa, este pod descartável de alta qualidade oferece aproximadamente 2000 puffs de pura refrescância.",
      btcPrice: "0.00075",
      ethPrice: "0.00095",
    },
    {
      id: 4,
      name: "BLUEBERRY BLAST",
      shortDescription: "Explosão de sabor de frutas vermelhas com toque gelado",
      description: "Mix de Frutas Vermelhas Premium",
      image: "/images/berry-blast.png",
      price: 89.9,
      rating: 5,
      brand: "IGNITE PREMIUM",
      inStock: true,
      longDescription:
        "O BLUEBERRY BLAST combina o sabor suculento de mirtilos, framboesas e morangos para criar uma experiência verdadeiramente explosiva. Cada tragada oferece uma onda de sabores de frutas vermelhas perfeitamente equilibrados, com um leve toque gelado no final que eleva a experiência a outro nível. Desenvolvido com extratos naturais de frutas, este pod premium garante um sabor autêntico e consistente por aproximadamente 1800 puffs.",
      btcPrice: "0.00075",
      ethPrice: "0.00095",
    },
    {
      id: 5,
      name: "STRAWBERRY DREAM",
      shortDescription: "Sabor intenso de morango silvestre com leve toque adocicado",
      description: "Morango Silvestre Premium",
      image: "/images/strawberry-dream.png",
      price: 89.9,
      rating: 3,
      brand: "ELFBAR COLLECTION",
      inStock: true,
      longDescription:
        "O STRAWBERRY DREAM captura a essência perfeita dos morangos silvestres recém-colhidos. Com um equilíbrio ideal entre doçura e acidez, este pod oferece uma experiência autêntica de morango que transporta seus sentidos para um campo de frutas frescas. O leve toque adocicado no final complementa o sabor natural da fruta, criando uma experiência harmoniosa e satisfatória. Com aproximadamente 5000 puffs, este pod de alta durabilidade garante longas sessões de sabor consistente.",
      btcPrice: "0.00075",
      ethPrice: "0.00095",
    },
    {
      id: 6,
      name: "VANILLA CLOUD",
      shortDescription: "Cremoso sabor de baunilha com notas suaves de café",
      description: "Baunilha e Café Premium",
      image: "/images/vanilla-latte.png",
      price: 89.9,
      rating: 4,
      brand: "LIFE POD PREMIUM",
      inStock: true,
      longDescription:
        "O VANILLA CLOUD oferece uma experiência cremosa e reconfortante com seu sabor rico de baunilha bourbon combinado com notas sutis de café torrado. A textura aveludada do vapor envolve o paladar com uma doçura equilibrada que não é excessivamente intensa. As notas de café no final adicionam complexidade e profundidade, tornando este pod perfeito para momentos de relaxamento. Com tecnologia avançada de atomização, o VANILLA CLOUD garante aproximadamente 8000 puffs de pura indulgência.",
      btcPrice: "0.00075",
      ethPrice: "0.00095",
    },
    {
      id: 7,
      name: "WATERMELON CHILL",
      shortDescription: "Refrescante sabor de melancia com toque gelado perfeito",
      description: "Melancia Gelada Premium",
      image: "/images/watermelon-chill.png",
      price: 89.9,
      rating: 4,
      brand: "WAKA PREMIUM",
      inStock: true,
      longDescription:
        "O WATERMELON CHILL captura a essência refrescante da melancia perfeita em um dia quente de verão. O sabor doce e suculento da fruta madura é complementado por um toque gelado que eleva a experiência a outro nível. A sensação refrescante permanece no paladar, proporcionando uma experiência verdadeiramente revigorante. Desenvolvido com tecnologia de resfriamento avançada, este pod premium oferece aproximadamente 1500 puffs de pura refrescância frutada.",
      btcPrice: "0.00075",
      ethPrice: "0.00095",
    },
    {
      id: 8,
      name: "LEMON TWIST",
      shortDescription: "Cítrico e refrescante sabor de limão com toque de doçura",
      description: "Limão Cítrico Premium",
      image: "/images/lemon-twist.png",
      price: 89.9,
      rating: 3,
      brand: "ZOMO LIMITED",
      inStock: true,
      longDescription:
        "O LEMON TWIST oferece uma experiência cítrica vibrante com o equilíbrio perfeito entre acidez e doçura. O sabor intenso de limão siciliano é complementado por um toque de açúcar que suaviza a acidez natural, criando uma experiência refrescante e satisfatória. Cada tragada proporciona uma explosão de frescor cítrico que desperta os sentidos. Com aproximadamente 1200 puffs, este pod garante uma experiência duradoura para os amantes de sabores cítricos revigorantes.",
      btcPrice: "0.00075",
      ethPrice: "0.00095",
    },
    {
      id: 9,
      name: "COFFEE CARAMEL",
      shortDescription: "Rico sabor de café com notas doces de caramelo",
      description: "Café com Caramelo Premium",
      image: "/images/coffee-caramel.png",
      price: 89.9,
      rating: 5,
      brand: "LIFE POD PREMIUM",
      inStock: true,
      longDescription:
        "O COFFEE CARAMEL combina o sabor rico e robusto do café expresso com a doçura indulgente do caramelo para criar uma experiência verdadeiramente sofisticada. As notas torradas do café se fundem perfeitamente com o caramelo suave, criando camadas de sabor que se desenvolvem a cada tragada. Perfeito para os apreciadores de café que buscam uma experiência premium, este pod de alta qualidade oferece aproximadamente 5000 puffs de puro prazer para os sentidos.",
      btcPrice: "0.00075",
      ethPrice: "0.00095",
    },
  ]

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-black p-4 md:p-8 pt-24 flex items-center justify-center">
          <p className="text-white text-xl">Produto não encontrado</p>
        </div>
      </>
    )
  }

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-300 fill-yellow-300" : "text-gray-500"}`} />
      ))
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black p-4 md:p-8 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="container mx-auto max-w-6xl"
        >
          <div className="flex items-center mb-8">
            <Link href="/shop" className="text-white hover:text-yellow-300 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold ml-4">DETALHES DO PRODUTO</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-zinc-900 rounded-lg p-8 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full h-[300px] md:h-[400px]"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="bg-zinc-900 rounded-lg p-8"
            >
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-white mb-1">{product.name}</h1>
                <div className="bg-green-500 text-black text-xs font-bold px-2 py-0.5 rounded inline-block mb-2">
                  PREMIUM
                </div>
                <p className="text-gray-400 mb-3">{product.brand}</p>
                <div className="flex mb-4">{renderStars(product.rating)}</div>
                <div className="text-2xl font-bold mb-4">
                  {product.btcPrice} BTC / {product.ethPrice} ETH
                </div>
                <p className="text-gray-300 mb-6">{product.longDescription}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Status</p>
                    <p className="text-green-500 font-bold">Em Estoque</p>
                  </div>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Quantidade</p>
                    <div className="flex items-center">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-white bg-zinc-700 hover:bg-zinc-600 w-8 h-8 flex items-center justify-center rounded"
                      >
                        -
                      </button>
                      <span className="mx-4 font-bold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-white bg-zinc-700 hover:bg-zinc-600 w-8 h-8 flex items-center justify-center rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Adicionar ao Carrinho
                  </button>
                  <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Comprar Agora
                  </button>
                </div>

                <p className="text-gray-500 text-xs mt-4 text-center">Enviado e vendido por MyPods.com</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
