'use client'

import { createContext, useContext } from 'react';

export const AsyncContext = createContext<Promise<any> | null>(null);

export const AsyncProvider = ({ children, promise}: { children: React.ReactNode, promise: Promise<any>}) => {
  return <AsyncContext.Provider value={promise}>{children}</AsyncContext.Provider>;
}

export const useAsyncContext = () => {
  const context = useContext(AsyncContext);
  if (!context) {
    throw new Error('useAsyncContext must be used within a AsyncProvider');
  }
  return context;
}