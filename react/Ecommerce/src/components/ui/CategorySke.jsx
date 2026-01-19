import React from "react";
import { Skeleton } from "@mui/material";

function CategorySke() {
    return (
        <div className="w-64 space-y-6">
            {/* Filter Title */}
            <Skeleton variant="text" width={120} height={35} />

            {/* Category Section */}
            <div className="space-y-3">
                <Skeleton variant="text" width={100} />
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex items-center gap-3">
                        <Skeleton variant="rounded" width={20} height={20} />
                        <Skeleton variant="text" width={120} height={20}/>
                    </div>
                ))}
            </div>

            {/* Brand Section */}
            <div className="space-y-3">
                <Skeleton variant="text" width={80} />
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="flex items-center gap-3">
                        <Skeleton variant="rounded" width={20} height={20} />
                        <Skeleton variant="text" width={120} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategorySke;
