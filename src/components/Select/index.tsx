import React, { useRef, useEffect, useState, useCallback } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useField } from '@unform/core';

import { Container, Button, ButtonTitle } from './styles';

interface InputProps {
  name: string;
  opt1Name: string;
  opt2Name: string;
  optSelectedValue: 'opt1' | 'opt2';
  contentContainerStyle?: StyleProp<ViewStyle>;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({
  name,
  opt1Name,
  opt2Name,
  optSelectedValue,
  contentContainerStyle,
}) => {
  const { registerField, defaultValue = 'fracionado', fieldName } = useField(
    name,
  );
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [optSelected, setOptSelected] = useState<string>(optSelectedValue);

  const handlerToggleSelected = useCallback((opt: string) => {
    setOptSelected(opt);
    inputValueRef.current.value = opt === 'opt1' ? 'fracionado' : 'exclusivo';
  }, []);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container style={contentContainerStyle}>
      <Button
        onPress={() => handlerToggleSelected('opt1')}
        optSelected={optSelected === 'opt1' && true}
        activeOpacity={0.8}
      >
        <ButtonTitle optSelected={optSelected === 'opt1' && true}>
          {opt1Name}
        </ButtonTitle>
      </Button>
      <Button
        onPress={() => handlerToggleSelected('opt2')}
        optSelected={optSelected === 'opt2' && true}
        activeOpacity={0.8}
      >
        <ButtonTitle optSelected={optSelected === 'opt2' && true}>
          {opt2Name}
        </ButtonTitle>
      </Button>
    </Container>
  );
};

export default Input;
