import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Roadmap } from "@/components/roadmap";
import { Tokenomics } from "@/components/tokenomics";

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>
        <Hero />
        <Tokenomics />
        <Roadmap />
      </main>
      <Footer />
    </div>
  )
}

