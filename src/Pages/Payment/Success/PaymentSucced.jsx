import React from 'react'
import './PaymentSucced.css'

export default function PaymentSucced() {
  return (
    <div className='page'>
        <div className='container'>
            <div className='page d-flex justify-content-center align-items-center'>
                
                    <div className='cardPay p-3'>
                        <i style={{color:'green', fontSize:'1.5rem'}} class="completeIcon bi bi-bookmark-check-fill "></i>
                        <div className='text-center mb-2'>
                            <i style={{color:'green' , fontSize:'2.5rem'}} class="checkIcon bi bi-check-circle-fill"></i>
                            <h5>Successful</h5>
                        </div>
                        <hr/>
                        <div className='p-3' style={{minWidth:'220px'}}>
                            
                            <p>Transaction No: 98548432</p>
                        </div>
                        <hr/>
                        <div className='text-center'>
                            <button className='btn btn-success'>
                                Done
                            </button>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
  )
}
