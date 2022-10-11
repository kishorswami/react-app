import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import axios from 'axios';
import { setProducts } from './../redux/actions/ProductActions';

const ProductListing = () => {
    const dispatch = useDispatch();
    const fetchAllProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch(error => console.log(error));
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchAllProduct();
    }, []);

    return (
        <>
            <div className='ui grid container default-margin'>
                <ProductItem />
            </div>
        </>
    )
}

export default ProductListing;
