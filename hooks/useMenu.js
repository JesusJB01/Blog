import { useContext} from 'react'
import {menuContext} from '@/context/MenuProvider';

const useMenu = () => {
    return useContext(menuContext)
}

export default useMenu;