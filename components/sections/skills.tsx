"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Building, FlaskConical, FileText } from "lucide-react"

const skills=["C", "Python", "HTML", "Git", "GitHub", "LaTeX"]

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

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          <motion.div
            variants={fadeInLeft}
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <Code className="mr-2 h-5 w-5" />
                  </motion.div>
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Badge variant="secondary" className="cursor-pointer">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            whileHover={{ scale: 1.02, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <Building className="mr-2 h-5 w-5" />
                  </motion.div>
                  Engineering Software
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["OpenSees", "DIANA FEA", "ETABS", "AutoCAD", "SAP2000"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <Badge variant="secondary" className="cursor-pointer">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <FlaskConical className="mr-2 h-5 w-5" />
                  </motion.div>
                  Laboratory and Experimental Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Compression test", "Universal Testing Machine (UTM)", "Penetrometer test"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Badge variant="secondary" className="cursor-pointer">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInLeft}
            whileHover={{ scale: 1.02, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <FileText className="mr-2 h-5 w-5" />
                  </motion.div>
                  Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["MS Office Suite", "Google Docs", "Overleaf"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Badge variant="secondary" className="cursor-pointer">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
