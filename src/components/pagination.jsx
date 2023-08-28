import { useEffect, useState } from "react";
import "../css/pagination.css";

function Pagination({pages}) {
  console.log(pages,'kjdnk,m')
  return (
    <div className="pagination">
      <div className="pageBtn active">1</div>
      {
        pages.map((page,i)=>{
            return <div className="pageBtn">{i+2}</div>
        })
      }
      <div className="pageBtn next">&gt;</div>
    </div>
  );
}

export default Pagination;
