import React, { useEffect, useState } from 'react'
import {useParams} from "react-router"
// import {products} from "../data"
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

const ProductsDetails = ({url}) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log(product + "is it fetching");
  const [loading, setLoading] = useState(false);

//   trying this 
const smallImage = [
  { image: "https://tinyurl.com/bdd77ev9" },
  { image: "https://tinyurl.com/36vm2f2e" },
  { image: "https://tinyurl.com/bdewea3p" },
  { image: "https://tinyurl.com/3rnz988e" },
  { image: "https://tinyurl.com/3n83xa9x" },
  { image: "https://tinyurl.com/3drhmppf" },
  { image: "https://tinyurl.com/56dwmxnf" },
  { image: "https://tinyurl.com/ykdvrxnh" },
  { image: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg" },
  { image: "https://tinyurl.com/2u3enfb2" },
  { image: "https://tinyurl.com/beez6y7" },
  { image: "https://tinyurl.com/yc7yyx85" },
];

  // useEffect(()=>{
  //     fetch(url/`${id}`)
  //     .then(r=> r.json())
  //     .then(data=> setProduct(data));
  //     setLoading(false)

  // },[])

  // if i used the url that contained the path it wasnt fetching {syntaxerror: unexpected token '<', <!doctype ... is not valid json}
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://aqueous-castle-47869.herokuapp.com/products/${id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <>loading......</>;
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="product-detail-container">
 
          <div className="image-container">
            <img src={product.image_url} alt="hopefuly it works" />
          </div>
          <div className="product-detail-desc">
            <h1>{product.name}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>(20)</p>
            </div>
            <h4>Details:</h4>
            <p>{product.description}</p>
            <p className="price">Ksh {product.price}</p>
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick="">
                  <AiOutlineMinus />
                </span>
                <span className="num" onClick="">
                  0
                </span>
                <span className="plus" onClick="">
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="add-to-cart">
                Add to cart
              </button>
              <button type="button" className="buy-now">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              <div className="products-container">
                <div className="product-card">
                  {smallImage.map((item) => {
                    return (
                      <img className="product-image" src={item.image} alt="" />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <div className="product-detail-container">
          <div>{loading ? <Loading /> : <ShowProduct />}</div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetails