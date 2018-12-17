function calcDays (){
    var age = document.getElementById('number').value;
    var out = document.getElementById('output');
    var exactDay = document.getElementById('day');
    age = new Date(age);
    var today = new Date();
    exactDay = age.getFullYear();
    var oneDay = 24*60*60*1000;
    var days = Math.round(Math.abs((age.getTime() - today.getTime())/(oneDay)));
    var years = Math.floor(days / 365.25);
    if (age > today) {
        out.innerHTML = "Hello Time Traveller <br> We hope you come in peace <br> <img src=\"https://static8.depositphotos.com/1030387/806/v/950/depositphotos_8069599-stock-illustration-time-machine.jpg/350x350\">";
    }
    else if (exactDay <= 2018 && exactDay > 2016) {
        out.innerHTML = "You're an infant <br> Birth Year: " + exactDay + "<br> Age: " + years + " years old.<br>You have lived for exactly " + days  + " days <br> <img src=\"https://st2.depositphotos.com/4924123/7385/v/950/depositphotos_73856233-stock-illustration-little-baby-boy-and-baby.jpg/350x350\">";
    }
    if (years === 1) {
        out.innerHTML = "You're an infant <br> Birth Year: " + exactDay + "<br> Age: " + years + " year old.<br>You have lived for exactly " + days  + " days <br> <img src=\"https://st2.depositphotos.com/4924123/7385/v/950/depositphotos_73856233-stock-illustration-little-baby-boy-and-baby.jpg/350x350\">";
    }
    else if (exactDay <= 2016 && exactDay > 2014) {
        out.innerHTML = "You're a Toddler <br> Birth Year: " + exactDay + "<br> Age: " + years + " years old.<br>You have lived for exactly " + days  + " days <br> <img src=\"https://static4.depositphotos.com/1001911/324/v/950/depositphotos_3240872-stock-illustration-baby-hug-bear.jpg/350x350\">";
    }
    else if (exactDay <= 2014 && exactDay > 2009) {
        out.innerHTML = "You're a Child <br> Birth Year: " + exactDay + "<br> Age: " + years + " years old.<br>You have lived for exactly " + days  + " days <br> <img src=\"https://static3.depositphotos.com/1005091/200/v/950/depositphotos_2009080-stock-illustration-school-bus-with-children.jpg/350x350\" width=\"200px\" height=\"150px\">";
        
    }
    else if (exactDay <= 2009 && exactDay > 2004) {
        out.innerHTML = "You're in Early Adolescence <br> Birth Year: " + exactDay + "<br> Age: " + years + " years old.<br>You have lived for exactly " + days  + " days <br> <img src=\"https://st.depositphotos.com/1354412/1284/v/950/depositphotos_12842428-stock-illustration-teenage-boy-popping-a-big.jpg/350x350\">";
    }
    else if (exactDay <= 2004 && exactDay > 1999) {
        out.innerHTML = "You're in Older Adolescence <br> Birth Year: " + exactDay + "<br> Age: " + years + " years old.<br>You have lived for exactly " + days  + " days <br> <img src=\"https://static9.depositphotos.com/1070459/1167/v/950/depositphotos_11677569-stock-illustration-cool-couple.jpg/350x350\">";
        
    }
    else if (exactDay <= 1999 && exactDay > 1987) {
        out.innerHTML = "You're an Adult <br> Birth Year: " + exactDay + "<br> Age: " + years + " years old.<br>You have lived for exactly " + days  + " days <br> <img src=\"https://static7.depositphotos.com/1245125/749/v/950/depositphotos_7491251-stock-illustration-graduation-girl.jpg/350x350\">";
    }
        if (years === 18 || years === 21) {
        out.innerHTML = "Congratulations, You're legal <br> Birth Year: " + exactDay + "<br> Age: " + years + " years old.<br>You have lived for exactly " + days  + " days <br> <img src=\"https://static7.depositphotos.com/1245125/749/v/950/depositphotos_7491251-stock-illustration-graduation-girl.jpg/350x350\">";
    }
    else if (exactDay <= 1987 && exactDay > 1967) {
        out.innerHTML = "You're Middle Aged <br> Birth Year: " + exactDay + "<br> Age: " + years + " years old.<br>You have lived for exactly " + days  + " days <br> <img src=\"https://st2.depositphotos.com/1667027/7980/v/950/depositphotos_79800494-stock-illustration-mature-business-woman.jpg/350x350\">";
    }
    if (years === 40) {
        out.innerHTML = "Congratulations, life begins at 40 <br> Birth Year: " + exactDay + "<br> Age: " + years + " years old.<br>You have lived for exactly " + days  + " days <br> <img src=\"https://st2.depositphotos.com/1667027/7980/v/950/depositphotos_79800494-stock-illustration-mature-business-woman.jpg/350x350\">";
    }
    else if (exactDay <= 1967 && exactDay > 1896) {
        out.innerHTML = "You're Old Aged <br> Birth Year: " + exactDay + "<br> Age: " + years + " years old.<br>You have lived for exactly " + days  + " days <br> <img src=\"https://st.depositphotos.com/1667027/3933/v/950/depositphotos_39330239-stock-illustration-happy-old-couple.jpg/350x350\" width=\"200px\" height=\"150px\">";
    }
        else if (exactDay <= 1896) {
        out.innerHTML = "You're Immortal <br> Birth Year: " + exactDay + "<br> Age: " + years + " years old.<br>You have lived for exactly " + days  + " days <br> <img src=\"https://st2.depositphotos.com/1967477/7245/v/950/depositphotos_72457769-stock-illustration-cartoon-zeus-holding-thunderbolt.jpg/350x350\">";
    }
}