import GameCard from "@/app/components/GameCard";
import Pagination from "@/app/components/Pagination";
import Loading from "@/app/components/Loading";

export default function GamesList({games, loading, currentPage, totalPages, onPageChange}) {

    if (loading) {
        return (
            <div>
               <Loading/>
            </div>
        );
    }

    return (
        <div>
            <div className="games-container">
                {games.map((game) => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </div>
    );
}