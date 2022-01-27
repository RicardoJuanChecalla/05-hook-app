import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import './memorize.css';

export const CallBackHook = () => {
  const [ counter, setCounter ] = useState(10);
  // const increment = ()=>{
  //     setCounter(counter + 1);
  // }
  const increment = useCallback((factor) => {
    setCounter( c => c + factor );
  }, [setCounter]);

  // useLayoutEffect(() => {
  //   first;
  //   return () => {
  //     second;
  //   };
  // }, [increment]);

  return (<div>
      <h1>useCallBack Hook {counter} </h1>
      <hr/>
      <ShowIncrement increment={increment}/>
  </div>);
}