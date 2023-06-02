import '../css/pagination.css'

function Pagination(){
    return (
        <div className="pagination">
            <div className="pageBtn active">1</div>
            <div className="pageBtn">2</div>
            <div className="pageBtn">3</div>
            <div className="pageBtn next">&gt;</div>
        </div>
    )
}

export default Pagination