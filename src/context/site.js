import React, { useState } from 'react';

export const SiteContext = React.createContext();

function SettingsProvider(props) {
  const [taskNumber, setTaskNumber ] = useState(3); //Hard code to 5 tasks

  const state = {
  taskNumber,
  changeTaskNumber: setTaskNumber
  }

  return (
    <SiteContext.Provider value={state}>
      {props.children }
    </SiteContext.Provider>
  )
}

export default SettingsProvider;