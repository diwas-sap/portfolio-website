"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const awards = [
  {
    title: "Intra-College Winner",
    detail: "Civil Engineering Students Society B.E. Model Exhibition, 2024",
    Icon: Award,
  },
  {
    title: "Merit-Based Undergraduate Scholarship",
    detail:
      "Institute of Engineering scholarship awarded based on the national engineering entrance examination (approximately 15,000 candidates), with a separate IoE scholarship stipend.",
    Icon: GraduationCap,
  },
  {
    title: "Top 3% of Undergraduate Cohort",
    detail: "Ranked among the top 3% of the undergraduate cohort at the Institute of Engineering, Tribhuvan University.",
    Icon: Trophy,
  },
]

export function AwardsSection() {
  return (
    <section aria-labelledby="awards-heading" className="px-3 py-8 sm:py-12">
      <div className="mx-auto max-w-[1500px] rounded-3xl border bg-muted/20 px-5 py-8 shadow-sm sm:px-8">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Recognition
          </p>
          <h2 id="awards-heading" className="mt-1 text-2xl font-bold tracking-tight">
            Awards and Honors
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {awards.map(({ title, detail, Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/85">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
