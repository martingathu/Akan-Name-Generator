function getDay(name){
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    var year = document.getElementById("year").value;
    var century = year.slice(0, 1);
    var years = year.slice(2, 3);
      
    if (year === "" || year.length > 4){
        alert("Invalid year!");
    }else if (month === "" || month < 1 || month > 12){
        alert("Invalid Month!");
    }else if (date === "" || date < 0 || date > 31){
        alert("Invalid date!");
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

function getName(){
    var name =  document.getElementById("name").value;

    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var day=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"]

    if (getGender() === "male" && getDay()>=0){
        document.getElementById("post").innerHTML =( "Hello ") + (document.getElementById("name").value) + (" if you were Born in Ghana and your Gender is a Male then your Akan Name is " ) + male[getDay(name)] + (" since you were born on ") + day[getDay(name)];
    }else if(getGender() === "female" && getDay()>=0){
        document.getElementById("post").innerHTML =( "Hello ") + (document.getElementById("name").value) + (" if you were Born in Ghana and your Gender is a Female then your Akan Name is " ) +female[getDay(name)]+ (" since you were born on ") + day[getDay(name)];
    }else{
        alert("Confirm that you have entered all information correctly")
    }
}
//Hide/show form on click
function myFunction() {
    var showform = document.getElementById("myForm");
    showform.style.display = "block";
  }