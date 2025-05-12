"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Send, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    message?: string
  }>({})

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const validateForm = () => {
    const newErrors: {
      name?: string
      email?: string
      message?: string
    } = {}

    // Email validation (only if provided)
    if (formState.email && !/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Por favor, insira um email válido"
    }

    // Message is required
    if (!formState.message.trim()) {
      newErrors.message = "Por favor, insira uma mensagem"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const inputClasses =
    "w-full bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-200"
  const errorClasses = "text-red-400 text-sm mt-1"

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black p-4 md:p-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="container mx-auto max-w-2xl"
        >
          <div className="flex items-center mb-12">
            <Link href="/" className="text-white hover:text-yellow-300 transition-colors">
              <ArrowLeft className="w-8 h-8" />
            </Link>
            <h1 className="text-5xl font-bold ml-4">CONTACT</h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="bg-zinc-900 rounded-xl p-8 shadow-lg"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-400">Agradecemos seu contato. Retornaremos em breve.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-400 mb-2 font-medium">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Seu nome (opcional)"
                  />
                  {errors.name && <p className={errorClasses}>{errors.name}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-400 mb-2 font-medium">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Seu e-mail (opcional)"
                  />
                  {errors.email && <p className={errorClasses}>{errors.email}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-400 mb-2 font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className={inputClasses}
                    placeholder="Sua mensagem aqui..."
                    required
                  ></textarea>
                  {errors.message && <p className={errorClasses}>{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-bold py-4 px-6 rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center disabled:opacity-70 disabled:hover:bg-white"
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -2 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <span>Enviar</span>
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 0.7 } : {}}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="text-center mt-8 text-gray-500 italic"
          >
            Seu feedback é importante para nós. Todas as mensagens são anônimas e seguras.
            <br />
            Não armazenamos informações pessoais sem seu consentimento.
          </motion.p>
        </motion.div>
      </div>
    </>
  )
}
