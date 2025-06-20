export default function PageSizeSelector({pageSize,setPageSize}){
    return(
        <div className="pagesize-selector">
            <label>Games per page:</label>
            <select value={pageSize} onChange={(e)=> setPageSize(Number(e.target.value))}>
                <option value={6}>6 games</option>
                <option value={15}>15 games</option>
                <option value={30}>30 games</option>
            </select>
        </div>
    )
}