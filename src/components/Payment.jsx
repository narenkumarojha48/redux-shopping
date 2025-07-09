import React from 'react'
import Cart from './Cart'
import  PaymentForm  from'./PaymentForm';
const Payment = () => {
  return (
    <div className='paymentcontainer'>
      <section>
        <Cart/>
      </section>
      <section>
        <PaymentForm/>
      </section>
      
      
    </div>
  )
}

export default Payment