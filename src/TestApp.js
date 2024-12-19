import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count1, setCount1] = useState(0);

  useEffect(()=>{
    setCount1(count1 + 1);
    setCount1(count1 + 1);
    setCount1(count1 + 1);
  },[])

  
    return (
      <div>
     
      Current count1: {count1}
      <br/>
      </div>
    );
};

export default Counter;