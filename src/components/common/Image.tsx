import styled from 'styled-components';

type Props = {
  src: string;
  size?: string;
  alt?: string;
};

const Image: React.FC<Props> = ({ src, alt, size }) => {
  return (
    <Container size={size}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </Container>
  );
};

const Container = styled.div<{ size: string }>`
  position: relative;
  *::selection {
    background: none;
  }
  img {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    object-fit: cover;
    border-radius: 50%;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

Image.defaultProps = {
  size: '100%',
  alt: 'image',
};

export default Image;
