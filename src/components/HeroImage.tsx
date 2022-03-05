import '../styles/HeroImage.css';

type HeroImageProps = {
  imageSrc: string;
};

const HeroImage = ({ imageSrc }: HeroImageProps) => (
  <div role='banner' className='hero'>
    <img className='hero__img' src={imageSrc} alt='A woman with orange shirt' />
  </div>
);

export default HeroImage;
