'use client'
import {useState, useEffect, useMemo} from "react";
import Image from 'next/image';
import SearchBar from '@/app/components/SearchBar'
import PageSizeSelector from "@/app/components/PageSizeSelector";
import Sidebar from "@/app/components/Sidebar";
import GameCard from "@/app/components/GameCard"
import Pagination from "@/app/components/Pagination";
import GameList from "@/app/components/GameList";
import Category from "@/app/components/Category";
export default function GamesPage() {
    // State của main content
  const [gamesList, setGamesList ] = useState([]);
  const [loading, setLoading] = useState(true);

  // State của page
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

    // State của category
    const [category,setCategory] = useState(true);
    const [filteredCategory, setFilteredCategory] = useState('');

  const totalPages = Math.ceil(totalCount / pageSize);
    useEffect(() => {

            fetch(`https://casino.api.stg.kansino.nl/v1/kansino/en/config`)
                .then(res => res.json())
                .then(data => {
                    setCategory(data.menu);
                    // console.log( data.menu);
                });
    }, [])
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
    }, [pageSize, currentPage, filteredCategory]);

    return (
        <div className="page-container">
            <Sidebar>
                <SearchBar gamesList={gamesList} currentPage={currentPage} />
                <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
                <Category category={category}
                          setFilteredCategory={setFilteredCategory}
                />
            </Sidebar>

            <div className="main-content">
                <h1>🎮 Casino Games</h1>
                <GameList
                    games={gamesList}
                    loading={loading}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
}