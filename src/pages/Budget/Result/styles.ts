import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TitleContainer = styled.View`
  align-self: center;
  align-items: center;
  flex-direction: row;

  margin-top: 128px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Regular';
  color: #53b427;
  font-size: 42px;
  margin-right: 16px;
`;

export const Text = styled.Text`
  align-self: center;

  font-family: 'Montserrat-Regular';
  color: #00adef;
  font-size: 18px;
  margin-right: 24px;

  text-align: center;
  max-width: 80%;

  margin-top: 64px;
`;
