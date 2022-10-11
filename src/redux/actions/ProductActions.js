import { ActionContanstant } from "../constants/ActionContanstant";
export const setProducts = (products) => {
    return {
        type: ActionContanstant.SET_PRODUCTS,
        payload: products
    }
};

export const selectedProduct = (product) => {
    return {
        type: ActionContanstant.SELECTED_PRODUCT,
        payload: product
    };
}

export const removeSelectedProduct = () => {
    return {
        type: ActionContanstant.REMOVE_SELECTED_PRODUCT
    };
}
