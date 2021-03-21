import './Description.css';
import { DescriptionProps } from '../interfaces';

const Description = ({ src, name, tag, location, alt }: DescriptionProps) => {
  return (
    <div className="description">
      <img className="description-img" src={src} alt={alt} />
      <p className="description-name">{name}</p>
      <p className="description-text">@{tag}</p>
      <p className="description-text">{location}</p>
    </div>
  );
};

Description.defaultProps = {
  alt: 'user avatar',
  src: 'photo',
  name: 'name',
  location: 'location',
  tag: 'tag',
};

export default Description;
