import React, { useRef, useEffect, useState } from 'react';
import { TextInputProperties, StyleProp, ViewStyle } from 'react-native';
import { useField } from '@unform/core';

import { Container, InputField } from './styles';

interface InputProps extends TextInputProperties {
  name: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({
  name,
  contentContainerStyle,
  ...rest
}) => {
  // const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [focused, setFocused] = useState(false);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={contentContainerStyle}
      isErrored={!!error}
      focused={focused}
    >
      <InputField
        // ref={inputElementRef}
        onChangeText={text => {
          inputValueRef.current.value = text;
        }}
        multiline
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        defaultValue={defaultValue}
        placeholder="place holder"
        {...rest}
      />
    </Container>
  );
};

export default Input;
