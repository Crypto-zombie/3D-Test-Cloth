import React, { createContext, ReactNode, useState } from 'react';

type ContextProps = {
  controlStatus: boolean;
  navIndex: number;
  showMenu: boolean;
  scale: number;
  hsv: Array<number>;
  sh: Array<number>;
  degree: number;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setControlStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setNavIndex: React.Dispatch<React.SetStateAction<number>>;
  setScale: React.Dispatch<React.SetStateAction<number>>;
  setHSV: React.Dispatch<React.SetStateAction<Array<number>>>;
  setSH: React.Dispatch<React.SetStateAction<Array<number>>>;
  setDegree: React.Dispatch<React.SetStateAction<number>>;
};

type Props = {
  children: ReactNode;
};

export const ControlContext = createContext<ContextProps>({
  controlStatus: true,
  navIndex: 0,
  showMenu: true,
  scale: 0,
  hsv: [],
  sh: [],
  degree: 0,
  setDegree: () => {},
  setShowMenu: () => {},
  setControlStatus: () => {},
  setNavIndex: () => {},
  setScale: () => {},
  setHSV: () => {},
  setSH: () => {},
});

export const ControlProvider = ({ children }: Props) => {
  const [controlStatus, setControlStatus] = useState<boolean>(false);
  const [navIndex, setNavIndex] = useState<number>(0);
  const [showMenu, setShowMenu] = useState(false);
  const [scale, setScale] = useState<number>(100);
  const [hsv, setHSV] = useState<Array<number>>([225, 35, 80]);
  const [sh, setSH] = useState<Array<number>>([100, 100]);
  const [degree, setDegree] = useState<number>(0);
  return (
    <ControlContext.Provider
      value={{
        controlStatus,
        navIndex,
        showMenu,
        scale,
        hsv,
        sh,
        degree,
        setControlStatus,
        setNavIndex,
        setShowMenu,
        setScale,
        setHSV,
        setSH,
        setDegree,
      }}
    >
      {children}
    </ControlContext.Provider>
  );
};
