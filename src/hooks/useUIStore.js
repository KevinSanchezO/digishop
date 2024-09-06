import { useDispatch, useSelector } from "react-redux";
import { handleOpenHistory, handleShoppingCart } from "../store";

export const useUIStore = () => {
    
    const {
        isShoppingCartOpen,
        isHistoryOpen,
    } = useSelector(state => state.ui)
    
    const dispatch = useDispatch()

    const handleShoppingCartSideBar = () => {
        dispatch(handleShoppingCart(!isShoppingCartOpen));
        
        if (isHistoryOpen) {
            dispatch(handleOpenHistory(false));
        };
    }

    const handleHistorySideBar = () => {
        dispatch(handleOpenHistory(!isHistoryOpen));

        if (isShoppingCartOpen) {
            dispatch(handleShoppingCart(false));
        };
    }

    return {
        //* Properties
        isShoppingCartOpen,
        isHistoryOpen,
        //* Methods
        handleShoppingCartSideBar,
        handleHistorySideBar,
    }
}