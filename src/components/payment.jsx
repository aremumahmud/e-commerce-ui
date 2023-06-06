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
Thank you for your purchase at our store! We are pleased to inform you that your order has been successfully processed.Should you have any questions or require further assistance, please don't hesitate to reach out to our customer support team. We appreciate your business and hope you enjoy your new female wear!</p>
            <div onClick={()=>setPage('home')} class="btn_me">
                Go home -&gt;
            </div>
        </div>
    </div>
</div>
    )
}

export default Payment