import React, { createContext, useContext, useReducer } from "react";

// Definir el contexto
const HistorialContext = createContext();

// Definir el estado inicial del historial
const initialState = [];

// Definir las acciones (puedes agregar más según tus necesidades)
const ADD_CONSULTA = "ADD_CONSULTA";
const CLEAR_HISTORIAL = "CLEAR_HISTORIAL";

// Reductor para gestionar el historial
function historialReducer(state, action) {
  switch (action.type) {
    case ADD_CONSULTA:
      // Agregar una consulta al historial
      return [...state, action.payload];

    case CLEAR_HISTORIAL:
      // Limpiar todo el historial
      return [];

    default:
      return state;
  }
}

// Definir un proveedor personalizado
export function HistorialProvider({ children }) {
  const [historial, dispatch] = useReducer(historialReducer, initialState);

  return (
    <HistorialContext.Provider value={{ historial, dispatch }}>
      {children}
    </HistorialContext.Provider>
  );
}

// Definir una función para usar el contexto
export function useHistorial() {
  return useContext(HistorialContext);
}

export default HistorialContext;
