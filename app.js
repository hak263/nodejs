const express = require('express')
global.app = express()
global.path = require('path');
global.base_path = path.join(__dirname,'');
const port = 4200


//definied dynamic input fields
global.input_fields = [
  {
    'label':'Name',
    'name':'name',
    'type':'text',
    'required':'required',
    'required_front':'required',
  },
  {
    'label':'Email',
    'name':'email',
    'type':'email',
    'required':'required',
    'required_front':'required',
  }
 ];


require('./route/router-controller')


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})