import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
  border-bottom: 2.5px solid transparent;
  }

  to {
    border-bottom: 2.5px solid white;
  }
`;

const ButtonIcon = styled.button`
  display: block;
  padding: 5px 10px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.5em;
  padding: 0.2em;
  margin-right: 3vw;
  margin-top: 0.6em;
  color: white;
  border-bottom: 2.5px solid transparent;
  &:hover {
    animation: ${appear} 0.2s linear forwards;
  }
  &.active {
    animation: ${appear} 0.2s linear forwards;
  }
  @media (max-width: 920px) {
    font-size: 1.15em;
  }
`;

export default ButtonIcon;
