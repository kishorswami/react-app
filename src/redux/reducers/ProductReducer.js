import { ActionContanstant } from '../constants/ActionContanstant';
const initalState = {
    products: []
};
export const ProductReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case ActionContanstant.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionContanstant.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionContanstant.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}
