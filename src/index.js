const express = require('express');
const app = express();

// Example of middleware
//
// Without middleware:   new request  -->  run route handler
//
// With middleware:      new request  -->  do something  -->  run route handler
//

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');


require('./db/mongoose');

const port = process.env.PORT

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('server up on port ' + port);
})

var pet = {
    name: 'Lucy'
}

pet.toJSON = function() {
    console.log(this);
    return this;
}

console.log(JSON.stringify(pet))

