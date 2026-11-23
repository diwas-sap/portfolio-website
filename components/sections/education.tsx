"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

export function EducationSection() {
  return (
    <section id="education" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            {...fadeInLeft}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-4">
                  <span className="flex items-center gap-3">
                    <img
                      src="/TU.png"
                      alt="Tribhuvan University logo"
                      className="h-16 w-16 shrink-0 object-contain"
                    />
                    <span>Tribhuvan University, Institute of Engineering (IoE), Pulchowk Campus</span>
                  </span>
                  <Badge variant="outline" className="shrink-0">2022 - 2026</Badge>
                </CardTitle>
                <CardDescription className="italic">
                  Bachelor in Civil Engineering, Aggregate Percentage: <strong>82.01%</strong> (Distinction)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  Lalitpur, Nepal
                </p>
                <p>
                  <strong>Relevant Courses:</strong> Strength of Materials, Fluid Dynamics, Theory of Structures,
                  Design of Steel and Timber, Design of RCC Structures, Structural Dynamics,
                  Earthquake Resistant Design of Structures, Computational Techniques (FEM)
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            {...fadeInRight}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-4">
                  <span className="flex items-center gap-3">
                    <img
                      src="/SOS.png"
                      alt="SOS Hermann Gmeiner Secondary School logo"
                      className="h-16 w-16 shrink-0 rounded-md object-contain"
                    />
                    <span>SOS Hermann Gmeiner Secondary School Gandaki</span>
                  </span>
                  <Badge variant="outline" className="shrink-0">2019 - 2021</Badge>
                </CardTitle>
                <CardDescription className="italic">
                  Pre-University Education, GPA: <strong>3.71/4.0</strong>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  Pokhara, Nepal
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            {...fadeInLeft}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="flex items-center gap-3">
                    <img
                      src="/SOS.png"
                      alt="SOS Hermann Gmeiner Secondary School logo"
                      className="h-16 w-16 shrink-0 rounded-md object-contain"
                    />
                    <span>SOS Hermann Gmeiner Secondary School Gandaki</span>
                  </span>
                </CardTitle>
                <CardDescription className="italic">
                  Secondary Education Examination (SEE), GPA: <strong>3.85/4.0</strong>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  Pokhara, Nepal
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
