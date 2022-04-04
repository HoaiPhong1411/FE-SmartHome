import React from 'react'

const CartProduct = ({srcUrl, nameProduct, priceProduct}) => {
  return (
   <>
       <div className='border-2 rounded-bd8 border-primary w-[232px] h-[400px] mx-auto py-[20px] px-[8px] flex flex-col items-center gap-4 shadow-shadow-primary'>
         <div className='w-[190px] h-[200px]'>
           <img src={srcUrl} className='cover w-full h-full' />
         </div>
         <div className='flex flex-col text-center items-center'>
           <p className='hover:text-hover font-semibold text-primary'>{nameProduct}</p>
           <p className='text-[red] font-medium'>{priceProduct} đ</p>
         </div>
         <div className='flex justify-center ' >
           <div className='bg-color-orange w-[25px] h-[25px] text-center rounded-bd4'>
             <span className='text-[#fff] text-[10px]'>KM</span>
           </div>
           <div className='text-13px'>
             <span>
               Tặng phiếu mua hàng và  
             </span>
             <span className='text-color-orange ml-1 '>
               1KM khác
             </span>
           </div> 
         </div>
       </div>
   </>
  )
}

export default CartProduct