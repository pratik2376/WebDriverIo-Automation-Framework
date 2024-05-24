const homePageTestData = {
    loginCredentials: {
      validUser: {
        username: 'user@example.com',
        password: 'password123'
      },
      invalidUser: {
        username: 'invaliduser@example.com',
        password: 'invalidpassword'
      }
    },
    productData: {
      products: [
        {
          name: 'Product A',
          price: 19.99,
          quantity: 5
        },
        {
          name: 'Product B',
          price: 29.99,
          quantity: 10
        },
        // Add more product data as needed
      ]
    }
  };
  
  module.exports = homePageTestData;
  