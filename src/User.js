

import React, { useState } from 'react'

const User = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

  return (
      <div style={{textAlign:'center'}}>
        <hr />
        <h1> Input Form </h1>
        <form>
            <label>Enter Your FirstName</label>  <br />
            <input type='text' value={firstName} placeholder='Enter Your Name' onChange={(e) => setFirstName(e.target.value)} />  <br />
            
            <label>Enter Your Last Name </label>  <br />
            <input type='text' value={lastName} placeholder='Enter Your LastName' onChange={(e) => setLastName(e.target.value)} />   <br />
            
            <label>Enter Your Email  </label>  <br />  
            <input type='email' value={email} placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />   <br />
            <br />
            <button type='button'>Submitted</button>
            
        </form>
        <h3>Your First Name is : {firstName}</h3>
        <h3>Your Last Name is : {lastName} </h3>
        <h3>Your Email Email : {email} </h3>
    </div>
  )
}

export default User

