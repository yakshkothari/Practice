var a
var b
var c
var z = "Your result is: "

var f

addNumbers = () =>{
    a = document.getElementById('inputA').value;
    b = document.getElementById('inputB').value;
    c = parseInt(a) + parseInt(b)
    // console.log(typeof c);
    document.getElementById('result').innerHTML = z + c;
};

subtractNumbers = () =>{
    a = document.getElementById('inputA').value;
    b = document.getElementById('inputB').value;
    c = parseInt(a) - parseInt(b)
    // console.log(typeof c);
    document.getElementById('result').innerHTML = z + c;
};

multiplyNumbers = () =>{
    a = document.getElementById('inputA').value;
    b = document.getElementById('inputB').value;
    c = parseInt(a) * parseInt(b)
    // console.log(typeof c);
    document.getElementById('result').innerHTML = z + c;
};

divideNumbers = () =>{
    a = document.getElementById('inputA').value;
    b = document.getElementById('inputB').value;
    c = parseInt(a) / parseInt(b)
    // console.log(typeof c);
    document.getElementById('result').innerHTML = z + c;
};

fetchData1 = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then( (response ) =>{
        console.log(response)
        return response.json()

    })
    .then((data) =>{
        console.log(data)
        return
    })
}

fetchData2 = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) =>{
        console.log(response)
        return response.json()
    })
    .then((data) =>{
        console.log(data)
        console.log(typeof data)
        console.log(data.isA)
        return
    })
}
