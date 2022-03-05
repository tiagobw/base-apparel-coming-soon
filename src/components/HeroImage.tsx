import '../styles/HeroImage.css';

type HeroImageProps = {
  imageSrc: string;
};

const HeroImage = ({ imageSrc }: HeroImageProps) => (
  <figure className='hero'>
    <img className='hero__img' src={imageSrc} alt='A woman with orange shirt' />
  </figure>
);

export default HeroImage;
