import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import "./cart.css";
import { useEffect, useState } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 10px;
  position: relative;
  border-radius: 8px;
  box-shadow: rgb(3 0 71 / 9%) 2px 3px 5px;
  transition: all 0.3s linear;
  background: white;
  margin-top: 30px;
  margin-right: 20px;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const url = "https://aqueous-castle-47869.herokuapp.com/orders";
const Cart = ({ cartItem, addToCart, decreaseQty,  setCartItem }) => {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  // fetch for orders
  const [cartDelete, setCartDelete] = useState([])
  console.log(cartDelete + "hope it works")
  // const deleteProject = ()=>{
  //   fetch(url)
  //     .then((r) => r.json())
  //     .then((data) => setCartDelete(data));
  // }
  // useEffect(()=>{
  //   deleteProject()
  // },[])
  // delete for the products per customer oders
  useEffect(()=>{
    deletOrderProject()
  })
  const deletOrderProject = async(id)=> {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    })
    setCartDelete(await response.json())
  }
  // const deleteOrder = (id) => {
  //   fetch(`${url}/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((resp) => resp.json())
  //     .then(() => {
  //       deleteProject()
  //     });
  // };

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopText>Shopping Bag(0)</TopText>
          <TopText>Your Wishlist (0)</TopText>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Hr />
        <Bottom>
          <Info>
            <div className="cart-details">
              {cartItem.length === 0 && (
                <h1 className="no-items product">No Items are add in Cart</h1>
              )}
              {cartItem.map((item) => {
                const productQty = item.price * item.quantity;

                return (
                  <Product key={item.id}>
                    <div className="img">
                      <Image src={item.image_url} alt="" />
                    </div>
                    <Details>
                      <ProductName>
                        <b>Product: </b>
                        {item.name}
                      </ProductName>
                      <ProductId>
                        <b>DES: </b>
                        {item.description}
                      </ProductId>
                    </Details>
                    <div className="cart-items-function">
                      <div className="removeCart">
                        <button
                          className="removeCart"
                          onClick={deletOrderProject}
                        >
                          <TiDeleteOutline />
                        </button>
                      </div>
                      <PriceDetail>
                        <h4>
                          <span>${productQty}.00</span>
                        </h4>
                      </PriceDetail>
                      <div className="cartControl d_flex">
                        <button
                          className="incCart"
                          onClick={() => addToCart(item)}
                        >
                          <AiOutlinePlus />
                        </button>
                        <ProductAmount> {item.quantity} </ProductAmount>
                        <button
                          className="desCart"
                          onClick={() => decreaseQty(item)}
                        >
                          <AiOutlineMinus />
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-price"></div>
                  </Product>
                );
              })}
            </div>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Ksh {totalPrice}.00</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
