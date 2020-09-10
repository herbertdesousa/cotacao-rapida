import React, { useRef, useCallback } from 'react';
import {
  StatusBar,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationsErrors';

import { useDestination } from '../../hooks/destination';

import Submit from '../../components/Submit';
import InputAuto from '../../components/InputAuto';

import bannerImg from '../../assets/banner.png';

import {
  Container,
  BannerContainer,
  Banner,
  BannerBlock,
  BannerTitle,
  BannerDescription,
} from './styles';

interface DestinationFormData {
  from: string;
  to: string;
}

const Landing: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { setDestination } = useDestination();

  const handlerOnSubmit = useCallback(
    async (data: DestinationFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          from: Yup.string().required('Digite a origem da carga'),
          to: Yup.string().required('Digite o destino da carga'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await setDestination(data);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
        Alert.alert('Ocorreu um erro', 'houve um erro ao entrar');
      }
    },
    [setDestination],
  );

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => Keyboard.dismiss()}
      >
        <View style={{ flex: 1, alignItems: 'center' }}>
          <BannerContainer>
            <Banner source={bannerImg} />
            <BannerBlock>
              <BannerTitle>Bem Vindo</BannerTitle>
              <BannerDescription numberOfLines={2}>
                digite os dados e mostramos as melhores rotas
              </BannerDescription>
            </BannerBlock>
          </BannerContainer>

          <Form
            ref={formRef}
            onSubmit={handlerOnSubmit}
            style={{ marginTop: 72, flex: 1 }}
          >
            <InputAuto
              name="from"
              icon="arrow-right"
              placeholder="origem da sua carga"
            />
            <InputAuto
              name="to"
              icon="arrow-left"
              placeholder="destino da sua carga"
              contentContainerStyle={{ marginTop: 32 }}
            />

            <View style={{ justifyContent: 'flex-end', flex: 1 }}>
              <Submit
                title="entrar"
                contentContainerStyle={{
                  marginRight: 16,
                  marginBottom: 32,
                }}
                onPress={() => formRef.current?.submitForm()}
              />
            </View>
          </Form>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default Landing;
