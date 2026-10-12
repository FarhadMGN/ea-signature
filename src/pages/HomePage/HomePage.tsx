import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Seo } from '@/components/layout/Seo'
import { About } from '@/components/sections/About'
import { Audience } from '@/components/sections/Audience'
import { Contact } from '@/components/sections/Contact'
import { Faq } from '@/components/sections/Faq'
import { Hero } from '@/components/sections/Hero'
import { Process } from '@/components/sections/Process'
import { Services } from '@/components/sections/Services'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { Work } from '@/components/sections/Work'
import './HomePage.css'

export function HomePage() {
  return (
    <div className="home-page" id="top">
      <Seo />
      <Header />
      <main className="home-page__main">
        <Hero imageSrc="/images/hero-start.png" />
        <About />
        <TrustStrip />
        <Audience />
        <Services />
        <Work />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
