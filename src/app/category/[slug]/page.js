'use client';
import { use} from "react";

export default function CategoryPage({ params }) {
    const resolvedParams = use(params);
    const categoryFilter = resolvedParams.slug;

    return (
        <div>
            <h1>Category: {categoryFilter}</h1>
        </div>
    )
}