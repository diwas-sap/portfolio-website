import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"

export default function Home() {
  return (
    <div className="mx-auto grid max-w-[1500px] box-border items-stretch gap-4 px-3 py-3 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(17rem,0.85fr)_minmax(0,1.65fr)]">
      <HeroSection />
      <AboutSection />
    </div>
  )
}
