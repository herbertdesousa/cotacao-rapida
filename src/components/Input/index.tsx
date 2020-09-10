import React, { useRef, useEffect, useState } from 'react';
import { TextInputProperties, StyleProp, ViewStyle } from 'react-native';
import { useField } from '@unform/core';

import { Container, InputField, Icon } from './styles';

interface InputProps extends TextInputProperties {
  name: string;
  icon: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({
  name,
  icon,
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
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        defaultValue={defaultValue}
        placeholder="place holder"
        {...rest}
      />
      <Icon
        name={icon}
        size={25}
        color={
          focused || inputValueRef.current.value !== '' ? '#00ADEF' : '#d1d1d1'
        }
      />
    </Container>
  );
};

export default Input;
