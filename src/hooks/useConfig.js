import { useState, useEffect } from 'react';

export function useConfig() {
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://casino.api.stg.kansino.nl/v1/kansino/en/config')
            .then(res => res.json())
            .then(data => {
                setCategory(data.menu);
                setLoading(false);
            });
    }, []);

    return { category, loading };
}