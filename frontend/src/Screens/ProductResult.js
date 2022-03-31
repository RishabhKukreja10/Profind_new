import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loader from '../components/Loader'
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
        //console.log(flipkartUrlsRes);
        const flipkartUrls = flipkartUrlsRes.slice(
          0,
          flipkartUrlsRes.length > 3 ? 15 : flipkartUrlsRes.length
        )
        const amazonUrls = amazonUrlsRes.slice(
          0,
          amazonUrlsRes.length > 3 ? 15 : amazonUrlsRes.length
        )

        console.log(flipkartUrls);
        console.log(amazonUrls);


        setamazonData(amazonUrls)
        setflipkartData(flipkartUrls)



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

      } catch (err) {
        console.log(err)

      }
    }
    funcForFetch()


  }, [location])

  useEffect(() => {
    const color_arr = new Map([["Blue", 1], ["Green", 1], ["Red", 1], ["Orange", 1], ["Voilet", 1], ["Indigo", 1], ["Yellow", 1], ["Black", 1], ["White", 1], ["Golden", 1],
    ["Red", 1], ["Pink", 1], ["Purple", 1], ["Gold", 1], ['Lavender', 1], ['Graphite', 1]]);

    function fun_flip(str) {
      var ind = str.indexOf('(');
      var name = str.slice(0, ind).trim();
      var res = str.slice(ind, str.length);
      var ind2 = str.indexOf('(');
      var specs = res.slice(1, res.length);
      var color = specs.slice(0, specs.indexOf(','));
      const arr = color.split(" ");
      arr.forEach(ele => {
        if (color_arr.has(ele)) color = ele;
      });
      var rom = specs.slice(specs.indexOf(',') + 1, specs.length - 1).trim();
      var key = name + '_' + color + '_' + rom;

      //console.log(key);
      let regx_flip = name + color + rom;
      return regx_flip;
    }

    function fun_ama(str) {
      var ind = str.indexOf('(');
      var name = str.slice(0, ind).trim();
      var res = str.slice(ind, str.length);
      var color = ""
      var in_rom = str.indexOf('GB');
      var rom = "";
      if (str[str.indexOf('GB S')]) {
        var in_rom = str.indexOf('GB S');
        if (str[in_rom - 1] == ' ') {
          rom = str.slice(in_rom - 3, in_rom).trim() + " GB";
          if (rom == "28") rom = "128 GB";
          if (rom == "56") rom = "256 GB";
        }
        else {
          rom = str.slice(in_rom - 2, in_rom).trim() + " GB";
          if (rom == "28 GB") rom = "128 GB";
          if (rom == "56 GB") rom = "256 GB";
        }
      }
      else {
        if (str[in_rom - 1] == ' ') {
          rom = str.slice(in_rom - 3, in_rom).trim() + " GB";
          if (rom == "28") rom = "128 GB";
          if (rom == "56") rom = "256 GB";
        }
        else {
          rom = str.slice(in_rom - 2, in_rom).trim() + " GB";
          if (rom == "28 GB") rom = "128 GB";
          if (rom == "56 GB") rom = "256 GB";
        }
      }
      var str_rem = str.replace(/[^a-zA-Z0-9 ]/g, "")
      const temp = str_rem.split(" ");

      temp.forEach(ele => {
        if (color_arr.has(ele)) color = ele;
      });

      console.log(str_rem)

      //console.log(amazon);
      let regx_ama = name + color + rom;
      return regx_ama;
    }

    if (flipkartData && amazonData) {
      const productsArray = []
      let product

      amazonData.forEach((amazon) => {
        let c = 0
        let regx_ama = fun_ama(amazon.name);

        flipkartData.forEach((flipkart) => {
          //console.log(amazon.modelNo.trim())
          //console.log(flipkart.modelNo)

          let regx_flip = fun_flip(flipkart.name)
          // console.log("amazon : " + regx_ama);
          // console.log("flipkart :" + regx_flip);
          if (regx_ama.toLowerCase() === regx_flip.toLowerCase() && c === 0) {
            // console.log("success" + regx_ama)
            c = 1
            product = {
              name: amazon.name,
              flipkartLink: flipkart.link,
              amazonLink: amazon.product_link,
              productImage: amazon.image,
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
    <div className='contain_detail'>
      {productData ? (
        <>
          <h1>Search Results</h1>
          <p>Showing 1 – {productData.length} of {productData.length} results for "{location.state.keyword}"</p>
          <Row>
            {productData.map((product) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                  <Product className='mx-3' product={product} />
                </Col>
            ))}
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}
export default SearchResults