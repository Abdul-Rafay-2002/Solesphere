import { Wrapper } from '@/components';
import React from 'react';

const Wishlist = () => {
  return (
      <div className='my-20'>
          <Wrapper>
              <div className='text-center text-gray-950 max-w-[800px] m-auto pb-8'>
                  <h2>Your Wishlist</h2>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-[25px] md:px-0 '>
                  {/* {productData?.reverse().map((product) => <ProductCart key={product._id} product={product} />)} */}
              </div>
          </Wrapper>
      </div>
  )
}

export default Wishlist;