import React from "react";
import { IProduct } from "../shared/IProduct";
import styled from "styled-components";

interface IProductComponentProps {
  product: IProduct;
  clickHandler: (product: IProduct) => void;
}
const Button = styled.button`
  cursor: pointer;
  background: #b2d7ee;
  font-size: 16px;
  border-radius: 3px;
  color: #000;
  border: 2px solid #b2d7ee;
  margin: 0 25%;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  width: 50%;

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
// export default class ProductComponent extends React.Component<IProductComponentProps> {
//   render() {
//     return (
//       <div>
//         <StyledRoot>
//           <StyledContainer>
//             <StyledPhoto
//               src={this.props.product.image}
//               alt={this.props.product.title}
//             />
//             <Title>{this.props.product.title}</Title>
//             <Description>
//               <p>{this.props.product.description}</p>{" "}
//             </Description>
//             <p>&euro; {this.props.product.price}</p>
//             <Button onClick={() => this.props.clickHandler(this.props.product)}>
//               Voeg toe aan mandje
//             </Button>
//           </StyledContainer>
//         </StyledRoot>
//       </div>
//     );
//   }
// }


export default function ProductComponent(props: IProductComponentProps) {
  return (
    <div>
      <StyledRoot>
        <StyledContainer>
          <StyledPhoto
            src={props.product.image}
            alt={props.product.title}
          />
          <Title>{props.product.title}</Title>
          <Description>
            <p>{props.product.description}</p>{" "}
          </Description>
          <p>&euro; {props.product.price}</p>
          <Button onClick={() => props.clickHandler(props.product)}>
            Voeg toe aan mandje
          </Button>
        </StyledContainer>
      </StyledRoot>
    </div>
  );
  
}