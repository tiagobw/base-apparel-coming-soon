type HeroImageProps = {
  imageSrc: string;
};

const HeroImage = ({ imageSrc }: HeroImageProps) => (
  <img src={imageSrc} alt='A woman with orange shirt' />
);

export default HeroImage;
