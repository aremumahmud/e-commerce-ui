import { useEffect, useState } from "react";
import "../css/pagination.css";

function Pagination({pages,setPage,activeIndex}) {
  //console.log(pages,'kjdnk,m')
  return (
    <div className="pagination">
      {/* <div className="pageBtn active" onClick={setPage(0)}>1</div> */}
      {
        pages.map((page,i)=>{
         // console.log(activeIndex,i)
            return <div key={i} className={"pageBtn "+ (activeIndex === i?'active':'')} onClick={()=>setPage(i)}>{i+1}</div>
        })
      }
      {/* <div className="pageBtn next">&gt;</div> */}
    </div>
  );
}

export default Pagination;
