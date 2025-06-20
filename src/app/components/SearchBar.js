import {useEffect, useState} from "react";

export default function SearchBar({gamesList, currentPage}){
    // Search State
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    useEffect(() => {
        if (searchTerm.length > 0){
            const filtered = gamesList.filter(game =>
                game.meta.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSuggestions(filtered.slice(0,5));
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false)
        }
    }, [searchTerm, gamesList]);
    //Reset input trong phần search lúc chuyển trang
    useEffect(() => {
        setSearchTerm('');
        setShowSuggestions(false);
    }, [currentPage]);
    return (
        <div>
            <div style={{ position: 'relative' }} className="search-container">
                <label>Search:</label>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                    placeholder="Enter game name"
                    className="text-black"
                />
                {showSuggestions && (
                    <div className="search-suggestions">
                        {suggestions.map(game => (
                            <div
                                key={game.id}
                                className="search-suggestion-item"
                                onClick={() => {
                                    console.log('Clicked:', game.meta.name);
                                    setShowSuggestions(false);
                                    setSearchTerm('');
                                }}
                            >
                                <img
                                    src={game.media.thumbnail.small.src}
                                    alt={game.meta.name}
                                    width="40"
                                    height="40"
                                    className="search-suggestion-image"
                                />
                                <div>
                                    <div className="search-suggestion-name">{game.meta.name}</div>
                                    <div className="search-suggestion-provider">{game.gameProvider.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}