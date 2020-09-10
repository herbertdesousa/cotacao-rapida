import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { CarouselDataProps } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const Carousel = styled(
  FlatList as new () => FlatList<CarouselDataProps>,
)`
  top: -100px;
  max-height: 250px;
`;

export const CarouselItemContainer = styled.View`
  height: 230px;
  width: ${Dimensions.get('screen').width - 64}px;
  background: #ffffff;

  box-shadow: 10px 5px 5px black;
  justify-content: flex-end;
  margin: 0 8px;
`;

export const CarouselItemTitle = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 18px;
  color: #d1d1d1;
  margin: 16px;
`;

export const DestinationContainer = styled.View`
  align-items: center;
  flex: 1;
  margin-top: -64px;
`;

export const DestinationBlock = styled.View`
  align-items: center;
  margin-bottom: 16px;
`;

export const DestinationTitle = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  color: #00adef;
`;

export const DestinationSubtitle = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  color: #d1d1d1;
  margin-top: 4px;
`;
