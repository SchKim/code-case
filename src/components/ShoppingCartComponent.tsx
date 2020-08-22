import React from "react";
import { IProduct } from "../shared/IProduct";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background: b2d7ee;
  font-size: 16px;
  border-radius: 3px;
  color: #000;
  border: 2px solid #b2d7ee;
  margin: 0 25%;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  width: 50%;

  &:hover {
    background-color: #ff7676;
    color: #000;
  }
`;
const ButtonBack = styled.button`
  cursor: pointer;
  background: b2d7ee;
  font-size: 16px;
  border-radius: 3px;
  color: #000;
  border: 2px solid #b2d7ee;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  text-align:center;

  &:hover {
    background-color: #ddeff8;
    color: #000;
  }
`;
const StyledContainer = styled.div`
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  color: #000;
  font-weight: 500;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  color: #000;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
const StyledPhoto = styled.img`
  width: 50%;
  margin: 0 25%;
  object-fit: cover;
   }
 `;
const StyledRoot = styled.div`
  padding: 15px 12%;
  border: 5px solid #ddeff8;
    max-width:40%;
    margin: auto;
  
}
`;
const H1 = styled.div`
  text-align:center;
  font-size:40px;
  margin-bottom: 25px;
  
}
`;
interface IShoppingCartComponentProps {
  basket: IProduct[];
  renderMainComponent: () => void;
  removeProduct: (productId: number) => void;
}

export default class ShoppingCartComponent extends React.Component<
  IShoppingCartComponentProps
> {
  render() {
    return (
      <div>
        {/* bij onClick wordt MainComponent geladen */}
        <ButtonBack onClick={this.props.renderMainComponent}> <i className="fa fa-arrow-left"></i> Terug naar producten
        </ButtonBack>
        <H1>Uw winkel wagen</H1>
        {this.renderBasket()}
      </div>
    );
  }

  renderBasket() {
    return this.props.basket.map((product) => {
      return (
        <div>
        <StyledRoot>
          <StyledContainer>
            <StyledPhoto src={product.image} alt={product.title} />
            <Title>{product.title}</Title>
            <Description>{product.description} </Description>
            <p>{product.price}</p>
            {/* bij onClick wordt het geselecteerde product verwijderd */}
            <Button onClick={() => this.props.removeProduct(product.id)}>
              Verwijder product
            </Button>
          </StyledContainer>
        </StyledRoot>
        </div>
      );
    });
  }
}
