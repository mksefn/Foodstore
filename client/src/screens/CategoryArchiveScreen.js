import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listProductsByCategory } from '../actions/categoryActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ProductCard from '../components/ProductCard'

const CategoryArchiveScreen = ({ match }) => {
  const categorySlug = match.params.slug
  console.log(categorySlug)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProductsByCategory(categorySlug))
  }, [dispatch, categorySlug, match])

  const productGetByCategory = useSelector(
    (state) => state.productGetByCategory
  )
  const { loading, error, products, categoryName } = productGetByCategory
  return (
    <div
      className='py-5'
      style={{
        backgroundColor: '#ecf0f1',
        padding: '50px',
        borderRadius: '35px',
      }}
    >
      <Link to='/' className='btn btn-dark my-3'>
        Go Back
      </Link>

      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            <Col>
              <h4>Category: {categoryName.name && categoryName.name}</h4>
            </Col>
          </Row>
          <Row>
            {products &&
              products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <ProductCard product={product}></ProductCard>
                </Col>
              ))}
          </Row>
        </>
      )}
    </div>
  )
}

export default CategoryArchiveScreen