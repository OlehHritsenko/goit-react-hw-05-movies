import { HiArrowLeft } from 'react-icons/hi';
import { GoBack } from './BackLink.styled';

export const BackButton = ({ to, children }) => {
  return (
    <GoBack to={to}>
      <HiArrowLeft size="18" />
      {children}
    </GoBack>
  );
};
