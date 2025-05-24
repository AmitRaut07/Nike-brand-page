import React from 'react';

const MainSection = () => {
  return (
    <main className='main-section'>
      <div className="main-content">
        <div className="text-container">
          <h1>Your feet deserve the best</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <div className='text-buttons'>
            <button className="shop-button">Shop Now</button>
            <button className="category-button">Category</button>
          </div>
          <div className="shopping-list">
            <p>Also available on</p>
            <div className='shopping-logos'>
              <img src="/images/amazon.png" alt="amazon logo" />
              <img src="/images/flipkart.png" alt="flipkart logo" />
            </div>
          </div>
        </div>
        
        <div className="image-container">
          <img src="/images/shoe_image.png" alt="Premium shoes" />
        </div>
      </div>
    </main>
  );
}

export default MainSection;