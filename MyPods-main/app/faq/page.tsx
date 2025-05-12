"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import { Navbar } from "@/components/navbar"

type FaqItem = {
  question: string
  answer: string
}

export default function Faq() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const faqItems: FaqItem[] = [
    {
      question: "Os pods são originais?",
      answer:
        "Sim, todos os nossos produtos são originais e importados diretamente dos fabricantes. Garantimos a autenticidade de todos os pods vendidos em nossa plataforma através de rigorosos processos de verificação e parcerias exclusivas com fornecedores oficiais.",
    },
    {
      question: "Quanto tempo demora a entrega?",
      answer:
        "O prazo de entrega varia de acordo com a sua localização. Geralmente, as entregas são realizadas em 3-5 dias úteis para capitais e 5-10 dias úteis para o interior. Após a confirmação do pagamento, você receberá um código de rastreamento para acompanhar seu pedido em tempo real.",
    },
    {
      question: "É seguro comprar no site?",
      answer:
        "Absolutamente. Nossa plataforma utiliza criptografia de ponta a ponta e não armazenamos dados de pagamento. Além disso, todas as transações são processadas por gateways seguros e certificados. Sua privacidade e segurança são nossas prioridades máximas.",
    },
    {
      question: "Qual a durabilidade média dos pods?",
      answer:
        "A durabilidade varia de acordo com o modelo e a frequência de uso. Em média, nossos pods descartáveis duram entre 600 e 1500 tragadas, dependendo do modelo escolhido. Fatores como intensidade da tragada e frequência de uso podem influenciar na durabilidade total do produto.",
    },
    {
      question: "Vocês vendem para todo o Brasil?",
      answer:
        "Sim, realizamos entregas para todo o território nacional. As taxas de frete e prazos podem variar de acordo com a região. Trabalhamos com as principais transportadoras do país para garantir que seu produto chegue em perfeitas condições, independentemente da sua localização.",
    },
    {
      question: "Posso trocar o produto se não gostar do sabor?",
      answer:
        "Infelizmente, por questões de higiene e segurança, não realizamos trocas de produtos por preferência de sabor. Recomendamos pesquisar sobre os sabores antes da compra. No entanto, caso o produto apresente algum defeito de fabricação, oferecemos garantia de 7 dias para substituição.",
    },
    {
      question: "Qual a concentração de nicotina dos pods?",
      answer:
        "Nossos produtos possuem diferentes concentrações de nicotina, variando de 20mg/ml a 50mg/ml, dependendo do modelo. A concentração específica está detalhada na descrição de cada produto. Sempre recomendamos escolher a concentração adequada ao seu perfil de consumo.",
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black p-4 md:p-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="container mx-auto max-w-3xl"
        >
          <div className="flex items-center mb-12">
            <Link href="/" className="text-white hover:text-yellow-300 transition-colors">
              <ArrowLeft className="w-8 h-8" />
            </Link>
            <h1 className="text-5xl font-bold ml-4">FAQ</h1>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="border border-zinc-800 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" }}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left bg-zinc-900 hover:bg-zinc-800 transition-colors"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-xl font-bold">{item.question}</span>
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-yellow-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden bg-zinc-800"
                    >
                      <div className="p-6 text-gray-300 leading-relaxed">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}
