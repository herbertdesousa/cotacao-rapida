import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
  align-items: center;
`;

export const BannerContainer = styled.View``;

export const Banner = styled.Image``;

export const BannerBlock = styled.View`
  position: absolute;
  bottom: 16px;
  left: 66px;
`;

export const BannerTitle = styled.Text`
  color: #f9fdff;
  font-size: 36px;
  font-family: 'Montserrat-Medium';
`;

export const BannerDescription = styled.Text`
  color: #f9fdff;
  font-size: 18px;
  font-family: 'Montserrat-Regular';
  max-width: 300px;
`;
