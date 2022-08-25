import styled from 'styled-components';

export const SpinnerBody = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  aspect-ratio: 1/1;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    aspect-ratio: 1/1;
    border: 0.4rem solid lightgray;
    border-radius: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    aspect-ratio: 1/1;
    border: 0.4rem solid lightcoral;
    border-radius: 50%;
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
    animation: spinner 1.2s linear infinite;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
