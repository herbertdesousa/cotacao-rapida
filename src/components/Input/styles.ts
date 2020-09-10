import styled, { css } from 'styled-components/native';
import FeatherIcons from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isErrored: boolean;
  focused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  align-self: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 12px;
  margin: 0 16px;

  border-width: 1px;
  border-color: #d1d1d1;
  border-radius: 8px;

  ${props =>
    props.isErrored &&
    css`
      border-color: #e0604e;
    `}

  ${props =>
    props.focused &&
    css`
      border-color: #00adef;
    `};
`;

export const InputField = styled.TextInput`
  color: #707070;
  font-family: 'Montserrat-Regular';
  font-size: 18px;
  width: 90%;
`;

export const Icon = styled(FeatherIcons)``;
