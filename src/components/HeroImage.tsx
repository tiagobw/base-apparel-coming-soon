import '../styles/HeroImage.css';

type HeroImageProps = {
  imageSrc: string;
};

const HeroImage = ({ imageSrc }: HeroImageProps) => (
  <section className='hero'>
    <img className='hero__img' src={imageSrc} alt='A woman with orange shirt' />
  </section>
);

export default HeroImage;
