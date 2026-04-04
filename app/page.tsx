import Hero from '@/components/landing/hero'
import Coming from '@/components/landing/coming'
import LaunchPreview from '@/components/landing/launch-preview'
import WhyJoin from '@/components/landing/why-join'
import Header from '@/components/navigation/header'
import Footer from '@/components/navigation/footer'
import Comparison from '@/components/landing/comparison'

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Coming />
      <LaunchPreview />
      <WhyJoin />
      <Comparison />
      <Footer />
      </>
  )
}
