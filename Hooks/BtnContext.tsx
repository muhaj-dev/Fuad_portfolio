"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ButtonContextType {
  buttonState: boolean;
  veiwAs: boolean;
  toggleButton: () => void;
  toggleView: () => void;
  viewUx: () => void;
  viewCt: () => void;
}

export const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

interface ButtonProviderProps {
  children: ReactNode;
}

export const ButtonProvider: React.FC<ButtonProviderProps> = ({ children }) => {
  const [buttonState, setButtonState] = useState(true);
  const [veiwAs, setVeiwAs] = useState(true);

  const toggleButton = () => {
    setButtonState(prevState => !prevState);
  };

  const toggleView = () => {
    setVeiwAs(prevState => !prevState);
  };
  const viewUx = () => {
    setVeiwAs(false);
  };
  const viewCt = () => {
    setVeiwAs(true);
  };

  const contextValue: ButtonContextType = {
    buttonState,
    toggleButton,
    veiwAs,
    toggleView,
    viewUx,
    viewCt,
  };

  return (
    <ButtonContext.Provider value={contextValue}>
      {children}
    </ButtonContext.Provider>
  );
};