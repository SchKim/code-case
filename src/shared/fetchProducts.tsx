import { baseUrl } from './baseUrl';
import { IProduct } from './IProduct';


// hier haal ik de producten uit de json
// fetch op de API products 
// zet de response op in json data en stop dat in products van de interface Iproducts

export function fetchProducts(): Promise<IProduct[]> {
    const products =  fetch(baseUrl + "products")
        .then(response => response.json())
        .then(products => products = products);

    return products;
} 

