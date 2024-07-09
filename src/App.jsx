import { Hero, Products, About, Footer, BackgroundImage } from './sections'
import Navbar from './components/Navbar';
import ProductRange from './sections/ProductRange';

const App = () => (
  <main className="relative">
    <Navbar />
    <section className="x1:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <ProductRange />
    </section>
    <section className="padding">
      <Products />
    </section>
    <section className="padding">
      <About />
    </section>
    <section className="padding">
      <BackgroundImage />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)





export default App;