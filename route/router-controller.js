const { Validator } = require('node-input-validator');
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');

//use bodyParser() to let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log(base_path,'base_path')

//get first page
app.get('/', (req, res) => {
    res.render(base_path+'/views/dashboard')
  
})
//get welcome page
app.get('/welcome', (req, res) => {
    res.render(base_path+'/views/welcome')
  
})

//get registration page
app.get('/registration', (req, res) => {
res.render(base_path+'/views/registration',{
    input_fields: input_fields,
    error:'',
    data:'',
})

})

//pluck name, and requird parameter for form validation
const validation_json = {};
for (let index = 0; index < input_fields.length; index++) {
 const element = input_fields[index];
 if(element.name=='required'){
     validation_json[element.name] = element.required;
 }
}

  
//registration post route  
app.post('/register', function (req, res) {
    const v = new Validator(req.body, validation_json);

    v.check().then((matched) => {
        if (!matched) {
            res.render(base_path+'/views/registration',{
                input_fields: input_fields,
                error : v.errors,
                data:req.body,
            })
        }
        res.status(200);
        res.redirect('welcome');
    });
});