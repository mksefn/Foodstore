import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
const ProductCard = ({ product }) => {
  return (
    <>
      <div className='food-card' style={{ outline: '1px solid #feca57' }}>
        <div className='food-card_img'>
          <img src={product.image.url} alt='' />
          <a href='/'>
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
        <div className='food-card_content'>
          <div className='food-card_title-section'>
            <Link to={`/product/${product.slug}`} className='food-card_title'>
              {product.title}
            </Link>
            <Link
              to={`/category/${product.category.slug}`}
              className='food-card_category'
            >
              {product.category.name}
            </Link>
          </div>
          <div className='food-card_bottom-section'>
            <div className='space-between'>
              <div className='food-card_price'>
                <span>
                  {product.price ? (
                    <span className='fs-6'>${product.price}</span>
                  ) : product.variable ? (
                    <span className='fs-6'>
                      ${product.variable.attribute[0].price}- $
                      {
                        product.variable.attribute[
                          product.variable.attribute.length - 1
                        ].price
                      }
                    </span>
                  ) : (
                    'No price'
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard