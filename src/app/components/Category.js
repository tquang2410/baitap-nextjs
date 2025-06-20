import {useState} from "react";
import Loading from "@/app/components/Loading";
import { useRouter } from "next/navigation";

export default function Category({category}){
    const router = useRouter();
    const [openCategory, setOpenCategory] = useState(null);
    if (!category) {
        return (
          <Loading/>

        );
    }
    function handleCategory(categoryName)
    {
        setOpenCategory(openCategory === categoryName ? null : categoryName)
    }
    return (
        <div>
            <h3> ☃︎ Categories</h3>
            <div className="category-section">
                <button className="category-button"
                    onClick={() =>handleCategory('lobby')}>
                    Lobby ({category.lobby?.items?.length} items)
                    {openCategory === 'lobby' ? ' ▼' : ' ▶'}
                </button>
                {openCategory === 'lobby' && (
                    <div className="category-items" >
                        {category.lobby?.items?.map(item =>(
                            <div key={item.id}
                                 className="category-item"
                                 onClick={() => {
                                     // setFilteredCategory(item.categoryFilter);
                                     router.push(`/category/${item.categoryFilter}`);
                                 }}
                            >
                                {item.image?.original?.src && (
                                    <img
                                        src={item.image.original.src}
                                        alt={item.image.alt || item.name}
                                        width="16"
                                        height="16"
                                        className="category-icon"
                                    />
                                )}
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="category-section">
                <button className="category-button"
                    onClick={() =>handleCategory('liveLobby')}>
                    Live Lobby ({category.liveLobby?.items?.length} items)
                    {openCategory ==='liveLobby' ?' ▼' : ' ▶' }
                </button>
                {openCategory === 'liveLobby' && (
                    <div className="category-items">
                        {category.liveLobby?.items?.map(item =>(
                            <div className="category-item"
                                 key={item.id}
                                 onClick={() => {
                                     // setFilteredCategory(item.categoryFilter);
                                     router.push(`/category/${item.categoryFilter}`);
                                 }}
                            >
                                {item.image?.original?.src && (
                                    <img
                                        src={item.image.original.src}
                                        alt={item.image.alt || item.name}
                                        width="16"
                                        height="16"
                                        className="category-icon"
                                    />
                                )}
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}