import styled from 'styled-components';

type Props = {
  text: string;
};

const NotFound: React.FC<Props> = ({ text }) => <Container>{text}</Container>;

const Container = styled.p`
  text-align: center;
  padding: 30px;
  color: var(--color-text-secondary);
  opacity: 0.6;
`;

export default NotFound;
