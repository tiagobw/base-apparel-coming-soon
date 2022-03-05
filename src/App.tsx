import { Size, useWindowSize } from './hooks/useWindowSize';
import HeroImage from './components/HeroImage';
import Card from './components/Card';
import Header from './components/Header';

import './styles/App.css';

import heroDesktopImage from './images/hero-desktop.jpg';
import heroMobileImage from './images/hero-mobile.jpg';

function App() {
  const { width }: Size = useWindowSize();
  const isWidthLessThan800Px = width && width < 800;
  const imageSrc = isWidthLessThan800Px ? heroMobileImage : heroDesktopImage;

  return isWidthLessThan800Px ? (
    <>
      <Header />
      <HeroImage imageSrc={imageSrc} />
      <Card />
    </>
  ) : (
    <>
      <section className='left-container'>
        <Header />
        <Card />
      </section>
      <HeroImage imageSrc={imageSrc} />
    </>
  );
}

export default App;
