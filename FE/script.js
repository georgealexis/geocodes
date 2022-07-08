function createRecord() {
    //defined createRecord
    var inputWritten = document.getElementById("input").value;
    //defined inputWritten as the value written in the textbox.
    alert(inputWritten + ' has been submitted');
    // pop up alert with input written in the textbox + has been submitted

    fetch("http://localhost:8080/mod2and3",
        // Sending the data to the server
        {
            method: "POST", //creating new resource(input)
            headers: {
                'Content-Type': 'application/json' // to expect a json data
            },
            body: JSON.stringify({ //create JS object into strings
                "data": inputWritten
            }),
        })
}

