import React, { createContext, useState } from 'react'

export const settingContext = createContext()

function SettingContext ({ children }) {
    const [settingIsVisible, setSettingIsVisible] = useState(false)

    return (
        <settingContext.Provider value={{
                settingIsVisible ,setSettingIsVisible
            }}> 
            {children} 
        </settingContext.Provider>
    )
}

export default SettingContext