import React from 'react'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Chip,
    Rating
} from "@mui/material";


function ProductCard({ product }) {
    return (
        <Card
            key={product.id}
            className="shadow-md hover:shadow-xl transition duration-300 rounded-xl"
        >
            {/* IMAGE */}
            <div className="relative">
                <CardMedia
                    component="img"
                    height="180"
                    image={product.thumbnail || product.images?.[0]}
                    alt={product.title}
                    className="object-contain p-4 bg-gray-50"
                />

                {/* DISCOUNT */}
                {product.discountPercentage && (
                    <Chip
                        label={`${product.discountPercentage.toFixed(0)}% OFF`}
                        color="success"
                        size="small"
                        className="absolute top-3 left-3 font-bold"
                    />
                )}
            </div>

            <CardContent className="space-y-2">
                {/* TITLE */}
                <Typography
                    variant="subtitle1"
                    className="font-semibold line-clamp-1"
                >
                    {product.title}
                </Typography>

                {/* BRAND + CATEGORY */}
                <Typography
                    variant="body2"
                    color="text.secondary"
                    className="capitalize"
                >
                    {product.category} • {product.brand}
                </Typography>

                {/* RATING */}
                <div className="flex items-center gap-2">
                    <Rating
                        value={product.rating}
                        precision={0.5}
                        size="small"
                        readOnly
                    />
                    <Typography variant="body2" color="text.secondary">
                        ({product.rating})
                    </Typography>
                </div>

                {/* PRICE */}
                <div className="flex items-center gap-3">
                    <Typography variant="h6" className="font-bold text-green-700">
                        ₹{product.price}
                    </Typography>

                    <Typography
                        variant="body2"
                        className="text-green-600 font-medium"
                    >
                        {product.availabilityStatus}
                    </Typography>
                </div>

                {/* STOCK INFO */}
                <Typography variant="caption" color="text.secondary">
                    Only {product.stock} left
                </Typography>

                {/* ACTIONS */}
                <div className="flex gap-3 mt-3">
                    <Button
                        variant="outlined"
                        size="small"
                        fullWidth
                    >
                        View
                    </Button>

                    <Button
                        variant="contained"
                        size="small"
                        fullWidth
                        disabled={product.stock === 0}
                    >
                        Add to Cart
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductCard