import React, { useContext } from 'react'
import { styleContext } from '../../context_providers/styleContext'
import { SettingsContainer, ThemeItemContainer } from './style'
import { settingContext } from'../../context_providers/settingContext'
const themes = require("./themeItems")

const ThemeItem = ({ name, newPrimaryColor, newSecondaryColor, newTertiaryColor, newFontColor }) => {
    const {primaryColor, tertiaryColor, setPrimaryColor, setSecondaryColor, setTertiaryColor, setFontColor} = useContext(styleContext)


    const handleChangeTheme = (newPrimaryColor, newSecondaryColor, newTertiaryColor, newFontColor) => {
        setPrimaryColor(newPrimaryColor)
        setSecondaryColor(newSecondaryColor)
        setTertiaryColor(newTertiaryColor)
        setFontColor(newFontColor)
    }

    return (
        <>
            <ThemeItemContainer $primaryColor={primaryColor} $tertiaryColor={tertiaryColor} onClick={() => {handleChangeTheme(newPrimaryColor, newSecondaryColor, newTertiaryColor, newFontColor)}}>
                {name}
            </ThemeItemContainer>
        </>
    )
}

function Settings() {
    const { primaryColor, tertiaryColor, secondaryColor } = useContext(styleContext)
    const {settingIsVisible } = useContext(settingContext)


    return (
        <>
            <SettingsContainer $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor} $primaryColor={primaryColor} $settingIsVisible={settingIsVisible}>
                {themes.map((theme, index) => {return <ThemeItem 
                key={index}
                name={theme.name} 
                newPrimaryColor={theme.primaryColor}
                newSecondaryColor={theme.secondaryColor}
                newTertiaryColor={theme.tertiaryColor}
                newFontColor={theme.fontColor}
                >
                </ThemeItem>})}
            </SettingsContainer>
        </>
    )
}

export default Settings