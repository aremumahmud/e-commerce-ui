import '../css/success.css'
function Payment({setPage}){
    return(
        <div class="center_me">
    <div class="split_me">
        <div class="image">
            <img src="/imgs/undraw_successful_purchase_re_mpig.svg" />
        </div>
        <div class="text">
            <p> 
            Great news! We have received your order and are processing it. You will receive a confirmation email shortly.
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