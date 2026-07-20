import Nav from './components/Nav';
import Hero from './components/Hero';
import RefrigerantLine from './components/RefrigerantLine';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import ComfortAssistant from './components/ComfortAssistant';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <RefrigerantLine />
      <Services />
      <WhyUs />
      <RefrigerantLine flip />
      <Footer />
      <ComfortAssistant />
    </>
  );
}

export default App;
