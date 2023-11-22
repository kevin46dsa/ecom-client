import axios from 'axios';
//import authHeader from './auth-header';
const config = {
    Server_url: "http://localhost:8000"
}
const API_URL = `${config.Server_url}/data`;
//const Public_URL = `${config.Server_url}/public`;

/*
const getUserIncome = (TransactionID) => {
	return axios
		.get(API_URL + '/getIncome', {
			headers: authHeader(),
			params: { id: TransactionID },
		})
		.then((response) => {
			return response.data.data[0];
		});
}
*/

const placeOrderFinal = (body) => {
    
	return axios
		.post(API_URL + '/create-checkout-session', { body: body })
		.then((response) => {
			return response.data;
		});
};

const Placeorderfinal = {
	
	placeOrderFinal,
	
};
export default Placeorderfinal;