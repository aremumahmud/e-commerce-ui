import '../css/footer.css'

function Footer (){
    return (
        <footer>
            <hr />
            <div className="logo">
            
                <p>Shopcart</p>
            </div>
            <div className="links">
                <ul>
                    <li>Overview</li>
                    <li>Products</li>
                    <li>Pricing</li>
                    <li>Careers</li>
                    <li>Help</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className="other">
                <div className="email">
                    <input type="email" placeholder='Email Address' />
                    <div className="btn">Suscribe</div>
                </div>
                <div className="copyWright">
                    <p>&copy; 2023 Shopcart. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer