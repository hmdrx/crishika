import styled from 'styled-components';

const Section = styled.div`
  border-radius: 0.5rem;
  padding: 1.5rem;
  background: white;
`;

const Wrapper = ({ children, className }) => {
  return <Section className={className}>{children}</Section>;
};

export default Wrapper;
