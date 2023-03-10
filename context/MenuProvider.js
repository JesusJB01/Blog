import { createContext, useState } from 'react';


export const menuContext = createContext();

const MenuProvider = ({children}) => {

    const [ open, setOpen] = useState(false);

    return (
        <menuContext.Provider
            value={{
                open, setOpen

            
            }}
        >
            {children}
        </menuContext.Provider>
    )
}

export {MenuProvider};

export default menuContext;