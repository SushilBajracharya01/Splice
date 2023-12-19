import Features from "./sections/Features"
import Footer from "./sections/Footer"
import Plugins from "./sections/Plugins"
import Sounds from "./sections/Sounds"
import Studio from "./sections/Studio/Studio"
import Testimonial from "./sections/Testimonial"

function App() {

  return (
    <div className='app font-mont'>
      <Sounds />
      <Plugins />
      <Studio />
      <Testimonial />
      <Features />
      <Footer />
    </div>
  )
}

export default App
