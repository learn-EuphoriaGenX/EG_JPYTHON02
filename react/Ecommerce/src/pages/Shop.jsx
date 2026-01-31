import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import {
    Checkbox,
    FormControlLabel,
    Pagination,
    Card,
    CardContent,
    Typography
} from "@mui/material";
import ProductCard from '../components/ui/ProductCard';
import CategorySke from '../components/ui/CategorySke';
import ProductSke from '../components/ui/ProductSke';

const ITEMS_PER_PAGE = 10;

function Shop() {

    const [url, setUrl] = useState('https://dummyjson.com/products')

    const [totalProducts, setTotalProducts] = useState(0)
    const [products, setProducts] = useState([])
    const [skip, setSkip] = useState(0)
    const [currPage, setCurrPage] = useState(1)
    const [categories, setCategories] = useState([])

    let [catLoading, setCatLoading] = useState(false)
    let [prodLoading, setProdLoading] = useState(false)

    let fetchAllProducts = async () => {
        try {
            setProdLoading(true)
            let res = await axios.get(`${url}?limit=${ITEMS_PER_PAGE}&skip=${skip}`)
            setProducts(res.data.products)
            // setProducts(res.data)
            setTotalProducts(res.data.total);
        } catch (error) {
            toast.error("Internal Server Error")
        } finally {
            setProdLoading(false)
        }

    }

    let fetchAllCategories = async () => {
        try {
            setCatLoading(true)
            let res = await axios.get(`https://dummyjson.com/products/categories`)
            setCategories(res.data)
        } catch (error) {
            toast.error("Internal Server Error")
        } finally {
            setCatLoading(false)
        }
    }


    let scrollToTop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        fetchAllProducts()
        scrollToTop()
    }, [skip, url])
    useEffect(() => {
        fetchAllCategories()
    }, [])



    return (
        <div className="flex px-8 py-12 gap-8">

            {/* LEFT FILTER PANEL */}
            <div className="w-64">
                <h2 className="text-xl font-bold mb-4">Filters</h2>

                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Category</h3>

                    {catLoading && <CategorySke />}


                    {categories.map(cat => (
                        <FormControlLabel
                            key={cat.slug}
                            control={
                                <Checkbox
                                    // checked={categoryFilter.includes(cat)}
                                    onChange={() => setUrl(cat.url)}
                                />
                            }
                            label={cat.name}
                        />
                    ))}
                </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="flex-1">
                <h1 className="text-4xl font-bold mb-8">Our Products</h1>

                <div className="grid md:grid-cols-3 gap-6">
                    {prodLoading && [1, "hello", 3, 4, 5, 6].map(e => <ProductSke />)}
                    {products.map(product => (
                        <ProductCard product={product} />
                    ))}
                </div>

                {/* PAGINATION */}
                <div className="flex justify-center mt-8">
                    <Pagination
                        count={Math.ceil(totalProducts / ITEMS_PER_PAGE)}
                        page={currPage}
                        onChange={(e, value) => { setCurrPage(value); setSkip((value * ITEMS_PER_PAGE) - ITEMS_PER_PAGE) }}
                        color="standard"
                    />
                </div>
            </div>
        </div>
    );
}

export default Shop;