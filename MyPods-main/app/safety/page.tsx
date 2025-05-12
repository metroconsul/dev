"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, HelpCircle, Wifi, CreditCard, UserX, Globe, Clock, FileWarning } from "lucide-react"
import { Navbar } from "@/components/navbar"

type SafetyTip = {
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

type SafetyFaq = {
  question: string
  answer: string
}

export default function Safety() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const safetyTips: SafetyTip[] = [
    {
      title: "Utilize VPN ao acessar o site",
      description:
        "Uma VPN criptografa sua conexão e oculta seu endereço IP real, garantindo anonimato durante a navegação.",
      icon: <Wifi className="w-6 h-6" />,
      color: "bg-gradient-to-br from-green-600 to-green-400",
    },
    {
      title: "Prefira pagamentos anônimos",
      description:
        "Métodos de pagamento como criptomoedas oferecem maior privacidade e não podem ser facilmente rastreados.",
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-gradient-to-br from-blue-600 to-blue-400",
    },
    {
      title: "Nunca compartilhe informações pessoais",
      description:
        "Evite fornecer dados que possam identificá-lo, como nome completo, endereço residencial ou documentos.",
      icon: <UserX className="w-6 h-6" />,
      color: "bg-gradient-to-br from-red-600 to-red-400",
    },
    {
      title: "Use navegadores seguros",
      description: "Navegadores focados em privacidade e modo anônimo ajudam a proteger seus dados de navegação.",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-gradient-to-br from-purple-600 to-purple-400",
    },
    {
      title: "Limpe seus rastros digitais",
      description: "Apague regularmente seu histórico de navegação, cookies e cache para minimizar rastros digitais.",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-gradient-to-br from-yellow-600 to-yellow-400",
    },
    {
      title: "Verifique a autenticidade do site",
      description: "Sempre confira se está no site oficial antes de realizar qualquer compra ou fornecer informações.",
      icon: <FileWarning className="w-6 h-6" />,
      color: "bg-gradient-to-br from-orange-600 to-orange-400",
    },
  ]

  const safetyFaqs: SafetyFaq[] = [
    {
      question: "Por que devo me preocupar com privacidade?",
      answer:
        "A privacidade online é essencial para proteger suas informações pessoais e financeiras de possíveis ameaças digitais. Manter sua privacidade reduz riscos de roubo de identidade, fraudes financeiras e exposição indesejada de dados pessoais.",
    },
    {
      question: "O que é uma VPN e como funciona?",
      answer:
        "VPN (Virtual Private Network) é uma tecnologia que cria uma conexão segura e criptografada entre seu dispositivo e a internet, mascarando seu endereço IP real. Ela funciona como um túnel protegido que impede que terceiros, incluindo seu provedor de internet, vejam suas atividades online.",
    },
    {
      question: "Como escolher uma VPN confiável?",
      answer:
        "Procure por VPNs que não mantenham registros de atividades, ofereçam criptografia forte e tenham servidores em diversos países. Verifique também a reputação da empresa, avaliações de usuários e políticas de privacidade. Evite VPNs gratuitas, pois muitas delas podem vender seus dados.",
    },
    {
      question: "Quais são os métodos de pagamento mais anônimos?",
      answer:
        "Criptomoedas como Bitcoin e Monero são consideradas as opções mais anônimas. Cartões pré-pagos adquiridos com dinheiro em espécie também oferecem bom nível de privacidade. Evite usar cartões de crédito pessoais ou métodos de pagamento diretamente vinculados à sua identidade.",
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black p-4 md:p-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="container mx-auto max-w-4xl"
        >
          <div className="flex items-center mb-12">
            <Link href="/" className="text-white hover:text-yellow-300 transition-colors">
              <ArrowLeft className="w-8 h-8" />
            </Link>
            <h1 className="text-5xl font-bold ml-4">SAFETY</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {safetyTips.map((tip, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start p-6">
                  <div className={`${tip.color} p-3 rounded-lg mr-4 text-white`}>{tip.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                    <p className="text-gray-400">{tip.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center mb-6">
              <HelpCircle className="w-6 h-6 text-yellow-300 mr-3" />
              <h2 className="text-2xl font-bold">Dúvidas Frequentes sobre Segurança</h2>
            </div>

            <div className="space-y-6">
              {safetyFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900 rounded-xl p-6 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
