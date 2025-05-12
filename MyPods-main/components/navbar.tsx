"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side navigation */}
          <div className="flex items-center justify-end w-1/3">
            <Link
              href="/shop"
              className={cn(
                "text-white hover:text-yellow-300 transition-colors font-bold text-sm md:text-base mr-8",
                isActive("/shop") && "text-yellow-300",
              )}
            >
              SHOP
            </Link>
            <Link
              href="/faq"
              className={cn(
                "text-white hover:text-yellow-300 transition-colors font-bold text-sm md:text-base",
                isActive("/faq") && "text-yellow-300",
              )}
            >
              FAQ
            </Link>
          </div>

          {/* Center logo */}
          <div className="flex justify-center w-1/3">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/mypods-logo.png"
                alt="MYPODS Logo"
                width={60}
                height={60}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right side navigation */}
          <div className="flex items-center justify-start w-1/3">
            <Link
              href="/safety"
              className={cn(
                "text-white hover:text-yellow-300 transition-colors font-bold text-sm md:text-base mr-8",
                isActive("/safety") && "text-yellow-300",
              )}
            >
              SAFETY
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-white hover:text-yellow-300 transition-colors font-bold text-sm md:text-base",
                isActive("/contact") && "text-yellow-300",
              )}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
