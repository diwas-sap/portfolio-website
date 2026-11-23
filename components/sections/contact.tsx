"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { sendEmail } from "@/lib/resend"
import toast from "react-hot-toast"

export function ContactSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
console.log("Form submitted")
    const form = e.target as HTMLFormElement
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value

    if (!email || !message) {
      toast.error("Please fill in all fields.")
      return
    }
    sendEmail({ email, message })
      .then(() => {
        toast.success("Message sent successfully!")
        form.reset()
      })
      .catch((error) => {
        console.error("Error sending email:", error)
        toast.error("Failed to send message.")
      })
    }

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">Have a question or want to work together?</p>
        </motion.div>

        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-xl border bg-background/80 p-4 text-center">
            <MapPin aria-hidden="true" className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold">Location</span>
            <span className="text-sm text-muted-foreground">Lalitpur, Nepal</span>
          </div>
          <a
            href="mailto:078bce052.diwas@pcampus.edu.np"
            className="flex flex-col items-center gap-2 rounded-xl border bg-background/80 p-4 text-center transition-colors hover:bg-accent"
          >
            <Mail aria-hidden="true" className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold">Email</span>
            <span className="break-all text-sm text-muted-foreground">
              078bce052.diwas@pcampus.edu.np
            </span>
          </a>
          <a
            href="tel:+9779846482837"
            className="flex flex-col items-center gap-2 rounded-xl border bg-background/80 p-4 text-center transition-colors hover:bg-accent"
          >
            <Phone aria-hidden="true" className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold">Phone</span>
            <span className="text-sm text-muted-foreground">+977 9846482837</span>
          </a>
        </div>

        <motion.form
          {...fadeInUp}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          
          <motion.div variants={fadeInUp}>
            <Input type="email" name="email" placeholder="Your Email" />
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <Textarea name="message" placeholder="Your Message" className="h-40"/>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <Button 
              type="submit" 
              size="lg"
              className="group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center">
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </span>
            </Button>
          </motion.div>
        </motion.form>
      </div>

      {/* Background elements */}
      <motion.div
        className="absolute -z-10 top-1/2 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  )
}
