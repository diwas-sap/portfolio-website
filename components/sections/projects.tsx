"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ImageIcon } from "lucide-react"

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

const researchProjects = [
  {
    title: "Seismic Performance of Elevated RCC Tanks with LRB Isolation Using Housner's Model",
    organization: "Department of Civil Engineering, Pulchowk Campus",
    role: "Undergraduate Student Researcher",
    date: "April 2026 - Present",
    location: "IoE PC, Lalitpur, Nepal",
    note: "Primary Research",
    diagrams: [
      { src: "/elevated-tank-housner-model.png", alt: "Elevated tank and Housner spring-mass model" },
      { src: "/elevated-tank-fem-model.png", alt: "Finite element model of the elevated tank" },
    ],
    github: "https://github.com/diwas-sap/OpenSeesPy_450KL_RCC_Tank_Model",
    details: [
      "Evaluated performance of 100 kL and 750 kL DWSSM designed elevated RCC water tanks using Housner's two-mass model in OpenSeesPy, comparing fixed-base and Lead Rubber Bearing (LRB) isolated systems.",
      "Performed pushover and NLTHA under NBC 105:2020 matched ground motions for Soil Type A.",
      "Demonstrated that LRB isolation reduced base shear by up to 30%, overturning moment by up to 65%, and increased drift capacity by up to 73%.",
      "Developed drift-based fragility curves, showing that base isolation enables smaller staging elements and shallower foundations, while requiring larger seismic gaps and flexible utility connections.",
    ],
  },
  {
    title: "Seismic Damage Assessment & Retrofit Strategies for RC Buildings with Rooftop Lattice Towers: Kathmandu Valley Case Study",
    organization: "Central Material Testing Laboratory (CMTL)",
    role: "Research Intern",
    date: "December 2025 - May 2026",
    location: "IoE PC, Lalitpur, Nepal",
    note: "Co-Author",
    diagrams: [
      { src: "/rc-building-rooftop-lattice-tower-model.png", alt: "RC building model with a rooftop lattice tower" },
      { src: "/rooftop-tower-target-spectrum.png", alt: "Target and mean matched response spectra for Soil Type D" },
    ],
    publication: "/fib-proceedings-2026-SS31_Diwas.pdf",
    details: [
      "Investigated seismic vulnerability of five existing RC buildings with rooftop lattice towers in Kathmandu Valley by performing NLTHA using code-defined local soil spectra.",
      "Developed fragility curves to assess the damage pattern at different probability of exceedance.",
      "Implemented a low-cost sisal-based FRCM to restore its seismic performance.",
      "Developed a practical framework for rooftop tower installation, evaluation and policy support.",
    ],
  },
  {
    title: "Synergistic Effect of Rice Husk Ash, Coconut Fibre, and Recycled Coarse Aggregate on Compressive Performance of Concrete",
    organization: "Nepal Academy of Science and Technology (NAST)",
    role: "Research Intern",
    date: "December 2025 - May 2026",
    location: "Khumaltar, Lalitpur, Nepal",
    note: "Co-Author",
    diagrams: [
      {
        src: "/nast-concrete-mix-preparation.png",
        alt: "Research team preparing materials for concrete testing",
      },
      {
        src: "/nast-concrete-strength-gain.png",
        alt: "28-day compressive-strength gain by rice husk ash and coconut fibre mix",
      },
    ],
    details: [
      "Evaluated M20 concrete across 16 mix proportions, varying rice husk ash from 0-20% of cement and coconut fibre from 0-1.5% of cement, with recycled coarse aggregate fixed at 25%.",
      "Tested 144 cubes for compressive strength at 3, 7, and 28 days, with mean, standard deviation, and coefficient of variation analysis.",
      "Identified an optimum mix of 10% rice husk ash and 0.75% coconut fibre, achieving 35.1 MPa at 28 days.",
      "Assessed implementation using locally sourced rice husk ash, demolition waste, and coconut fibre with standard batching equipment and quality control.",
      "NAST-funded research in collaboration with IoE Pulchowk Campus; submitted to NAST.",
    ],
  },
]

