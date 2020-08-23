import React from "react";
import styled from "styled-components";

interface IHeaderComponentProps {
  totalProducts: number;
  totalPrice: number;
  renderShoppingCartComponent: () => void;
  emptySelectedProducts: () => void;
}

export default class HeaderComponent extends React.Component<IHeaderComponentProps> {
  render() {
    return (
      <HeaderSticky>
        <Header>
          <HeaderContainer>
            <h1>Kim's code case</h1>
            <HeaderContainerRight>
            {this.props.totalProducts}
              {/* bij onClick wordt ShoppingCartComponent geladen */}
              <Icon onClick={this.props.renderShoppingCartComponent}>
                <i style={{ fontSize: "40px" }}
                  className="fa fa-shopping-basket"></i>
              </Icon>
              <p>Totaal prijs: &euro; {this.props.totalPrice}</p>
              {/* bij onClick wort het winkelmand geleegd */}
              <Button onClick={this.props.emptySelectedProducts}>
                Winkelmand legen
              </Button>
            </HeaderContainerRight>
          </HeaderContainer>
        </Header>
      </HeaderSticky>
    );
  }
}


const Button = styled.button`
  cursor: pointer;
  background: #e6e6e6;
  font-size: 16px;
  border-radius: 3px;
  color: #000;
  border: 2px solid #000;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
`;
const Header = styled.header`
  background: #b2d7ee;
  font-size: 16px;
  border-radius: 3px;
  padding: 0.25em 1em;
  width: 100%;
`;
const Icon = styled.div`
  // width: 33.333%;
  // text-align: right;
  // float:right;
  // margin-right: 50px;

  svg {
    //margin-right: 20px;
  }
`;
const HeaderContainer = styled.div`
  max-width: 68%;
  margin: 0 17%;
  padding: 100px 0;
}
`;
const HeaderContainerRight = styled.div`
text-align: right;
float:right;
width: 250px;
margin: -70px 19px 0 0;
}
`;
const HeaderSticky = styled.div`
position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  border: 2px solid #040;
}`;