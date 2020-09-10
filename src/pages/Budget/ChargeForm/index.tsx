import React, { useCallback, useRef } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../../utils/getValidationsErrors';

import { useDestination } from '../../../hooks/destination';
import { useForm } from '../../../hooks/form';

import Header from '../../../components/Header';
import InputAuto from '../../../components/InputAuto';
import InputArea from '../../../components/InputArea';
import Submit from '../../../components/Submit';

import { Container } from './styles';

interface FormData {
  from: string;
  to: string;
  text: string;
}

const PersonFrom: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { navigate } = useNavigation();

  const { destination } = useDestination();
  const { setFormChargeData } = useForm();

  const handlerOnSubmit = useCallback(async (data: FormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        from: Yup.string().required('Digite a origem da carga'),
        to: Yup.string().required('Digite o destino da carga'),
        text: Yup.string().required('Digite informações da carga').min(12),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setFormChargeData(data);
      navigate('Result');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Header title="Cotação Rápida" isGoBack />

      <Form
        onSubmit={handlerOnSubmit}
        ref={formRef}
        style={{ paddingHorizontal: 16 }}
      >
        <InputAuto
          icon="arrow-right"
          name="from"
          placeholder="origem da sua carga"
          inputDefaultValue={destination.from}
          contentContainerStyle={{ marginTop: 42 }}
        />
        <InputAuto
          icon="arrow-left"
          name="to"
          placeholder="destino da sua carga"
          inputDefaultValue={destination.to}
          contentContainerStyle={{ marginTop: 32 }}
        />
        <InputArea
          name="text"
          placeholder="digite sua cotação, inclua dados como peso, altura, largura, profundidade, tipo da carga ..."
          contentContainerStyle={{ marginTop: 32 }}
        />
      </Form>
      <View style={{ justifyContent: 'flex-end', flex: 1 }}>
        <Submit
          title="continuar"
          onPress={() => formRef.current?.submitForm()}
          style={{ marginBottom: 16, marginRight: 16 }}
        />
      </View>
    </Container>
  );
};

export default PersonFrom;
