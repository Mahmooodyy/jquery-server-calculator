$(onReady); // onReady function created

function onReady() {
    console.log('and awaaaaaayyyyy we go');
    // click listener for picking an operator
    $('.mathButton').on('click', handleOperator);
    // click listener for submiting the equation
    $('.submitButton').on('click', handleSubmit);
    // click listener for clearing input fields
    // $('.clearButton').on('click', handleClear);

    getMath(); // for later
}

let serverData = {}; // object for sending data to server
let domData = []; // for appending to history


function getMath() {
    console.log('start of get math');
    // Get math 
    $.ajax({
        url: '/math',
        method: 'GET',
    }).then(function (response) {
        response
        array = response.array
        console.log(response)

        // render to DOM
        // render(response);
    }).catch(function(error){

        console.log(error);
        alert('ERROR IN GET /math')
    })
    console.log('end of get math');
}

function handleOperator() {
    let operator = $(this).data('math');
    // create an operator property for sending to server
    serverData.operator = operator;
};

function handleSubmit(){
    let input1 = parseInt($('input1').val());
    let input2 = parseInt($('input2').val());
    // create input properties for both values to send to server
    serverData.input1 = input1; //
    serverData.input2 = input2;

    $.ajax({
        url: '/math',
        method: 'POST',
        data: serverData // data here becomes req.body on the server
    }).then(function(response){
        console.log(response);

        // trigger a get!!!
        getMath(); // for later
    })
}

function handleSubmit(){
    // 
    let firstNumber = parseInt($('input1').val())
    let secondNumber = parseInt($('input2').val())
    // again create properties for the two input numbers
    serverData.firstNumber = firstNumber
    serverData.secondNumber = secondNumber
    
    // postMath() // for later
}

