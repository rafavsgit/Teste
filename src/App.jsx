import { images } from './assets/images'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header
        logoDesktop={images.logoDesktop}
        logoMobile={images.logoMobile}
        menuIcon={images.menuIcon}
      />
      <main>
        <HeroSection
          heroBgDesktop={images.heroBgDesktop}
          heroBgMobile={images.heroBgMobile}
          arrowIcon={images.arrowIcon}
        />
      </main>
    </div>
  )
}

export default App
