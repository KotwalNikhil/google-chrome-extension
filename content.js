

//document.getElementsByTagName("body").innerHTML=element.innerHTML+"<h3 style='position:fixed;top:0;color:red;'>Hello nikhil is back</h3>";
chrome.runtime.onMessage.addListener(got_message);
function got_message(msg,sender,send_reponse)
{
  
   if(msg.active)
   {
     
    var para=document.getElementsByTagName("p");
    for(x of para){
    x.innerHTML=msg.data;
    x.style['background-color']="yellow";
    }
   document.body.style['background-color'] = "pink";
   let links=document.getElementsByTagName("a");
   for(x of links){
      x.href="https://www.google.com";
     // x.style['background-color']="pink";
   }
   let images=document.getElementsByTagName("img");
for(x of images){
   x.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6Yv1l8FEB5g7mRFF-DQtmfetH2Ub5wZlXQ&usqp=CAU";
  // x.style['background-color']="pink";
}
}
   }
