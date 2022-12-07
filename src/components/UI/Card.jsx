import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.14);
`;

const Card = ({ children, className }) => {
  return <Wrapper className={className} >{children}</Wrapper>;
};

export default Card;
