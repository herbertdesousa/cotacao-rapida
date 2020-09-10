import React from 'react';

import { DestinationProvider } from './destination';
import { FormProvider } from './form';

const AppProvider: React.FC = ({ children }) => (
  <DestinationProvider>
    <FormProvider>{children}</FormProvider>
  </DestinationProvider>
);

export default AppProvider;
