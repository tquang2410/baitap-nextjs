'use client'
import {useState, useEffect, useMemo} from "react";
import SearchBar from '@/app/components/SearchBar'
import PageSizeSelector from "@/app/components/PageSizeSelector";
import Sidebar from "@/app/components/Sidebar";
import GameList from "@/app/components/GameList";
import Category from "@/app/components/Category";
import {useGames} from "@/hooks/useGames";
import { useConfig } from "@/hooks/useConfig";

export default function GamesPage() {

  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const { gamesList, loading, totalCount } = useGames(pageSize, currentPage);
    const { category } = useConfig();
  const totalPages = Math.ceil(totalCount / pageSize);


    return (
        <div className="page-container">
            <Sidebar>
                <SearchBar gamesList={gamesList} currentPage={currentPage} />
                <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
                <Category category={category}
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