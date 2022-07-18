import './App.css';
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRandomUser } from './hooks/userandomUser';

function App() {

  const [value, setValue] = useState(5);

  // const memo = useMemo(()=>{
  //   return false;
  // }, [value])

  //const ref = useRef(null);

  // const fn = useCallback(()=>{
  //   return false;
  // },[]);
  const { state } = useRandomUser();

  const renderEmail = () => {
    if(!state) return null;
    return state.email;
  };
  
  return (
    <div className="App">
        <h1 > {value} Start</h1>
        <button >Button</button>
        <h1>{renderEmail()}</h1>
    </div>
  );
}

export default App;
