import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ContainerButton, Title } from './styles';

interface SubmitProps extends RectButtonProperties {
  title: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const Submit: React.FC<SubmitProps> = ({
  title,
  contentContainerStyle,
  ...rest
}) => {
  return (
    <Container style={contentContainerStyle}>
      <ContainerButton {...rest}>
        <Title>{title}</Title>
      </ContainerButton>
    </Container>
  );
};

export default Submit;
