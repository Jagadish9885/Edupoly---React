import React from 'react'

function Products(p) {
  return (
    <div className="border border-1 border-danger rounded p-4 m-2 bg-light align-items-center"
    style={{height:"350px",width:"400px"}}
    >
     
      <div className='d-flex align-items-center'>
        <img src={p.image} alt={p.children} style={{height:"100px",width:"100px"}}/>
        <h3 className='border-start border-2 border-info p-2'>{p.children}</h3>
      </div>
      <p>{p.descr}</p>
      <p className='d-flex justify-content-around'>
        <i>Price: {p.price}</i>
        <b>Rating: {p.rating}</b>
      </p>
       <p className='d-flex justify-content-center'>
        <button className='border border-2 rounded bg-success bg-gradient shadow-lg mb-5'>Add to Cart</button>
       </p>
    </div>
  )
}

export default Products
