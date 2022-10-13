import { useWindowSize } from './useWindowSize'

export const useDevice = () => {
  const [width] = useWindowSize();
  const isMobile = width > 0 && width <= 1024;

  return { width, isMobile };
}