const academicProjects = [
  {
    title: "Earthquake-Resistant Design of a Multi-Storeyed Hospital Building",
    role: "Undergraduate / Final Year Project",
    report: "https://drive.google.com/file/d/15g43iFsZZ9y5cLiOEtcCS0_taaNcO-x7/view",
    diagrams: [
      { src: "/hospital-etabs-models.png", alt: "ETABS structural models of hospital building blocks 1 and 2" },
    ],
    details: [
      "Developed the ETABS structural model for a six-storey reinforced-concrete (RCC) hospital building with a lift, arranged as two blocks separated by an expansion joint.",
      "Designed every structural element, specifying its reinforcement and concrete requirements.",
      "Performed seismic analysis and design in accordance with IS 456:2000, IS 1893:2016, and NBC 105:2025.",
    ],
  },
  {
    title: "Analysis of an RC Building in OpenSeesPy",
    role: "Independent Project",
    github: "https://github.com/diwas-sap/NLHTA_opensees.git",
    diagrams: [],
    details: [
      "Performed nonlinear time-history and pushover analyses of an RC building model.",
      "Generated Incremental Dynamic Analysis (IDA) and capacity curves.",
      "Evaluated the effects of RC jacketing retrofit on the building's seismic performance.",
    ],
  },
  {
    title: "Serpent Sediment Sluicing System (S4)",
    role: "CESS Exhibition / Team Project",
    diagrams: [],
    details: [
      "Designed a novel settling-basin concept for sediment management in hydropower systems.",
      "Built and tested a physical model to demonstrate sediment flushing and flow behavior.",
    ],
  },
]

const academicProjectColumns = [
  academicProjects.slice(0, 1),
  academicProjects.slice(1),
]

export function ProjectsSection() {
  return (
    <section id="research-projects" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Research and Projects
        </motion.h2>

        <div className="max-w-6xl mx-auto space-y-10">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-6"
            >
              Research
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-6"
            >
              {researchProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="space-y-3">
                        <CardTitle className="text-xl leading-snug">{project.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline">{project.date}</Badge>
                          <p className="text-xs text-muted-foreground">{project.location}</p>
                        </div>
                      </div>
                      <CardDescription className="text-primary">{project.organization}</CardDescription>
                      <p className="text-sm font-medium">{project.role}</p>
                      <Badge variant="secondary" className="w-fit">{project.note}</Badge>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      {project.diagrams.length > 0 ? (
                        <div className="grid gap-3 sm:grid-cols-2">
                          {project.diagrams.map((diagram) => (
                            <div
                              key={diagram.src}
                              className="flex min-h-48 items-center justify-center overflow-hidden rounded-lg border bg-muted/30 p-2"
                            >
                              <img
                                src={diagram.src}
                                alt={diagram.alt}
                                className="max-h-80 w-full object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex aspect-video flex-col items-center justify-center rounded-lg border border-dashed border-muted-foreground/40 bg-muted/30 text-muted-foreground">
                          <ImageIcon className="mb-2 h-8 w-8" />
                          <span className="text-sm">Project diagram / model output</span>
                        </div>
                      )}
                      <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                        {project.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                        >
                          View GitHub
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      {project.publication && (
                        <a
                          href={project.publication}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                        >
                          View publication
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-6"
            >
              Academic projects
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid items-start gap-6 lg:grid-cols-2"
            >
              {academicProjectColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-6">
                  {column.map((project) => (
                    <motion.div
                      key={project.title}
                      variants={fadeInUp}
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-xl leading-snug">{project.title}</CardTitle>
                          <CardDescription className="text-primary">{project.role}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5">
                          {project.diagrams.length > 0 && (
                            <div className="grid gap-3 sm:grid-cols-2">
                              {project.diagrams.map((diagram) => (
                                <div
                                  key={diagram.src}
                                  className="flex min-h-48 items-center justify-center overflow-hidden rounded-lg border bg-muted/30 p-2"
                                >
                                  <img
                                    src={diagram.src}
                                    alt={diagram.alt}
                                    className="max-h-80 w-full object-contain"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                            {project.details.map((detail) => (
                              <li key={detail}>{detail}</li>
                            ))}
                          </ul>
                          {project.report && (
                            <a
                              href={project.report}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                            >
                              View Report
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                            >
                              View GitHub
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
