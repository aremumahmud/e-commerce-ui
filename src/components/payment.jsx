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
                Great news! Your order has been recieved and we're thrilled you've chosen us to be part of your wardrobe. If you have any questions or need help, please don't hesitate to reach out. We hope you enjoy your new piece(s)!
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