// App.js
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
//require("dotenv").config()


export default function PaypalCheckout({cart}) {
    console.log(cart)
    const initialOptions = {
        clientId: "AbIHciYVeWSl_9Sb_5QLqVB6WJn9wY0GcIqE3a50QAzMXFkDnS_Qvo5JtQfYJLla7WG3VRTyovjZuP3p",
        currency: "USD",
        intent: "capture",
    };

    const createOrder = (data) => {
        // Order is created on the server and the order id is returned
        return fetch("http://localhost:8008/pal/api/orders", {
          method: "POST",
           headers: {
            "Content-Type": "application/json",
          },
          // use the "body" param to optionally pass additional order information
          // like product skus and quantities
          body: JSON.stringify({
            cart: data
          }),
        })
        .then((response) => response.json())
        .then((order) => order.id);
      };

      const onApprove = (data) => {
         // Order is captured on the server and the response is returned to the browser


         return fetch(`http://localhost:8008/pal/api/orders/${data.orderID}/capture`, {
          method: "POST",
           headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderID: data.orderID
          })
        })
        .then((response) => response.json());
      };

    return (
        <>
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons style={{ layout: "horizontal" }} 
            createOrder={(cart, actions) => createOrder(cart, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            />
        </PayPalScriptProvider>
        </>
    );
}