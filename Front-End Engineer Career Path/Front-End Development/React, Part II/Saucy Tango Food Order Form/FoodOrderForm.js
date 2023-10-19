import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [order, setOrder] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Order Successful! Your order was ${order}. Please show your confirmation number for pickup.`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          id="name" 
          name="name"
          type="text"
          value={name}
          onChange={({target}) => setName(target.value)}
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone" 
          name="phone"
          type="text"
          value={phone}
          onChange={({target}) => setPhone(target.value)}
        />
        <label htmlFor="address">Address</label>
        <input 
          id="address" 
          name="address"
          type="text"
          value={address}
          onChange={({target}) => setAddress(target.value)}
        />
        <label htmlFor="order">Order</label>
        <input 
          id="order"
          name="order"
          type="text"
          value={order} 
          onChange={({target}) => setOrder(target.value)}
        />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  )
}

export default FoodOrderForm;