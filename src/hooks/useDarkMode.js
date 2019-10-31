import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, value) => {
    console.log(setValues)
    const [values, setValues] = useLocalStorage(key, value)
    const body = document.getElementsByTagName('body')
  
    useEffect (() => {
        if (values === true) {
            return (body[0].classList.add("dark-mode"));
          }
        return (body[0].classList.remove("dark-mode"))
      },[values]);
    
      return [values, setValues];
    
  };