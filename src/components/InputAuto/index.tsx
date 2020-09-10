import React, { useState, useEffect, useCallback, useRef } from 'react';
import { StyleProp, ViewStyle, TextInputProperties } from 'react-native';

import { useField } from '@unform/core';

import {
  Container,
  InputField,
  Icon,
  ItemContainer,
  ItemTitle,
} from './styles';

interface InputProps extends TextInputProperties {
  name: string;
  icon: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  inputDefaultValue?: string;
}

interface InputValueReference {
  value: string;
}

export interface DatasProps {
  id: string;
  name: string;
}

const InputAuto: React.FC<InputProps> = ({
  name,
  icon,
  contentContainerStyle,
  inputDefaultValue = '',
  ...rest
}) => {
  const {
    registerField,
    defaultValue = inputDefaultValue,
    fieldName,
    error,
  } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [focused, setFocused] = useState(false);

  const [data, setDatas] = useState<DatasProps[]>([
    {
      id: '0',
      name: 'são paulo',
    },
    {
      id: '1',
      name: 'rio de janeiro',
    },
    {
      id: '2',
      name: 'minas gerais',
    },
  ]);
  const [text, setText] = useState(defaultValue);

  const [filteredData, setFilteredData] = useState<DatasProps[]>([]);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  useEffect(() => {
    const newCities = data.map(city => {
      return {
        ...city,
        name: city.name.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
      };
    });
    setDatas(newCities);
  }, []);

  useEffect(() => {
    setFilteredData(text !== '' ? filterDatas() : []);
  }, [text]);

  const filterDatas = useCallback((): DatasProps[] => {
    const existsCityInData = data.find(city => city.name === text);

    if (!existsCityInData) {
      const newFilter = data.filter(city => city.name.includes(text));

      return newFilter;
    }
    return [];
  }, [text]);

  const handlerOnChangeText = (value: string) => {
    setText(value);
    inputValueRef.current.value = value;
  };

  const handlerOnPressFilteredData = useCallback((item: DatasProps) => {
    setText(item.name);
    inputValueRef.current.value = item.name;
    setFilteredData([]);
  }, []);

  return (
    <Container
      style={contentContainerStyle}
      focused={focused}
      isErrored={!!error}
    >
      <InputField
        data={filteredData}
        defaultValue={defaultValue}
        onChangeText={(value: string) => handlerOnChangeText(value)}
        value={text}
        inputContainerStyle={{ borderWidth: 0 }}
        listContainerStyle={{}}
        listStyle={{
          width: '100%',
          alignSelf: 'center',
          borderWidth: 0,
          backgroundColor: 'transparent',
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
        renderItem={({ item }) => (
          <ItemContainer onPress={() => handlerOnPressFilteredData(item)}>
            <ItemTitle>{item.name}</ItemTitle>
          </ItemContainer>
        )}
      />
      <Icon
        name={icon}
        size={25}
        color={focused || text !== '' ? '#00ADEF' : '#d1d1d1'}
      />
    </Container>
  );
};

export default InputAuto;
