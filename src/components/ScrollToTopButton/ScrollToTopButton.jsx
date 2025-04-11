// ScrollToTopButton.js
import { useState, useEffect, useCallback } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';
import { Button } from './ScrollToTopButton.style';

const ScrollToTopButton = () => {
  const VISIBLE_SCROLL_TOP = 500;


  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const shouldShow = window.scrollY > VISIBLE_SCROLL_TOP;
    setIsVisible(shouldShow);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button onClick={scrollToTop} visible={isVisible}>
      <BsArrowUpCircle />
    </Button>
  );
};

export default ScrollToTopButton;
