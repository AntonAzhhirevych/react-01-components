import './Stats.css';
import { StatsProps } from '../interfaces';

const Stats = ({ followers, views, likes }: StatsProps) => {
  return (
    <ul className="stats">
      <li className="label">
        <span className="text">followers</span>
        <span className="desc">{followers}</span>
      </li>
      <li className="label">
        <span className="text">Views</span>
        <span className="desc">{views}</span>
      </li>
      <li className="label">
        <span className="text">Likes</span>
        <span className="desc">{likes}</span>
      </li>
    </ul>
  );
};

Stats.defaultProps = {
  followers: 0,
  views: 0,
  likes: 0,
};

export default Stats;
