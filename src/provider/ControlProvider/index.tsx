import React, { createContext, ReactNode, useState } from 'react';

type ContextProps = {
  controlStatus: boolean;
  navIndex: number;
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setControlStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setNavIndex: React.Dispatch<React.SetStateAction<number>>;
};

type Props = {
  children: ReactNode;
};

export const ControlContext = createContext<ContextProps>({
  controlStatus: true,
  navIndex: 0,
  showMenu: true,
  setShowMenu: () => {},
  setControlStatus: () => {},
  setNavIndex: () => {},
});

export const ControlProvider = ({ children }: Props) => {
  const [controlStatus, setControlStatus] = useState<boolean>(false);
  const [navIndex, setNavIndex] = useState<number>(0);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <ControlContext.Provider
      value={{
        controlStatus,
        navIndex,
        showMenu,
        setControlStatus,
        setNavIndex,
        setShowMenu,
      }}
    >
      {children}
    </ControlContext.Provider>
  );
};
