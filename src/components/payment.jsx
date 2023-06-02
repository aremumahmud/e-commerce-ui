import '../css/success.css'
function Payment({setPage}){
    return(
        <div class="center_me">
    <div class="split_me">
        <div class="image">
            <img src="/imgs/undraw_successful_purchase_re_mpig.svg" />
        </div>
        <div class="text">
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nobis fugit adipisci veniam provident architecto sed ad hic deleniti magni, dignissimos cumque magnam commodi ipsa dicta saepe, dolor dolorum similique.
            </p>
            <div onClick={()=>setPage('home')} class="btn_me">
                Go home -&gt;
            </div>
        </div>
    </div>
</div>
    )
}

export default Payment