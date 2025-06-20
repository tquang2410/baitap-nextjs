export default function GameCard({game}){
    return (
        <div className="game-card">
            <div className="game-card-header">
                <img
                    src={game.media.thumbnail.small.src}
                    alt={game.meta.name}
                    width={80}
                    height={80}
                    className="game-card-image"
                />
                <div className="game-card-info">
                    <h3 className="game-card-title">{game.meta.name}</h3>
                    <p className="game-detail">
                        <span>Max bet: </span>
                        <span className="game-maxbet">${game.game.maxbet}</span>
                    </p>
                    <p className="game-detail">
                        <span>Provider: </span>
                        <span className="game-provider">{game.gameProvider.name}</span>
                    </p>
                    <p className="game-detail">
                        <span>Category: </span>
                        <span> {game.meta.category}</span>
                    </p>
                    <p className="game-detail">
                        <span>Collections: </span>
                        {/*<span> {game.meta.collections.join(', ')}</span>*/}
                        <span className="game-collections">
                            {game.meta.collections.length > 0 ? game.meta.collections.join(', ') : 'None'}
                        </span>
                    </p>

                </div>
            </div>
        </div>
    );
}