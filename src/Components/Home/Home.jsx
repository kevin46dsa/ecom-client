import React from 'react';
import Placeorderfinal from '../../Service/Placeorderfinal';
import PaypalCheckout from '../Paypal/PaypalCheckOut';

function Home() {

	let order = [
		{
			Quantity:2,
			Sku:"123456",
			Name:"Jordan 12 Mids",
			Description: "Limited Edition Jordan 12 Mids Black Color",
			Price: "199.00"
			
		},{
			Quantity:1,
			Sku:"123456",
			Name:"Jordan 12 Mids",
			Description: "Limited Edition Jordan 12 Mids White Color",
			Price: "299.00"
		}
	]



	async function placeOrderFinal(){
		console.log("Hello World")
		try{
			let result = await Placeorderfinal.placeOrderFinal(order)
			console.log(result)
			
		}
		catch(e){
			console.log(e)
		}
	}




	return (
		<div>
            <h1>Hello</h1>
			<button onClick={placeOrderFinal}>Place Order</button>
			<PaypalCheckout cart={order}/>
        </div>
	);
}

export default Home;