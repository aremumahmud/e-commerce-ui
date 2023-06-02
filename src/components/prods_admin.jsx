import { AiFillDatabase, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import "../css/products.css";


function Product({data}) {
  return (
    <>
                <div className="product" >
                <div className="imageDisplay">
                  <div className="heart">
                    <AiOutlineHeart />
                  </div>{}
                  <img src={data.image} alt="" />
                </div>
                <div className="productInfo">
                  <div className="name">
                    <p>{data.parentProduct}</p>
                    <p>
                      <sup>$</sup>
                      {data.price}
                      <sup>.99</sup>
                    </p>
                  </div>
                  <p  className="description">
                    {data.description}
                  </p>
                  <div className="rating">
                    <ul>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                    </ul>
                    <p>{"(121)"}</p>
                  </div>
                  <div className="btn" >
                    <AiFillDatabase />
                    {data.quantity}
                  </div>
                </div>
              </div>
    </>
      
  );
}

export default Product;
