
var forNav = `
			<nav class="">
				<div class ="ovrAuto w-80 m-auto">
					<ul class="f-left">
						<li class="navItem"><a class="navLogo" href="#">TRAVELLERS<img class="logo" width="100px" height="60px" src="images/logo.png"/></a></li>
					</ul>
					<ul class="f-right ovrAuto">
						<li class="navItem"><a id="homeLink" class="navLink" href="index.html">Home</a></li>
						<li class="navItem"><a id="portLink" class="navLink" href="Portfolio.html">Portfolio</a></li>
						<li class="navItem"><a id="aboutLink" class="navLink" href="Aboutus.html">About us</a></li>
						<li class="navItem"><a id="loginLink" class="navLink" href="signup.html">Logout</a></li>
						<div class="clr"></div>
					</ul>
					<div class="clr"></div>
				</div>
			</nav>`;

var forFotter = `
			<div class="fotter w-80 m-auto">

                <div class="ovrAuto fotterHead">
                    <h3 class="f-left text-white">Contact Us NOW!</h3>
                    <div class="f-right">
                        <span class="text-white"> <i class="fa fa-whatsapp"></i> (+20) 123 456 89</span>
                        <span class="text-black"> <i class="fa fa-envelope-o"></i> webteam@gmail.com</span>
                    </div>
                </div>
                
                <hr>

                <div class="fotterBody ovrAuto">
                    <div class="desc f-left">
                        <a class="navLogo" href="#">TRAVELLERS<img class="logo" width="100px" height="60px" src="images/logoW.png"/></a>
                        <p>Any Question?? Let us know in store at 625 Gloria Union, Cairo, Egypt or call us on (+20) 12345689.</p>
                        <i class="fa fa-2x fa-facebook-official"></i>
                        <i class="fa fa-2x fa-google-plus-square"></i>
                        <i class="fa fa-2x fa-twitter"></i>
                        <i class="fa fa-2x fa-whatsapp"></i>
                    </div>

                    <div class="ovrAuto descF f-right">

                        <div class="des">
                            <p>Information</p>
                            <ul>
                                <li>-Purchase</li>
                                <li>-Payment</li>
                                <li>-Shopping</li>
                                <li>-Return</li>
                            </ul>
                        </div>

                        <div class="des">
                            <p>Follow</p>
                            <ul>
                                <li>-Facebook</li>
                                <li>-Instagram</li>
                                <li>-Twitter</li>
                                <li>-Whatsapp</li>
                            </ul>
                        </div>

                        <div class="des">
                            <p>Most flight</p>
                            <ul>
                                <li>-New York</li>
                                <li>-London</li>
                                <li>-Russia</li>
                                <li>-Fukuoka</li>
                            </ul>
                        </div>

                        <div class="des">
                            <p>&nbsp;</p>
                            <ul>
                                <li>-Jakarta</li>
                                <li>-Brisbane</li>
                                <li>-Mexico City</li>
                                <li>-Hong Kong</li>
                            </ul>
                        </div>

                        

                        <div class="clr"></div>
                    </div>
                    <div class="clr"></div>

                </div>

                <p>copyright &copy;2020 All rights reserved | This template is made with <i class="fa fa-heart"></i> by <span>Dominators</span> team.</p>

            </div>
`;


var nav = document.getElementById("forNav");
var fotter = document.getElementById("forFotter");

if(document.title == "home" || document.title == "portfolio" || document.title == "aboutus")
{
    nav.innerHTML = (forNav);
    fotter.innerHTML = (forFotter);

    if(document.title == "home")
    {
        document.getElementById("homeLink").classList.add("forAct")
    }
    else if(document.title == "portfolio")
    {
        document.getElementById("portLink").classList.add("forAct")
    }
    else if(document.title == "aboutus")
    {
        document.getElementById("aboutLink").classList.add("forAct")
    }

}



var links = document.getElementsByClassName("navLink");

for(let i = 0 ; i < links.length ; i++)
{
    links[i].addEventListener("click",function(e){

		removeAct();
		this.classList.add("active","forAct");
    })
}

function removeAct()
{
	for(let i = 0 ; i < links.length ; i++)
	{
		links[i].classList.remove("active");
		links[i].classList.remove("forAct");
	}
}

if(document.title == "login" || document.title == "register")
{

    var userL = document.getElementById("logUser");
    var passL = document.getElementById("logPass");
    var logBtn = document.getElementById("logBtn");
    var regBtn = document.getElementById("reg");
    if(document.title == "login")
    logBtn.onclick=function(){
        checkLog(userL.value , passL.value)
    }

    else if(document.title == "register")
    {

        regBtn.onclick = function(){
            regBtn.setAttribute("href","index.html");
            window.alert("Registerition succeed");
        }
        
    }
}

function checkLog(user , pass)
{
    if(user == "admin" && pass == "admin")
    {
        logBtn.setAttribute("href","admin.html");
    }
    else if(user == "user" && pass == "user")
    {
        logBtn.setAttribute("href","index.html");
        document.getElementById("loginLink").innerHTML=(`logout`);
        document.getElementById("registerLink").style.display="none";
    }
    else
    {
        alert("the user name and password is incorrect please enter a valid data.")
    }
}
