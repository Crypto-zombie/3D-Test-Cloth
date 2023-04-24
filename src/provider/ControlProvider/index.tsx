import React, { createContext, ReactNode, useState } from 'react';

type ContextProps = {
  controlStatus: boolean;
  scrollState: number;
  navIndex: number;
  cloudVisiblity: boolean;
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setControlStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setScrollState: React.Dispatch<React.SetStateAction<number>>;
  setNavIndex: React.Dispatch<React.SetStateAction<number>>;
  setVisiblity: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  children: ReactNode;
};

export const ControlContext = createContext<ContextProps>({
  controlStatus: true,
  scrollState: 0,
  navIndex: 0,
  cloudVisiblity: true,
  showMenu: true,
  setShowMenu: () => {},
  setScrollState: () => {},
  setControlStatus: () => {},
  setNavIndex: () => {},
  setVisiblity: () => {},
});

export const ControlProvider = ({ children }: Props) => {
  const [controlStatus, setControlStatus] = useState<boolean>(false);
  const [cloudVisiblity, setVisiblity] = useState<boolean>(true);
  const [scrollState, setScrollState] = useState<number>(0);
  const [navIndex, setNavIndex] = useState<number>(0);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <ControlContext.Provider
      value={{
        controlStatus,
        scrollState,
        navIndex,
        cloudVisiblity,
        showMenu,
        setControlStatus,
        setScrollState,
        setNavIndex,
        setVisiblity,
        setShowMenu,
      }}
    >
      {children}
    </ControlContext.Provider>
  );
};
