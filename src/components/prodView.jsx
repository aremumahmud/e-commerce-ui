function ProdView({data}){
    return (
        <div className="view_tile">
                    <div className="grp">
                        <div className="imageDs">
                          <img src={data.image} alt="" />
                        </div>
                        <div className="info12">
                            <p className='topic1'>{data.parent_product}</p>
                            <p>quantity: {data.quantity}</p>
                        </div>
                    </div>
                    <div className='info22'>
                        <p className='topic1'>N{data.price?data.price:2000}</p>
                        <p>price</p>
                    </div>
                    
                </div>
    )
}

export default ProdView