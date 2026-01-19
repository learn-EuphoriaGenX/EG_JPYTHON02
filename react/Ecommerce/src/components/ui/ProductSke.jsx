import React from "react";
import { Skeleton, Card, CardContent } from "@mui/material";

function ProductSke() {
    return (
        <Card className="shadow-md rounded-xl">
            {/* Image Skeleton */}
            <Skeleton
                variant="rectangular"
                height={180}
                className="rounded-t-xl"
            />

            <CardContent className="space-y-3">
                {/* Title */}
                <Skeleton variant="text" height={25} />

                {/* Category */}
                <Skeleton variant="text" width="60%" />

                {/* Rating */}
                <Skeleton variant="text" width="40%" />

                {/* Price */}
                <Skeleton variant="text" width="50%" height={30} />

                {/* Buttons */}
                <div className="flex gap-3 mt-3">
                    <Skeleton variant="rectangular" height={36} width="100%" />
                    <Skeleton variant="rectangular" height={36} width="100%" />
                </div>
            </CardContent>
        </Card>
    );
}

export default ProductSke;
