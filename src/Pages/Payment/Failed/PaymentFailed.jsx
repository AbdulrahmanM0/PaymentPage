import React from 'react'
import './PaymentFailed.css'

export default function PaymentFailed() {
  return (
    <div className='page'>
        <div className='container'>
            <div className='page d-flex justify-content-center align-items-center'>
                
                    <div className='cardPayX p-3'>
                        <i style={{color:'#dc3545', fontSize:'1.5rem'}} class="completeIcon bi bi-bookmark-x-fill"></i>
                        <div className='text-center mb-2'>
                            <i style={{color:'#e31111' , fontSize:'2.5rem'}} class="XIcon bi bi-x-circle-fill"></i>
                            <h5>Failed</h5>
                        </div>
                        <hr/>
                        <div className='p-3' style={{minWidth:'220px'}}>
                            
                            <p className='text-center'>Try again !</p>
                        </div>
                        <hr/>
                        <div className='text-center'>
                            <button className='btn btn-danger'>
                                Done
                            </button>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
  )
}