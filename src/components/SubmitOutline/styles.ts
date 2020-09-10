import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View``;

export const ContainerButton = styled(RectButton)`
  min-width: 150px;
  height: 40px;
  background: #f9fdff;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  align-self: flex-end;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #00adef;
  font-family: 'Montserrat-Regular';
`;
