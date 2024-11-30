
/*---oncick----*/
/*----inline----
function fun()
{
    document.getElementById("a").innerHTML="hello world"
}
document.getElementById("a").style.color="red"----*/

/*---using event properties 1 way
let btn=document.getElementById("a1")
btn.onclick=fun
function fun()
{
    document.getElementById("a").innerHTML="hello world"
}---*/

/*---using event properties 1 way
let btn=document.getElementById("a1")
btn.onclick=function(){
    document.getElementById("a").innerHTML="hello world"
}----*/

/*---using addEventListener 1 way
let btn=document.getElementById("a1")
btn.addEventListener('click',fun)
function fun()
{
    document.getElementById("a").innerHTML="hello world"
}----*/

/*---using addEventListerner 2way
let btn=document.getElementById("a1")
btn.addEventListener('click',function(){
    document.getElementById("a").innerHTML="hello world"
})----*/

/*----realtime example onclick
function fun()
{
    let x=document.getElementById("A").value
     let y=document.getElementById("B").value
    let z=x + ' ' +"and" + y + ' ' +" both are friends"
    document.getElementById("a").innerHTML=z
}
-----*/

/*----onmouseover and onmouseout
function fun()
{
    document.getElementById("a").innerHTML="beauiful image"
}

function notfun()
{
    document.getElementById("a").innerHTML=""
}
----*/

/*---onmousedown and onmouseup
function fun()
{
    document.getElementById("a").innerHTML="hii"
}
function notfun()
{
    document.getElementById("a").innerHTML="bye"
}
-----*/

/*----oninput
function fun()
{
    let x=document.getElementById("a1").value
    document.getElementById("a").innerHTML=x
}
----*/

/*----oninput real time example
function fun()
{
    let password=document.getElementById("A").value
    if(password.length>=1 && password.length<=5)
    {
        document.getElementById("a").innerHTML="week password"
        document.getElementById("a").style.color="violet"
        document.getElementById("A").style.border="2px solid red"
        document.getElementById("A").style.outline="1px solid red"
    }
    else if(password.length>=6 && password.length<=10)
    {
        document.getElementById("a").innerHTML="Strong password"
        document.getElementById("A").style.border="2px solid Yellow"
    }
    else if(password.length>=11)
    {
        document.getElementById("a").innerHTML="Excellent password"
        document.getElementById("A").style.border="2px solid green"
    }
    else
    {
        document.getElementById("a").innerHTML="enter proper password"
        document.getElementById("A").style.border="2px solid blue"
    }
}
------*/

/*---onkeydown and onkeyup
function fun()
{
    let x=document.getElementById("A").value
    document.getElementById("a").innerHTML="typing"
}
function notfun()
{
    let y=document.getElementById("A").value
    document.getElementById("a").innerHTML=""
}
----*/

/*---onload
function fun()
{
    document.getElementById("a").innerHTML="webpage loaded"
}
----*/

/*---onload2
function notfun()
{
    document.getElementById("a").innerHTML="hello"
}
----*/

/*------onchange
function fun()
{
    let x=document.getElementById("a").value
    document.getElementById("a1").innerHTML="iam from" +" " +x
}
------*/

/*----onfocus and onblur
function fun()
{
    document.getElementById("a").style.backgroundColor="red"
}
function notfun()
{
    document.getElementById("a").style.backgroundColor="yellow"
}
-----*/