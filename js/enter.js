/*
* @Author: ZX
* @Date:   2018-09-09 22:05:47
* @Last Modified by:   ZX
* @Last Modified time: 2018-09-16 19:10:07
*/
window.onload=function(){
	let input=document.querySelectorAll("input");
	let discover=document.querySelectorAll(".discover");
	let user=document.querySelectorAll(".user");
	let button=document.querySelectorAll("button")
	console.log(input,discover,user,button);

	
	input[0].onblur=function(){
        if(input[0].value=="123456"){
		discover[0].style.display="block";
		}else{
        	user[0].style.display="block";		
		}
	}
	input[1].onblur=function(){
        if(input[1].value=="123456"){
		discover[1].style.display="block";
		button[1].style.background="#fbbc15";
		}else{
        	user[1].style.display="block";		
		}
	}
	button[1].onclick=function(){
		if(input[0].value=="123456" && input[1].value=="123456"){
			button[1].style.background="#fbbc15";
			discover[0].style.display="block";
			discover[1].style.display="block";
			window.open("index.html");
			// var a=document.createElement("a");
			// a.setAttribute("hrfe",'../enter.html');
		} else if(input[0].value!="123456" || input[0].value==""){
        	user[0].style.display="block";
        }else if(input[0].value=="123456" && input[1].value!="123456" || input[1].value!=""){
        	user[1].style.display="block";
        }

	}

	button[0].onclick=function(){
		window.open("register.html");
	}

	

}