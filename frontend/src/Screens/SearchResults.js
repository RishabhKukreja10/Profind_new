import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SearchResults = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [flipkartData, setflipkartData] = useState(null)
  const [amazonData, setamazonData] = useState(null)
  const [productData, setProductData] = useState(null)
  useEffect(() => {
    const param = location.state.keyword
    const funcForFetch = async () => {
      const config = { headers: { 'Content-Type': 'application/json' } }
      try {
        const flipkart = await axios.get(
          'https://flipkart.dvishal485.workers.dev/search/' + param,
          config
        )
        const amazon = await axios.get(
          'https://amazon-scraper.tprojects.workers.dev/search/' + param,
          config
        )
        const flipkartUrlsRes = flipkart.data.result
        const amazonUrlsRes = amazon.data.result
        const flipkartUrls = flipkartUrlsRes.slice(
          0,
          flipkartUrlsRes.length > 3 ? 3 : flipkartUrlsRes.length
        )
        const amazonUrls = amazonUrlsRes.slice(
          0,
          amazonUrlsRes.length > 3 ? 3 : amazonUrlsRes.length
        )

        amazonUrls.forEach((url) => {
          gettingAmazonModelNo(url.product_link).then((val) => {
            url.modelNo = val
          })
        })

        flipkartUrls.forEach((url) => {
          const productArgument = url.link.substring(25, url.link.length)
          gettingflipkartModelNo(productArgument).then((val) => {
            url.modelNo = val
          })
        })

        const flipInterval = setInterval(() => {
          let chk = true
          flipkartUrls.forEach((url) => {
            if (url.modelNo === undefined) chk = false
          })
          if (flipkartUrls.length !== 0 && chk === true) {
            clearInterval(flipInterval)
            console.log(flipkartUrls)
            setflipkartData(flipkartUrls)
          }
        }, 100)

        const amazInterval = setInterval(() => {
          let chk = true
          amazonUrls.forEach((url) => {
            if (url.modelNo === undefined) chk = false
          })
          if (amazonUrls.length !== 0 && chk === true) {
            clearInterval(amazInterval)
            console.log(amazonUrls)
            setamazonData(amazonUrls)
          }
        }, 100)
        // const compareProducts = setInterval(() => {
        //     compareProductFunc();
        // }, 100);
      } catch (err) {
        console.log(err)
        // history.push("/error404")
      }
    }
    funcForFetch()
    const gettingflipkartModelNo = async (productArgument) => {
      const config = { headers: { 'Content-Type': 'application/json' } }
      let res = await axios.get(
        'https://flipkart.dvishal485.workers.dev/product/' + productArgument,
        config
      )
      // console.log(res.data.specs[0].details[1].value);
      return res.data.specs[0].details[1].value
    }
    const gettingAmazonModelNo = async (productLink) => {
      // console.log("came");
      const config = {
        headers: { 'Content-Type': 'application/json', data: productLink },
      }
      let res = await axios.get('/api/amazon', config)
      // console.log(res.data.modelNumber);
      return res.data.modelNumber
    }
    // const compareProductFunc = () => {
    //     // console.log(flipkartData);
    //     // console.log(amazonData);
    //     if (flipkartData && amazonData) {
    //         const productsArray = []; let product;
    //         amazonData.forEach((amazon) => {
    //             flipkartData.forEach((flipkart) => {
    //                 if (amazon.modelNo == flipkart.modelNo) {
    //                     product = {
    //                         name: flipkart.name,
    //                         flipkartLink: flipkart.link,
    //                         amazonLink: amazon.query_url,
    //                         productImage: flipkart.thumbnail,
    //                         flipkartPrice: flipkart.current_price,
    //                         amazonPrice: amazon.price
    //                     }
    //                     productsArray.push(product);
    //                 }
    //             })
    //         })
    //         setProductData(productsArray);
    //         console.log(productData);
    //     }
    // }
  }, [location])
  useEffect(() => {
    if (flipkartData && amazonData) {
      const productsArray = []
      let product
      amazonData.forEach((amazon) => {
        let c = 0
        flipkartData.forEach((flipkart) => {
          console.log(amazon.modelNo.trim())
          console.log(flipkart.modelNo)
          if (
            !amazon.modelNo.trim().localeCompare(flipkart.modelNo) &&
            c === 0
          ) {
            c = 1
            product = {
              name: flipkart.name,
              flipkartLink: flipkart.link,
              amazonLink: amazon.product_link,
              productImage: flipkart.thumbnail,
              flipkartPrice: flipkart.current_price,
              amazonPrice: amazon.price,
            }
            productsArray.push(product)
          }
        })
      })
      setProductData(productsArray)
      console.log(productsArray)
    }
  }, [flipkartData, amazonData])
  return (
    <>
      {productData ? (
        <>
          <h1>Search Results</h1>
          <p>{`Showing  results for ${location.state.keyword}`} </p>
          <Row>
            {productData.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Product className='mx-3' product={product} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <h3>Loading..</h3>
      )}
    </>
  )
}

export default SearchResults
