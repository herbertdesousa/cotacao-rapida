import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Content,
  Title,
  IconFeatherContainer,
  IconFeather,
} from './styles';

interface HeaderProps {
  title: string;
  headerHeight?: number;
  isGoBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  headerHeight = 100,
  isGoBack = false,
}) => {
  const { goBack } = useNavigation();

  return (
    <>
      <StatusBar backgroundColor="#00ADEF" barStyle="light-content" />
      <Container style={{ height: headerHeight }}>
        <Content>
          {isGoBack && (
            <IconFeatherContainer onPress={() => goBack()}>
              <IconFeather name="chevron-left" size={35} color="#F9FDFF" />
            </IconFeatherContainer>
          )}
          <Title>{title}</Title>
        </Content>
      </Container>
    </>
  );
};

export default Header;
