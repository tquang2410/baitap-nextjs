export default function Pagination({currentPage, totalPages, onPageChange}){
    return(
        <div className="pagination">
            <button
                className="pagination-button"
                disabled={currentPage ===1}
                onClick={()=> onPageChange(currentPage - 1)}
            >Previous</button>
            <span className="pagination-info">
                Page {currentPage} of {totalPages}
            </span>
            <button
                className="pagination-button"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >Next
            </button>
        </div>
    )
}