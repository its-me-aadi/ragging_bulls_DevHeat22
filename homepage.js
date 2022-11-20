function darkMode() {
    var x = document.querySelector("body").style.backgroundColor;
    if (x =="white") {
        $("body").css("backgroundColor","black");
        $("body").css("color","white");
        $("i").css("color","goldenrod");
        $(".copyright p").css("color","goldenrod");


    }
    else {
        $("body").css("backgroundColor","white");
        $("body").css("color","black");
        $("i").css("color","black");
        $(".copyright p").css("color","black");

         }

}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function signUp(){
    var name=naMe();
    var userName=userName();
    passWord();
    alert("Congratulations "+ name+ "you have succefully regitered as "+ userName);
    $("h1").text("Welcome " + username);
    $(".topnav a")[4].fadeOut();
    $(".topnav a")[5].fadeOut();

  }
  function naMe(){
    var name=prompt("Please enter your name");
    if(name.length==0)
    {
      alert("Please enter your name");
      naMe();
    }
    userName();
    return name;
  }
  function userName(){
    var userName=prompt("Please enter your username");
    if(userName.length==0)
    {
      alert("Please enter your name");
      userName();
    }
    passWord();
    return userName;
  }
  function passWord(){
    var pass1=prompt("Please enter your pass");
    var pass2=prompt("Please confirm your pass");
    if(pass1==pass2 && pass1.length!==0)
     {  return pass1;
     }
    else{
      if(pass1.length===0)
      {
        alert("Please enter password")
        paaWord();
      }
      alert("Password entered doesn't match");
        passWord();
    }
  }
  function logIn(){
    var name=prompt("Please enter your username");
    var pass=prompt("Please enter your pass");
    $("h1").text("Welcome " + name);

  }
  function repeatXI(callback, interval, repeat, immediate) {
      repeat = typeof repeat == 'undefined' ? -1 : repeat;
      interval = interval <= 0 ? 1000 : interval;
      immediate = typeof immediate == 'undefined' ? false : immediate;
      var offset = immediate ? 0 : 1;
      var id = null;
      if (repeat > 0) {
          for (var i = 0; i < repeat; i++) {
              id = setTimeout(callback, interval * (i + offset));
          }
      } else {
          id = setInterval(callback, interval);
      }
      return id;
  }
  var repeatFunction1=function(){
  document.querySelectorAll(".reviews")[0].setAttribute("src","stylesheets/images/review4.jpg");
  document.querySelectorAll(".reviews")[1].setAttribute("src","stylesheets/images/review5.jpg");
  document.querySelectorAll(".reviews")[2].setAttribute("src","stylesheets/images/review6.jpg");
}
  repeatXI(repeatFunction1,2000);
  var repeatFunction2=function(){

  }
        var myIndex = 0;
        carousel();

        function carousel() {
            var i;
            var x = document.getElementsByClassName("stock-images");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) {
                myIndex = 1
            }
            x[myIndex - 1].style.display = "block";
            setTimeout(carousel, 2000);
        }