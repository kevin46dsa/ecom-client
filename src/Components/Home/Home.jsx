import React from 'react';
import Placeorderfinal from '../../Service/Placeorderfinal';


function Home() {

	let order = [
		{
			id: 1,
			quantity:2,
			sku:"123456"
		},{
			id: 1,
			quantity:2,
			sku:"123456"
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
        </div>
	);
}

export default Home;