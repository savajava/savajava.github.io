![pic](https://user-images.githubusercontent.com/108166534/179156326-f1183fb8-9277-4cce-a19a-482d5525ead5.png)


# SavaJava™ - Global Stocks Dividend History Data Search Engine


## Client powered by [Vue JS](https://vuejs.org/guide/introduction.html) & Server powered by [Node JS](https://nodejs.org/en/docs/)

## For Developers Use Case Guide
### How to Consume this API
#### To get API for Nasdaq (US) stocks:
• Simply type the target Stock’s ticker symbols into the Param’s field in the endpoint [eg: MSFT for Microsoft or AAPL for Apple]
• You can also refer this website to reconfirm the NASDAQ stock’s ticker symbols should you need assistance (https://www.nasdaq.com/market-activity/stocks/screener)

#### To get API for SGX (Singaporean) stocks:
• Simply type the target Stock’s ticker symbols and append this string ‘.SI’ into the Param’s field in the endpoint [eg: Z74.SI for Singapore Telecommunications Limited or D05.SI for DBS Group Holdings Ltd]
• You can also refer this website to reconfirm the SGX stock’s ticker symbols should you need assistance (https://www.sgx.com/securities/stock-screener)

#### To get API for KLSE (Malaysian) stocks:
• Simply type the target Stock’s ticker symbols and append this string ‘.KL’ into the Param’s field in the endpoint [eg: 1155.KL for Malayan Banking Berhad or 3182.KL for Genting Berhad]
• You can also refer this website to reconfirm the KLSE stock’s ticker symbols should you need assistance (https://www.bursamalaysia.com)

<hr/>

### Steps of Use

![image](https://user-images.githubusercontent.com/108166534/179156619-ea4dbe17-0809-4973-ba00-6180b001568d.png)
Figure 1.1 - Click <kbd>For Developers</kbd>


![image](https://user-images.githubusercontent.com/108166534/179156783-d9f39e11-eb8a-4bf5-aece-d942a7816ac2.png)
![image](https://user-images.githubusercontent.com/108166534/179157351-935befb0-18ea-4143-ada8-ab814dce251f.png)
Figure 1.2 & 1.3 - Select the 'Stock Exchange', Input your unique API Key (if you dont have one, you can purchase it [here](https://www.linkedin.com/in/rajaruban-rajindram/) by DM me or subscribe for free [here](https://rapidapi.com/moneygoddess888/api/nasdaq-stocks-dividend-history-live)), lastly type the target stock quote [eg: AAPL for Apple Inc] and click <kbd>Search</kbd>.


![image](https://user-images.githubusercontent.com/108166534/179157464-1ca46a68-9617-4dea-bce5-c1e3a5996eb4.png)
Figure 1.4 - Data in JSON format will be loaded and ready for integration for your projects.

![image](https://user-images.githubusercontent.com/108166534/179157941-a8962074-b2ce-4751-8a9d-6dd644eda692.png)
Figure 1.5 - Server denies requests if you had entered the wrong API Key.

<hr/>

## For Web Search - Use Case Guide

![image](https://user-images.githubusercontent.com/108166534/179158108-f56e6142-777d-4438-91e5-b6dad8969630.png)
![image](https://user-images.githubusercontent.com/108166534/179158846-4da7d77d-4315-4dd9-9d12-bcdae3e92314.png)
Figure 2.1 & 2.2 - Click <kbd>Back to Web Search</kbd> if you are in Developer mode, or if you are in Web Search mode, just select 'Stock Exchange', and type the target stock name or stock quote depending on your convenience (eg: both searching AAPL or Apple Inc or Apple are acceptable since web search is equipped with Advanced Dynamic Search algorithm to cater for better user experience), lastly click <kbd>Search</kbd> or press <kbd>Enter</kbd>.

#### Sample for Dividend Stock Output
![image](https://user-images.githubusercontent.com/108166534/179158819-a9530e74-cf69-4fc6-9698-24e781ed3184.png)
![image](https://user-images.githubusercontent.com/108166534/179159105-94d972b6-b13e-4fe5-bd89-c9fb3b4aae5c.png)
![image](https://user-images.githubusercontent.com/108166534/179159127-b6aea241-02e7-422c-9545-891dc2c62218.png)

#### Sample for Non-Dividend Stock Output
![image](https://user-images.githubusercontent.com/108166534/179159449-e914af84-dec3-42a6-b59b-8bdefa2885b2.png)

Figure 2.3, 2.4, 2.5 & 2.6 - After gathering data and performing analysis at the server side, details of the searched stock is loaded onto the screen and reaady for your research and analysis. The data will be displayed into 3 section, Dividend Analysis, Fundamentals and Dividend History. For non Dividend stocks, only Fundamentals will be displayed.

#### Toggle Dark/Light Mode
![image](https://user-images.githubusercontent.com/108166534/179159521-4d0b0732-8dd0-4478-b72f-32d364083d9d.png)
Figure 2.7 - Light Mode


![image](https://user-images.githubusercontent.com/108166534/179159812-992cf33c-235a-46d8-a49d-9f03210e385a.png)
Figure 2.8 - Dark Mode

Note: To change your preferred view mode, you can press the toggle dark mode button on top right section of the screen

<hr/>

### Currently this API supports only for Nasdaq, SGX and KLSE exchanges. Effort to include all exchanges in the works.

<hr/>

## Visit [here](https://savajava.github.io)


