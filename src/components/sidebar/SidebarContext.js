import React, { useContext, useState, useReducer } from 'react';
import { SCHULTE, WEDGE, LANDOLT } from '../../constants';
import data from '../../api';

const SidebarContext = React.createContext();

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

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

  const [menu, setMenu] = useState(data);

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
