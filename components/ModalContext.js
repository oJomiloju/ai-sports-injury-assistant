// components/ModalContext.js
"use client";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modalType, setModalType] = useState(null); // 'login' or 'signup'

  return (
    <ModalContext.Provider value={{ modalType, setModalType }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
