import { useContext, useEffect, useRef, useState } from 'react';
import Hamburger from 'hamburger-react';
import Button from 'components/Button';
import Rotate from 'assets/img/color-sample.png';
import Shadow from 'assets/img/magic-wand.png';
import HSV from 'assets/img/paint-brush.png';
import Expand from 'assets/img/ruler.png';
import { ControlContext } from 'provider/ControlProvider';
import gsap from 'gsap';

const list = [Rotate, Shadow, HSV, Expand];

export default function Navigation() {
  const [isOpen, setOpen] = useState(true);
  const { navIndex, setNavIndex } = useContext(ControlContext);
  const navigationRef = useRef<any>();

  const slideInEffect = () => {
    gsap.to(navigationRef.current, {
      duration: 0.8,
      ease: 'power1.out',
      opacity: 1,
    });
  };
  const slideOutEffect = () => {
    gsap.to(navigationRef.current, {
      duration: 0.8,
      ease: 'power1.out',
      opacity: 0,
    });
  };
  // console.log('document.body.offsetWidth', document.body.offsetWidth);
  useEffect(() => {
    if (isOpen) slideInEffect();
    else {
      setNavIndex(-1);
      slideOutEffect();
    }
  }, [isOpen]);

  return (
    <div className='fixed bottom-0 left-0 w-screen pointer-events-auto'>
      <button className='absolute bottom-12 left-6 md:left-12 sm:p-2 md:p-3 rounded-full bg-blue-400 drop-shadow-md shadow-md'>
        <Hamburger
          color='white'
          toggled={isOpen}
          size={document.body.offsetWidth > 480 ? 30 : 12}
          toggle={setOpen}
        />
      </button>
      <div
        ref={navigationRef}
        className='absolute bottom-3 md:bottom-12 left-1/2 -translate-x-1/2  px-4 md:px-9 rounded-r-full rounded-l-full flex justify-between items-end space-x-2 md:space-x-8'
      >
        {list.map((item, index) => (
          <Button
            key={index}
            active={index === navIndex ? true : false}
            onClick={() => setNavIndex(index)}
            disabled={false}
          >
            <img
              src={item}
              alt={'Loading...'}
              className={'p-2 md:p-6 opacity-100 select-none'}
            />
          </Button>
        ))}
      </div>
    </div>
  );
}
