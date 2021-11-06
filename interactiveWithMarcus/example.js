const axios = require('axios').default

// axios.get('https://gorest.co.in/public/v1/users/2285')
// //Resolvethe promise

// //Do something with it
// .then(response => {
//   console.log(response.data.data)
// })

// .catch(error => {
//   console.log('THIS IS AN ERROR', error)
// })

// axios.get('https://marcusbassportfolioserver.herokuapp.com/customers/1')
// .then(response => {
//   console.log(response.data)
// })
// .catch(error => {
//   console.log('THIS IS AN ERROR', error)
// })

axios.post('https://marcusbassportfolioserver.herokuapp.com/customers', {
    'email': 'NicetryMarcus@yearight.com',
    'first_name': 'Christian',
    'last_name': 'Colson',
    'ip': '101.202.303',
    'latitude': 100100200,
    'longitude': 200200300,
    'created_at': '03/15/2019',
    'updated_at': '03/15/2019'
})
.then(response => {
  console.log(response.data)
})
.catch(error => {
  console.log('THIS IS AN ERROR', error)
})