import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ButtonProps } from './interface';

export const ButtonStyled = styled(Link)<ButtonProps>`
  padding: 1rem 2.4rem;
  text-align: center;
  width: 240px;
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0 auto;
  transform: scale(1);
  transition: all 260ms ease-in-out;

  ${(props) => {
    if (props.color === 'primary')
      return css`
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.tertiary};
      `;
    else if (props.color === 'secondary')
      return css`
        background: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.tertiary};
      `;
  }}

  &:hover {
    transform: scale(0.97);
  }

  @media (min-width: 700px) {
    width: 24rem;
  }
`;
