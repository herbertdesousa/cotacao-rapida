import React, { createContext, useContext, useState, useCallback } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  charge: string;

  from: string;
  to: string;
  text: string;
}

interface FormContextData {
  formData: FormData;
  setFormPersonData({
    name,
    email,
    phone,
    charge,
  }: Omit<FormData, 'from' | 'to' | 'text'>): void;
  setFormChargeData({
    from,
    to,
    text,
  }: Omit<FormData, 'name' | 'email' | 'phone' | 'charge'>): void;
}

const FormContext = createContext<FormContextData>({} as FormContextData);

const FormProvider: React.FC = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({} as FormData);

  const setFormPersonData = useCallback(
    ({
      name,
      email,
      phone,
      charge,
    }: Omit<FormData, 'from' | 'to' | 'text'>) => {
      setFormData({
        name,
        email,
        phone,
        charge,
        to: '',
        from: '',
        text: '',
      });
    },
    [],
  );

  const setFormChargeData = useCallback(
    ({
      from,
      to,
      text,
    }: Omit<FormData, 'name' | 'email' | 'phone' | 'charge'>) => {
      setFormData({ ...formData, to, from, text });
    },
    [],
  );

  return (
    <FormContext.Provider
      value={{ formData, setFormPersonData, setFormChargeData }}
    >
      {children}
    </FormContext.Provider>
  );
};

function useForm(): FormContextData {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useForm must be used within an FormProvider');
  }

  return context;
}

export { FormProvider, useForm };
