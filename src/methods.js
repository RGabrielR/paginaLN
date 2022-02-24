import { useCallback, useEffect, useState } from "react";
import axios from 'axios';
const breakpoints = {
  320: 'S',
  768: 'M',
  1920: 'L'
}

  export const useBreakpoint = (size) => {

    const [breakpoint, setBreakPoint] = useState(undefined)
    useEffect(()=> {
        if (0 < size && size < 768) {
          setBreakPoint(breakpoints[320])
        }
        if (768 <= size && size < 1920) {
          setBreakPoint(breakpoints[768])
        }
        if (size >= 1920) {
          setBreakPoint(breakpoints[1920])
        }
    }, [size])
  
    return breakpoint
  };

  export const useScreenSize = () => {
    const [size, setSize] = useState(undefined)

    function handleResize() { setSize(window.innerWidth) }
  
    useEffect(()=>{
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  
    return size
  };
