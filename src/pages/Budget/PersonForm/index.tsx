import React, { useCallback, useRef } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../../utils/getValidationsErrors';

import { useForm } from '../../../hooks/form';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Submit from '../../../components/Submit';

import { Container } from './styles';

interface FormData {
  name: string;
  email: string;
  phone: string;
  charge: string;
}

const PersonFrom: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { navigate } = useNavigation();

  const { setFormPersonData } = useForm();

  const handlerOnSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('nome obrigatório'),
          email: Yup.string()
            .required('email obrigatório')
            .email('email invalido'),
          phone: Yup.string()
            .required('telefone obrigatório')
            .min(10, 'digite um telephone valido'),
          charge: Yup.string().required('selecione o tipo de carga'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setFormPersonData(data);
        navigate('ChargeForm');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
        console.log(err);
      }
    },
    [navigate],
  );

  return (
    <Container>
      <Header title="Cotação Rápida" isGoBack />

      <Form
        onSubmit={handlerOnSubmit}
        ref={formRef}
        style={{ paddingHorizontal: 16 }}
      >
        <Input
          icon="user"
          name="name"
          placeholder="digite seu nome"
          contentContainerStyle={{ marginTop: 42 }}
        />
        <Input
          icon="mail"
          name="email"
          placeholder="digite seu email"
          contentContainerStyle={{ marginTop: 32 }}
        />
        <Input
          icon="phone"
          name="phone"
          placeholder="digite seu telefone"
          keyboardType="numeric"
          contentContainerStyle={{ marginTop: 32 }}
        />
        <Select
          name="charge"
          optSelectedValue="opt1"
          opt1Name="fracionado"
          opt2Name="exclusivo"
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
