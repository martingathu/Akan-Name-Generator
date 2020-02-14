function getDay(name){
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    var year = document.getElementById("year").value;
    var century = year.slice(0, 1);
    var years = year.slice(2, 3);

    if (month === "" || month < 1 || month > 12 || date === "" || date < 0 || date > 31 || year === "" || year.length > 4 || name === ""){
        alert("Confirm that you have entered the correct information!")
    }else{
        var day = Math.floor((((century/4)-2*century-1)+((5*years/4))+((26*(month+1)/10)) + date) % 7);
        return day
    }
}

function getGender(){
    var radio = document.getElementsByName("gender");  

    for (var i = 0; i < radio.length; i++){
        if (radio[i].checked){
            var gender = radio[i].value;
            return gender;
        }
    }
}

