const products = [
  {
    _id: '1',
    name: 'Apple Iphone 12 (128 gb) Blue',
    productImage: './images/iphone12.jpg',
    brand: 'Apple',
    flipkartPrice: 65000,
    amazonPrice: 62000,
    flipkartLink:
      'https://www.flipkart.com/realme-5s-crystal-blue-128-gb/p/itm592977b0ba210?pid=MOBFM2WZW8VZEXK3&lid=LSTMOBFM2WZW8VZEXK39K1SNR&marketplace=FLIPKART&q=realme+8s&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_HistoryAutoSuggest_1_2_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_2_na_na_na&fm=search-autosuggest&iid=4b802764-47b6-4cf7-8e9d-1fa6f3f1d31d.MOBFM2WZW8VZEXK3.SEARCH&ppt=hp&ppn=homepage&ssid=6w28xqj15c0000001648445652769&qH=374abf1f1709c707',
    amazonLink:
      'https://www.amazon.in/realme-Oxygen-Storage-Processor-Battery/dp/B09FKD67CS/ref=sr_1_2?crid=1JIHOJZTZX33J&keywords=realme+narzo+50a&qid=1648445814&s=electronics&sprefix=real%2Celectronics%2C620&sr=1-2',
  },
  {
    _id: '2',
    name: 'Apple Iphone 12 (128 gb) Blue',
    productImage: './images/iphone12.jpg',
    brand: 'Apple',
    flipkartPrice: 65000,
    amazonPrice: 62000,
    flipkartLink:
      'https://www.flipkart.com/realme-5s-crystal-blue-128-gb/p/itm592977b0ba210?pid=MOBFM2WZW8VZEXK3&lid=LSTMOBFM2WZW8VZEXK39K1SNR&marketplace=FLIPKART&q=realme+8s&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_HistoryAutoSuggest_1_2_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_2_na_na_na&fm=search-autosuggest&iid=4b802764-47b6-4cf7-8e9d-1fa6f3f1d31d.MOBFM2WZW8VZEXK3.SEARCH&ppt=hp&ppn=homepage&ssid=6w28xqj15c0000001648445652769&qH=374abf1f1709c707',
    amazonLink:
      'https://www.amazon.in/realme-Oxygen-Storage-Processor-Battery/dp/B09FKD67CS/ref=sr_1_2?crid=1JIHOJZTZX33J&keywords=realme+narzo+50a&qid=1648445814&s=electronics&sprefix=real%2Celectronics%2C620&sr=1-2',
  },
  {
    _id: '3',
    name: 'Apple Iphone 12 (128 gb) Blue',
    productImage: './images/iphone12.jpg',
    brand: 'Apple',
    flipkartPrice: 65000,
    amazonPrice: 62000,
    flipkartLink:
      'https://www.flipkart.com/realme-5s-crystal-blue-128-gb/p/itm592977b0ba210?pid=MOBFM2WZW8VZEXK3&lid=LSTMOBFM2WZW8VZEXK39K1SNR&marketplace=FLIPKART&q=realme+8s&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_HistoryAutoSuggest_1_2_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_2_na_na_na&fm=search-autosuggest&iid=4b802764-47b6-4cf7-8e9d-1fa6f3f1d31d.MOBFM2WZW8VZEXK3.SEARCH&ppt=hp&ppn=homepage&ssid=6w28xqj15c0000001648445652769&qH=374abf1f1709c707',
    amazonLink:
      'https://www.amazon.in/realme-Oxygen-Storage-Processor-Battery/dp/B09FKD67CS/ref=sr_1_2?crid=1JIHOJZTZX33J&keywords=realme+narzo+50a&qid=1648445814&s=electronics&sprefix=real%2Celectronics%2C620&sr=1-2',
  },
  {
    _id: '4',
    name: 'Apple Iphone 12 (128 gb) Blue',
    productImage: './images/iphone12.jpg',
    brand: 'Apple',
    flipkartPrice: 65000,
    amazonPrice: 62000,
    flipkartLink:
      'https://www.flipkart.com/realme-5s-crystal-blue-128-gb/p/itm592977b0ba210?pid=MOBFM2WZW8VZEXK3&lid=LSTMOBFM2WZW8VZEXK39K1SNR&marketplace=FLIPKART&q=realme+8s&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_HistoryAutoSuggest_1_2_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_2_na_na_na&fm=search-autosuggest&iid=4b802764-47b6-4cf7-8e9d-1fa6f3f1d31d.MOBFM2WZW8VZEXK3.SEARCH&ppt=hp&ppn=homepage&ssid=6w28xqj15c0000001648445652769&qH=374abf1f1709c707',
    amazonLink:
      'https://www.amazon.in/realme-Oxygen-Storage-Processor-Battery/dp/B09FKD67CS/ref=sr_1_2?crid=1JIHOJZTZX33J&keywords=realme+narzo+50a&qid=1648445814&s=electronics&sprefix=real%2Celectronics%2C620&sr=1-2',
  },
  {
    _id: '5',
    name: 'Apple Iphone 12 (128 gb) Blue',
    productImage: './images/iphone12.jpg',
    brand: 'Apple',
    flipkartPrice: 65000,
    amazonPrice: 62000,
    flipkartLink:
      'https://www.flipkart.com/realme-5s-crystal-blue-128-gb/p/itm592977b0ba210?pid=MOBFM2WZW8VZEXK3&lid=LSTMOBFM2WZW8VZEXK39K1SNR&marketplace=FLIPKART&q=realme+8s&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_HistoryAutoSuggest_1_2_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_2_na_na_na&fm=search-autosuggest&iid=4b802764-47b6-4cf7-8e9d-1fa6f3f1d31d.MOBFM2WZW8VZEXK3.SEARCH&ppt=hp&ppn=homepage&ssid=6w28xqj15c0000001648445652769&qH=374abf1f1709c707',
    amazonLink:
      'https://www.amazon.in/realme-Oxygen-Storage-Processor-Battery/dp/B09FKD67CS/ref=sr_1_2?crid=1JIHOJZTZX33J&keywords=realme+narzo+50a&qid=1648445814&s=electronics&sprefix=real%2Celectronics%2C620&sr=1-2',
  },
  {
    _id: '6',
    name: 'Apple Iphone 12 (128 gb) Blue',
    productImage: './images/iphone12.jpg',
    brand: 'Apple',
    flipkartPrice: 65000,
    amazonPrice: 62000,
    flipkartLink:
      'https://www.flipkart.com/realme-5s-crystal-blue-128-gb/p/itm592977b0ba210?pid=MOBFM2WZW8VZEXK3&lid=LSTMOBFM2WZW8VZEXK39K1SNR&marketplace=FLIPKART&q=realme+8s&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_HistoryAutoSuggest_1_2_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_2_na_na_na&fm=search-autosuggest&iid=4b802764-47b6-4cf7-8e9d-1fa6f3f1d31d.MOBFM2WZW8VZEXK3.SEARCH&ppt=hp&ppn=homepage&ssid=6w28xqj15c0000001648445652769&qH=374abf1f1709c707',
    amazonLink:
      'https://www.amazon.in/realme-Oxygen-Storage-Processor-Battery/dp/B09FKD67CS/ref=sr_1_2?crid=1JIHOJZTZX33J&keywords=realme+narzo+50a&qid=1648445814&s=electronics&sprefix=real%2Celectronics%2C620&sr=1-2',
  },
]

export default products
