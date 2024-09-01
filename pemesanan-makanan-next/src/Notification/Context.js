import { createContext, useState } from 'react';

import Manajemen_list from '../pages/manajemen/manajemen_list';
const appContext = createContext();
function Context() {
  const [value,setValue] = useState('');
  const updateValue = (data) =>{
    setValue(data)
  }
  return (
    <appContext.Provider value={{value,updateValue}}>
      <Manajemen_list/>
    </appContext.Provider>
  );
}

export default Context;
export {appContext}