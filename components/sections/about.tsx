"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const fadeInLeft = {
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.45 },
}

export function AboutSection() {
  return (
    <section id="about" className="w-full min-w-0 lg:h-full">
      <Card className="relative overflow-hidden border bg-background/85 shadow-lg backdrop-blur lg:h-full">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <CardContent className="relative z-10 p-5 sm:p-6 lg:flex lg:h-full lg:flex-col">
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Get to know me</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">About Me</h2>
          </div>

          <motion.p {...fadeInLeft} className="mb-3 text-lg leading-7 text-muted-foreground">
            I am a Civil Engineering graduate from the Institute of Engineering, Pulchowk Campus, Tribhuvan University, Nepal. I combine structural engineering, computational modelling, and programming to investigate complex engineering problems and develop practical solutions.
          </motion.p>
          <motion.p
            {...fadeInLeft}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="mb-3 text-lg leading-7 text-muted-foreground"
          >
            My academic and research work focuses on structural dynamics, earthquake engineering, nonlinear analysis, and seismic resilience. I use numerical simulations, data-driven approaches, and engineering fundamentals to improve infrastructure safety and performance.
          </motion.p>
          <motion.p
            {...fadeInLeft}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="text-lg leading-7 text-muted-foreground"
          >
            I serve as Secretary of the Free Student Union and support student-led academic initiatives. I aim to apply engineering to real-world challenges through professional practice and research.
          </motion.p>
          <div className="mt-4 rounded-2xl border bg-muted/30 p-4">
            <h3 className="text-xl font-semibold">Research Interests</h3>
            <ul className="mt-2 grid list-disc grid-cols-1 gap-x-8 gap-y-1 pl-5 text-base leading-7 text-muted-foreground marker:text-primary sm:grid-cols-2">
              <li>Earthquake Engineering</li>
              <li>Structural Dynamics</li>
              <li>Disaster Resilient Structures</li>
              <li>Finite Element Modeling</li>
              <li>Performance-Based Earthquake Engineering</li>
              <li>AI-Driven Structural Design and Assessment</li>
              <li>Structural Health Monitoring</li>
              <li>Soil Structure Interaction</li>
              <li>Digital Twins for Infrastructure</li>
              <li>Computational Mechanics</li>
              <li>Probabilistic Disaster Assessment</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
