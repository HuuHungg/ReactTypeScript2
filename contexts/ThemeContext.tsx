import { PropTypes } from "@mui/material";
import { createContext, ReactNode, useState } from "react";

interface ThemeContextProps {
    children: ReactNode
}

interface ThemeContextDefault {
    theme: PropTypes.Color,
}

const themeContextDefaultData = {
    theme: 'primary' as PropTypes.Color,
}

export const ThemeContext = createContext<ThemeContextDefault>(
    themeContextDefaultData
)

const ThemeContextProvider = ({children}: ThemeContextProps) => {
    const [theme, setTheme] = useState<PropTypes.Color>(
        themeContextDefaultData.theme
    )
    
    const toggleTheme = (theme: PropTypes.Color) => setTheme(theme)

    const themeContextDynamicData = {theme, toggleTheme}
    
    return <ThemeContext.Provider value={themeContextDynamicData}>
        {children}
    </ThemeContext.Provider>
}
 
export default ThemeContextProvider