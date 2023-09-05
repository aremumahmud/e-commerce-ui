import { useState } from "react";
import "../css/add_prod.css";
import handle_file_change from "../libs/load_image";
import { AiFillDelete } from "react-icons/ai";
import send_product from "../libs/send_product";
import Tab from "./tab";

function AddProd({ setPage }) {
  let [variants, setVariants] = useState([]);
  let [vari, setVari] = useState("");

  let [variants1, setVariants1] = useState([]);
  let [vari1, setVari1] = useState("");

  let [variants2, setVariants2] = useState([]);
  let [vari2, setVari2] = useState("");

  let [variants3, setVariants3] = useState([]);
  let [vari3, setVari3] = useState("");

  let [description, setDescription] = useState("");
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState(0);
  let [inventory, setInventory] = useState(0);
  let [inventory1, setInventory1] = useState(0);
  let [inventory2, setInventory2] = useState(0);
  let [inventory3, setInventory3] = useState(0);
  let [category, setCategory] = useState("");

  //images
  let [image1, setImage1] = useState("");
  let [image2, setImage2] = useState("");
  let [image3, setImage3] = useState("");
  let [image4, setImage4] = useState("");

  //loads
  let [done, setDone] = useState(false);
  let [done2, setDone2] = useState(false);
  let [done3, setDone3] = useState(false);
  let [done4, setDone4] = useState(false);
  let [pending, setPending] = useState(false);
  let [pending2, setPending2] = useState(false);
  let [pending3, setPending3] = useState(false);
  let [pending4, setPending4] = useState(false);

  let [weight, setweight] = useState(1);
  let [virtual_discount, setDiscount] = useState(30);

  let [USD, setUSD] = useState(0);
  let [GBP, setGBP] = useState(0);
  let [EUR, setEUR] = useState(0);

  let getDoc = (x) => document.getElementById(x);
  // a function to click an element if one element is being clicked
  let placeholder = (x, y) => {
    getDoc(x).onclick = () => {
      getDoc(y).click();
    };
  };
  // useEffect(()=>{
  //     console.log('hello')
  //     [1,2,3,4].forEach(each=>{
  //         //placeholder(`image${each}` , `file${each}`)
  //     })
  // },[])
  // let place =()=> {
  //     // console.log('hello')

  //          ([1,2,3,4]).forEach(each=>{
  //         // console.log(each)
  //          placeholder(`image${each}` , `file${each}`)
  //      })

  //  }
  let [load, setLoad] = useState(false);

  let divide_inventory = (e, index, dispatch, vay) => {
    //   let results = 0
    //   variants.forEach(variant=>{
    //     results += parseInt(variant.qty)
    //   })
    //   if((results+ parseInt(e.target.value)) > inventory){
    //     return
    //     //e.target.value = 0
    //   }
    let duplicate = [...vay];
    duplicate[index].qty = parseInt(e.target.value);
    dispatch && dispatch(duplicate);
  };

  let getData = () => {
    return {
      product_name: title,
      image: image1,
      description,
      price,
      category,
      weight,
      virtual_discount,
      USD,
      GBP,
      EUR,
      varieties: [
        {
          image: image1,
          parentProduct: title,
          quantity: inventory,
          sizes: variants,
        },
        {
          image: image2,
          parentProduct: title,
          quantity: inventory1,
          sizes: variants1,
        },
        {
          image: image3,
          parentProduct: title,
          quantity: inventory2,
          sizes: variants2,
        },
        {
          image: image4,
          parentProduct: title,
          quantity: inventory3,
          sizes: variants3,
        },
      ],
    };
  };

  let [productType, setProductType] = useState(false);

  let setType = (value) => {
    if (value === "default") return setProductType(false);
    setProductType(true);
  };
  let sendProd = () => {
    // return console.log(getData())
    setLoad(true);
    send_product("", getData(), productType, (err, res) => {
      setLoad(false);
      res = JSON.parse(res);
      if (err || res.error) {
        //setLoad(false)
        alert(res.message || "error uploading products");
      } else {
        //setLoad(false)
        alert("uploaded products successfully");
        window.open("/addP", "_self");
      }
    });
  };
  return (
    <>
      <a href="/home" class="logo">
        {/* <p>Glitz<span>abellelabel</span></p> */}
        <img src="\imgs\67957883-348A-45E4-BD1E-E956B290647F~2.jpg" alt="" />
      </a>
      <br />
      <br />
      <Tab
        style={{
          no: "1",
        }}
        setPage={setPage}
      />
      <hr />
      <p
        style={{
          marginBottom: 0,
          marginLeft: "15px !important",
        }}
        className="topicInAdd">
        Add product
      </p>

      <form
        onLoad={() => {
          // console.log('hello')
          [1, 2, 3, 4].forEach((each) => {
            placeholder(`image${each}`, `file${each}`);
          });
        }}
        id="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action="">
        <label htmlFor="">
          <p>Title</p>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="simple_input"
            placeholder="Name or title of product"
          />
        </label>
        <br />
        <label htmlFor="">
          <p> Description</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            name=""
            id=""
            cols="40"
            rows="10"
            placeholder="Enter product description"></textarea>
        </label>
        <br />
        <label htmlFor="">
          <p>Category</p>
          <input
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            className="simple_input"
            placeholder="Name or title of product"
          />
        </label>
        <br />
        <label htmlFor="">
          <p>Upload Type</p>
          <select
            onChange={(e) => setType(e.target.value)}
            type="text"
            className="simple_input">
            <option value="default">Default</option>
            <option value="one_pager">One Pager</option>
          </select>
        </label>
        <br />
        <label htmlFor="">
          <p> Media</p>
          <div className="images">
            <div className="image" id="image1">
              <div
                className="cover_me"
                onClick={() => placeholder(`image${1}`, `file${1}`)}>
                {pending && <div className="loader big"></div>}
                {done ? <AiFillDelete size={20} /> : "upload images"}
              </div>
              <form id="form1" action="">
                <input
                  name="picture"
                  onChange={(e) =>
                    handle_file_change(
                      e,
                      "image1",
                      "form1",
                      setDone,
                      setPending,
                      setImage1
                    )
                  }
                  type="file"
                  className="nonee"
                  id="file1"
                />
              </form>
            </div>
            <div
              className="image"
              onClick={() => placeholder(`image${2}`, `file${2}`)}
              id="image2">
              <div className="cover_me">
                {pending2 && <div className="loader big"></div>}
                {done2 ? <AiFillDelete size={20} /> : "upload images"}
              </div>
              <form id="form2" action="">
                <input
                  name="picture"
                  onChange={(e) =>
                    handle_file_change(
                      e,
                      "image2",
                      "form2",
                      setDone2,
                      setPending2,
                      setImage2
                    )
                  }
                  type="file"
                  className="nonee"
                  id="file2"
                />
              </form>
            </div>
            <div
              className="image"
              onClick={() => placeholder(`image${3}`, `file${3}`)}
              id="image3">
              <form id="form3" action="">
                <input
                  name="picture"
                  onChange={(e) =>
                    handle_file_change(
                      e,
                      "image3",
                      "form3",
                      setDone3,
                      setPending3,
                      setImage3
                    )
                  }
                  type="file"
                  className="nonee"
                  id="file3"
                />
              </form>
              <div className="cover_me">
                {pending3 && <div className="loader big"></div>}
                {done3 ? <AiFillDelete size={20} /> : "upload images"}
              </div>
            </div>
            <div
              className="image"
              onClick={() => placeholder(`image${4}`, `file${4}`)}
              id="image4">
              <form id="form4" action="">
                <input
                  name="picture"
                  onChange={(e) =>
                    handle_file_change(
                      e,
                      "image4",
                      "form4",
                      setDone4,
                      setPending4,
                      setImage4
                    )
                  }
                  type="file"
                  className="nonee"
                  id="file4"
                />
              </form>
              <div className="cover_me">
                {pending4 && <div className="loader big"></div>}
                {done4 ? (
                  <AiFillDelete
                    style={{
                      zIndex: 1,
                      position: "absolute",
                    }}
                    onClick={(e) => {
                      setDone4(false);
                      setPending4(false);
                      getDoc("image4").style.background = "";
                      setImage4("");
                      e.preventDefault();
                    }}
                    size={20}
                  />
                ) : (
                  "upload images"
                )}
              </div>
            </div>
          </div>
        </label>
        <br />
        <div>
          <p>first product variation</p>
          <hr />
          <br />
          <div className="size_choose">
            <button className="button">Image 1</button>
            <input
              onChange={(e) => setInventory(e.target.value)}
              className="simple_input partition"
              placeholder="enter quantity"
            />
          </div>
          <p>Variants (size)</p>
          <div className="size_choose">
            <input
              className="simple_input partition"
              onChange={(e) => {
                setVari(e.target.value);
              }}
              type="text"
              name=""
              id=""
              placeholder="M / L / XL"
            />{" "}
            <button
              onClick={() => {
                if (!vari || variants.length === 8) return;
                setVariants([
                  ...variants,
                  {
                    index: variants.length,
                    size: vari,
                    qty: 0,
                  },
                ]);
              }}
              className="button">
              add
            </button>
          </div>
          <div className="size_group">
            {variants &&
              variants
                .filter((x) => x)
                .map((x) => {
                  return (
                    <div className="sizes">
                      <p className="size_choice">{x.size.toUpperCase()}</p>
                      <p
                        onClick={() => {
                          let j = variants.filter((n) => {
                            if (n.index === x.index) {
                              return false;
                            }
                            return true;
                          });
                          setVariants(j);
                        }}>
                        x
                      </p>
                    </div>
                  );
                })}

            {/* <div className="sizes">
                    <p className='size_choice'>X</p>
                    <p>x</p>
                </div> */}
          </div>
          <br />
          <p>Inventory division based on size </p>
          current inventory listed ({inventory || 0})
          <br /> <br />
          {variants.map((x) => (
            <div className="divisions">
              <div className="ass_size">
                <p>{x.size.toUpperCase()}</p>
              </div>
              <div className="ass_qty">
                <input
                  onChange={(e) =>
                    divide_inventory(e, x.index, setVariants, variants)
                  }
                  className="simple_input partition"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          ))}
        </div>
        <div style={productType ? { display: "none" } : {}}>
          <p>second product variation</p>
          <hr />
          <br />
          <div className="size_choose">
            <button className="button">Image 2</button>
            <input
              onChange={(e) => setInventory1(e.target.value)}
              className="simple_input partition"
              placeholder="enter quantity"
            />
          </div>
          <p>Variants (size)</p>
          <div className="size_choose">
            <input
              className="simple_input partition"
              onChange={(e) => {
                setVari1(e.target.value);
              }}
              type="text"
              name=""
              id=""
              placeholder="M / L / XL"
            />{" "}
            <button
              onClick={() => {
                if (!vari1 || variants1.length === 8) return;
                setVariants1([
                  ...variants1,
                  {
                    index: variants1.length,
                    size: vari1,
                    qty: 0,
                  },
                ]);
              }}
              className="button">
              add
            </button>
          </div>
          <div className="size_group">
            {variants1 &&
              variants1
                .filter((x) => x)
                .map((x) => {
                  return (
                    <div className="sizes">
                      <p className="size_choice">{x.size.toUpperCase()}</p>
                      <p
                        onClick={() => {
                          let j = variants1.filter((n) => {
                            if (n.index === x.index) {
                              return false;
                            }
                            return true;
                          });
                          setVariants1(j);
                        }}>
                        x
                      </p>
                    </div>
                  );
                })}

            {/* <div className="sizes">
                    <p className='size_choice'>X</p>
                    <p>x</p>
                </div> */}
          </div>
          <br />
          <p>Inventory division based on size </p>
          current inventory listed ({inventory || 0})
          <br /> <br />
          {variants1.map((x) => (
            <div className="divisions">
              <div className="ass_size">
                <p>{x.size.toUpperCase()}</p>
              </div>
              <div className="ass_qty">
                <input
                  onChange={(e) =>
                    divide_inventory(e, x.index, setVariants1, variants1)
                  }
                  className="simple_input partition"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          ))}
        </div>
        <div style={productType ? { display: "none" } : {}}>
          <p>third product variation</p>
          <hr />
          <br />
          <div className="size_choose">
            <button className="button">Image 3</button>
            <input
              onChange={(e) => setInventory2(e.target.value)}
              className="simple_input partition"
              placeholder="enter quantity"
            />
          </div>
          <p>Variants (size)</p>
          <div className="size_choose">
            <input
              className="simple_input partition"
              onChange={(e) => {
                setVari2(e.target.value);
              }}
              type="text"
              name=""
              id=""
              placeholder="M / L / XL"
            />{" "}
            <button
              onClick={() => {
                if (!vari2 || variants2.length === 8) return;
                setVariants2([
                  ...variants2,
                  {
                    index: variants2.length,
                    size: vari2,
                    qty: 0,
                  },
                ]);
              }}
              className="button">
              add
            </button>
          </div>
          <div className="size_group">
            {variants2 &&
              variants2
                .filter((x) => x)
                .map((x) => {
                  return (
                    <div className="sizes">
                      <p className="size_choice">{x.size.toUpperCase()}</p>
                      <p
                        onClick={() => {
                          let j = variants2.filter((n) => {
                            if (n.index === x.index) {
                              return false;
                            }
                            return true;
                          });
                          setVariants2(j);
                        }}>
                        x
                      </p>
                    </div>
                  );
                })}

            {/* <div className="sizes">
                    <p className='size_choice'>X</p>
                    <p>x</p>
                </div> */}
          </div>
          <br />
          <p>Inventory division based on size </p>
          current inventory listed ({inventory || 0})
          <br /> <br />
          {variants2.map((x) => (
            <div className="divisions">
              <div className="ass_size">
                <p>{x.size.toUpperCase()}</p>
              </div>
              <div className="ass_qty">
                <input
                  onChange={(e) =>
                    divide_inventory(e, x.index, setVariants2, variants2)
                  }
                  className="simple_input partition"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          ))}
        </div>
        <div style={productType ? { display: "none" } : {}}>
          <p>fourth product variation</p>
          <hr />
          <br />
          <div className="size_choose">
            <button className="button">Image 4</button>
            <input
              onChange={(e) => setInventory3(e.target.value)}
              className="simple_input partition"
              placeholder="enter quantity"
            />
          </div>
          <p>Variants (size)</p>
          <div className="size_choose">
            <input
              className="simple_input partition"
              onChange={(e) => {
                setVari3(e.target.value);
              }}
              type="text"
              name=""
              id=""
              placeholder="M / L / XL"
            />{" "}
            <button
              onClick={() => {
                if (!vari3 || variants3.length === 8) return;
                setVariants3([
                  ...variants3,
                  {
                    index: variants3.length,
                    size: vari3,
                    qty: 0,
                  },
                ]);
              }}
              className="button">
              add
            </button>
          </div>
          <div className="size_group">
            {variants3 &&
              variants3
                .filter((x) => x)
                .map((x) => {
                  return (
                    <div className="sizes">
                      <p className="size_choice">{x.size.toUpperCase()}</p>
                      <p
                        onClick={() => {
                          let j = variants3.filter((n) => {
                            if (n.index === x.index) {
                              return false;
                            }
                            return true;
                          });
                          setVariants3(j);
                        }}>
                        x
                      </p>
                    </div>
                  );
                })}

            {/* <div className="sizes">
                    <p className='size_choice'>X</p>
                    <p>x</p>
                </div> */}
          </div>
          <br />
          <p>Inventory division based on size </p>
          current inventory listed ({inventory || 0})
          <br /> <br />
          {variants3.map((x) => (
            <div className="divisions">
              <div className="ass_size">
                <p>{x.size.toUpperCase()}</p>
              </div>
              <div className="ass_qty">
                <input
                  onChange={(e) =>
                    divide_inventory(e, x.index, setVariants3, variants3)
                  }
                  className="simple_input partition"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          ))}
        </div>
        <p>Weight</p>
        <label htmlFor="">
          weight
          <input
            onChange={(e) => setweight(e.target.value)}
            type="number"
            className="simple_input"
            placeholder="0kg"
          />
        </label>

        <p>Virtual Discount (%)</p>
        <label htmlFor="">
          discount
          <input
            onChange={(e) => setDiscount(e.target.value)}
            type="number"
            className="simple_input"
            placeholder="0%"
          />
        </label>
        <br /><br />
        <h2> Pricing</h2>
        <br />
        <p>NGN price</p>
        <label htmlFor="">
          Nigerian Naira
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="simple_input"
            placeholder="0.00"
          />
        </label>

        <p>USD Price</p>
        <label htmlFor="">
          United States Dollar
          <input
            onChange={(e) => setUSD(e.target.value)}
            type="number"
            className="simple_input"
            placeholder="0.00"
          />
        </label>
        <p>GBP Price</p>
        <label htmlFor="">
          Great British Pounds
          <input
            onChange={(e) => setGBP(e.target.value)}
            type="number"
            className="simple_input"
            placeholder="0.00"
          />
        </label>
        {/* <p>EUR Price</p>
        <label htmlFor="">
          Euro
          <input
            onChange={(e) => setEUR(e.target.value)}
            type="number"
            className="simple_input"
            placeholder="0.00"
          />
        </label> */}
        {/* <p>Inventory</p>
            <label htmlFor="">
                Quantity
                <input  onChange={(e)=>setInventory(e.target.value)} type="text" className="simple_input" placeholder='0' />
            </label> */}

        <button
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="submit_this"
          onClick={sendProd}>
          {load ? <div className="loader"></div> : " Add product"}
        </button>
      </form>

      <br />
    </>
  );
}

export default AddProd;
