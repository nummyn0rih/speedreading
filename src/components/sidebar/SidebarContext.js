import React, { useContext, useState, useReducer } from 'react';

const SidebarContext = React.createContext();

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

export const SCHULTE = 'schulteTables';
export const WEDGE = 'wedgeTables';
export const LANDOLT = 'landoltRings';

const reducer = (state, action) => {
  switch (action.type) {
    case SCHULTE:
      return { ...state, active: SCHULTE };
    case WEDGE:
      return { ...state, active: WEDGE };
    case LANDOLT:
      return { ...state, active: LANDOLT };
    default:
      return state;
  }
};

export const SidebarProvider = ({ children }) => {
  const [sidebar, setSidebarVisible] = useState(false);
  const toggle = () => setSidebarVisible((prev) => !prev);

  const [state, dispatch] = useReducer(reducer, { active: SCHULTE });
  const showSchulte = () => dispatch({ type: SCHULTE });
  const showWedge = () => dispatch({ type: WEDGE });
  const showLandolt = () => dispatch({ type: LANDOLT });

  return (
    <SidebarContext.Provider
      value={{
        visible: sidebar,
        toggle,
        activeTab: state.active,
        showSchulte,
        showWedge,
        showLandolt,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
