import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface RouteDestination {
  from: string;
  to: string;
}

interface DestinationContextData {
  destination: RouteDestination;
  loading: boolean;
  setDestination(route: RouteDestination): Promise<void>;
  removeDestination(): Promise<void>;
}

const DestinationContext = createContext<DestinationContextData>(
  {} as DestinationContextData,
);

const DestinationProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<RouteDestination>({} as RouteDestination);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDestination(): Promise<void> {
      const [from, to] = await AsyncStorage.multiGet(['@from', '@to']);

      if (from[1] && to[1]) {
        setData({ from: from[1], to: to[1] });
      }

      setLoading(false);
    }

    getDestination();
  }, []);

  const setDestination = useCallback(async ({ from, to }) => {
    await AsyncStorage.multiSet([
      ['@from', from],
      ['@to', to],
    ]);

    setData({ from, to });
  }, []);

  const removeDestination = useCallback(async () => {
    await AsyncStorage.multiRemove(['@from', '@to']);

    setData({} as RouteDestination);
  }, []);

  return (
    <DestinationContext.Provider
      value={{ destination: data, loading, setDestination, removeDestination }}
    >
      {children}
    </DestinationContext.Provider>
  );
};

function useDestination(): DestinationContextData {
  const context = useContext(DestinationContext);

  if (!context) {
    throw new Error(
      'useDestination must be used within an DestinationProvider',
    );
  }

  return context;
}

export { DestinationProvider, useDestination };
