const handleCalculation = (method, x, y) =>{
    switch(method.toLowerCase()){
        case 'subtract':
            return {result: x-y, operation: '-'};
        case 'multiply':
            return {result: x*y, operation: '*'};
        case 'divide':
            return {result: x/y, operation: '/'};
        case 'add':
            return {result: x+y, operation: '+'};
        default:
            return 'This is an invalid option';
    }
}

const validOptions = ['add', 'subtract', 'multiply', 'divide'];

const handleHttpCalculation = (request, response) => {
    request.query.x = parseInt(request.query.x);
    request.query.y = parseInt(request.query.y);
    const query = request.query;
    const x = parseInt(query.x);
    const y = parseInt(query.y);
    const method = query.method;

    if(isNaN(x) || isNaN(y)){
        return response.send('Both X and Y must be a number');
    }

    if(!method){
        return response.send(`Method must be included and be one of the following: ${
            validOptions.join(', ')
        }`);
    }

    const {operation, result} = handleCalculation(method, x, y);

    response.send(`${x} ${operation} ${y} = ${result}`);
    //Response.send("X + Y = RESULT");
}

module.exports = handleHttpCalculation;