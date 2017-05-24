<<<<<<< HEAD
﻿function Ajaxcall(params, method) {
    var resData;
    $.ajax({
        url: '/' + method,
        type: 'POST',
        data: params,
        dataType: 'json',
        async:false,
        success: function (data) {
            resData = data;
        },
        error: function (error, status, text) {
            console.log("Error: " + JSON.stringify(error))
            console.log("Status Code: " + status)
            console.log("statusText: " + text)
            alert("An error has occurred")
            $('#info').html('<p>An error has occurred</p>');
            resData = "Something went be wrong!!";
        },        
    });
    return resData;
=======
﻿function Ajaxcall(params, method) {
    var resData;
    $.ajax({
        url: '/' + method,
        type: 'POST',
        data: params,
        dataType: 'json',
        async:false,
        success: function (data) {
            resData = data;
        },
        error: function (error, status, text) {
            console.log("Error: " + JSON.stringify(error))
            console.log("Status Code: " + status)
            console.log("statusText: " + text)
            alert("An error has occurred")
            $('#info').html('<p>An error has occurred</p>');
            resData = "Something went be wrong!!";
        },        
    });
    return resData;
>>>>>>> 66925e438971fba0d55270d65924dc2ad048bd11
}