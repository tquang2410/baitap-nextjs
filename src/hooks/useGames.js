import {useEffect, useState} from "react";

export function useGames(pageSize, currentPage) {
    const [gamesList, setGamesList ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalCount, setTotalCount] = useState(0);
    useEffect(() => {
        fetch(`https://casino.api.stg.kansino.nl/v1/kansino/en/games?&pageSize=${pageSize}
        &pageNumber=${currentPage}
        `)
            // &gameCategories=${filteredCategory}
            .then(res => res.json())
            .then(data => {
                setGamesList(data.items);
                setTotalCount(data.count);
                setLoading(false);

            });
    }, [pageSize, currentPage]);
    return {
        gamesList,
        setGamesList,
        loading,
        setLoading,
        totalCount,
        setTotalCount
    };
}