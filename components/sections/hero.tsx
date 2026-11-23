"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const scaleOnHover = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.96 },
}

export function HeroSection() {
  return (
    <section className="flex w-full flex-col gap-4 lg:h-full">
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 px-6 py-7 text-center shadow-sm lg:min-h-0 lg:flex-1 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <motion.div
            className="mx-auto h-40 w-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-[3px] shadow-xl md:h-44 md:w-44"
            whileHover={{ scale: 1.04, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="h-full w-full overflow-hidden rounded-full bg-background">
              <Image
                src="/profile.png"
                alt="Diwas Sapkota"
                width={256}
                height={256}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Civil Engineer
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-1 text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent md:text-[2.75rem]"
        >
          Diwas Sapkota
        </motion.h1>
        <p className="mt-3 max-w-xs text-base leading-relaxed text-muted-foreground">
          Prospective MS/PhD Applicant | Structural engineering.
        </p>
        <motion.div {...scaleOnHover} className="mt-5">
          <Link
            href="/Diwas_Sapkota_CV.pdf"
            download="Diwas_Sapkota_CV.pdf"
            className={cn(buttonVariants({ size: "lg" }), "group relative overflow-hidden")}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download CV
            </span>
          </Link>
        </motion.div>
      </div>

      <div className="rounded-2xl border bg-background/85 p-5 shadow-sm backdrop-blur">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Let&apos;s connect
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <motion.a
            {...scaleOnHover}
            href="mailto:078bce052.diwas@pcampus.edu.np"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "flex items-center")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Email Me
          </motion.a>
          <motion.a
            {...scaleOnHover}
            href="https://linkedin.com/in/diwassapkota59"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "flex items-center")}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </motion.a>
          <motion.a
            {...scaleOnHover}
            href="https://github.com/diwas-sap"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "flex items-center")}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </motion.a>
        </div>
      </div>
    </section>
  )
}
