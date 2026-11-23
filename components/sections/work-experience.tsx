"use client"

import { motion } from "framer-motion"
import { BriefcaseBusiness } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function WorkExperienceSection() {
  return (
    <section aria-labelledby="work-experience-heading" className="bg-muted/30 px-4 py-16">
      <div className="container mx-auto">
        <motion.h2
          id="work-experience-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold"
        >
          Work Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-4xl"
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <BriefcaseBusiness aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <CardTitle className="text-xl">Quality Assurance Engineer</CardTitle>
                    <CardDescription className="mt-2 text-base">
                      Federal Secretariat Construction and Management Office, Nepal
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline">June 2026 - Present</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-3 font-medium">
                Reconstruction of Secretariat Hall (Prime Minister&apos;s Residence), Nepal
              </p>
              <p className="leading-7 text-muted-foreground">
                Supervise structural rehabilitation works, including CFRP application for column
                strengthening and welded wire mesh reinforcement for beam restoration.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
