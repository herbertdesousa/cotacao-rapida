import styled, { css } from 'styled-components/native';

interface Props {
  optSelected: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  width: 100%;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity<Props>`
  width: 45%;
  height: 40px;
  justify-content: center;
  align-items: center;

  border-width: 1px;
  border-color: #d1d1d1;
  border-radius: 8px;

  ${props =>
    props.optSelected &&
    css`
      background: #00adef;
      border-width: 0;
    `}
`;

export const ButtonTitle = styled.Text<Props>`
  color: #707070;
  font-family: 'Montserrat-Regular';
  font-size: 18px;

  ${props =>
    props.optSelected &&
    css`
      color: #f9fdff;
    `}
`;
