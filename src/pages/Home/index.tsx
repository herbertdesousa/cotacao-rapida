import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useDestination } from '../../hooks/destination';

import Header from '../../components/Header';
import Button from '../../components/Submit';
import ButtonOutline from '../../components/SubmitOutline';

import {
  Container,
  Carousel,
  CarouselItemContainer,
  CarouselItemTitle,
  DestinationContainer,
  DestinationBlock,
  DestinationTitle,
  DestinationSubtitle,
} from './styles';

export interface CarouselDataProps {
  id: string;
  name: string;
}

const Home: React.FC = () => {
  const carouselData = [
    {
      id: '0',
      name: 'empresa patrocinada 1',
    },
    {
      id: '1',
      name: 'empresa patrocinada 2',
    },
    {
      id: '2',
      name: 'empresa patrocinada 3',
    },
  ];

  const { navigate } = useNavigation();

  const { destination, removeDestination } = useDestination();

  return (
    <Container>
      <Header title="Página Inicial" headerHeight={228} />

      <Carousel
        data={carouselData}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CarouselItemContainer
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            }}
          >
            <CarouselItemTitle>{item.name}</CarouselItemTitle>
          </CarouselItemContainer>
        )}
      />
      <DestinationContainer>
        <DestinationBlock>
          <DestinationTitle>cidade de coleta:</DestinationTitle>
          <DestinationSubtitle>{destination.from}</DestinationSubtitle>
        </DestinationBlock>
        <DestinationBlock>
          <DestinationTitle>cidade de destino:</DestinationTitle>
          <DestinationSubtitle>{destination.to}</DestinationSubtitle>
        </DestinationBlock>
      </DestinationContainer>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <ButtonOutline
          title="mudar dados"
          contentContainerStyle={{ left: 16, bottom: 16 }}
          onPress={() => removeDestination()}
        />
        <Button
          title="cotação rápida"
          contentContainerStyle={{ right: 16, bottom: 16 }}
          onPress={() => navigate('PersonForm')}
        />
      </View>
    </Container>
  );
};

export default Home;
