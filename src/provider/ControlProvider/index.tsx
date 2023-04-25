import React, { createContext, ReactNode, useState } from 'react';

type ContextProps = {
  controlStatus: boolean;
  navIndex: number;
  showMenu: boolean;
  scale: number;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setControlStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setNavIndex: React.Dispatch<React.SetStateAction<number>>;
  setScale: React.Dispatch<React.SetStateAction<number>>;
};

type Props = {
  children: ReactNode;
};

export const ControlContext = createContext<ContextProps>({
  controlStatus: true,
  navIndex: 0,
  showMenu: true,
  scale: 0,
  setShowMenu: () => {},
  setControlStatus: () => {},
  setNavIndex: () => {},
  setScale: () => {},
});

export const ControlProvider = ({ children }: Props) => {
  const [controlStatus, setControlStatus] = useState<boolean>(false);
  const [navIndex, setNavIndex] = useState<number>(0);
  const [showMenu, setShowMenu] = useState(false);
  const [scale, setScale] = useState<number>(100);
  return (
    <ControlContext.Provider
      value={{
        controlStatus,
        navIndex,
        showMenu,
        scale,
        setControlStatus,
        setNavIndex,
        setShowMenu,
        setScale,
      }}
    >
      {children}
    </ControlContext.Provider>
  );
};
