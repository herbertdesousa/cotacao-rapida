import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../../components/Header';
import Submit from '../../../components/Submit';

import { Container, TitleContainer, Title, Text } from './styles';

const Result: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Header title="Resultado" />

      <TitleContainer>
        <Title>Sucesso</Title>
        <Icon name="check-circle" color="#53B427" size={42} />
      </TitleContainer>

      <Text numberOfLines={2}>
        sua cotação foi enviada, fique de olho no seu email
      </Text>

      <View style={{ justifyContent: 'flex-end', flex: 1 }}>
        <Submit
          title="voltar inicio"
          style={{ marginRight: 16, marginBottom: 16 }}
          onPress={() => navigate('Home')}
        />
      </View>
    </Container>
  );
};

export default Result;
