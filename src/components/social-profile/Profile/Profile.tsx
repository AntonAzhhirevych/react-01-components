import './Profile.css';
import { ProfileProps } from '../interfaces';

const Profile = ({ children }: ProfileProps) => {
  return <div className="profile">{children}</div>;
};

export default Profile;
