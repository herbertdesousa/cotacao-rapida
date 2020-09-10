import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  background: #00adef;
  width: 100%;
`;

export const Content = styled.View`
  margin-top: 32px;
  margin-left: 16px;

  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #f9fdff;
  font-family: 'Montserrat-Medium';
  font-size: 30px;
`;

export const IconFeatherContainer = styled.TouchableOpacity``;

export const IconFeather = styled(Icon)`
  margin-right: 16px;
`;
