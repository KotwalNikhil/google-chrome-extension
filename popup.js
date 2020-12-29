
    document.getElementById("myButton").addEventListener("click", changeText);

    document.getElementById("play_game").onclick = function () {
        
                window.location.href = "game/index.html";
        
            };
            document.getElementById("play_game2").onclick = function () {
        
                window.location.href = "game2/index.html";
        
            };

 document.getElementById("refresh").addEventListener("click", refresh);
function refresh()
{
    location.reload();
}
function changeText()
{
    window.alert("1.Every paragraph is going to be replaced with this name\n 2.Every link is changed. \n 3.Every image will be changed to tiger's image . \n\n If it not worked try to refresh the tab and try again.")
    var userinput=document.getElementById('name').value;
    
    let params=
    {
        active:true,
        currentWindow:true
    }
    chrome.tabs.query(params,gotTab);

function gotTab(tab)
{
    let msg=
    {
        active:true,
        data:userinput
    }
    chrome.tabs.sendMessage(tab[0].id,msg);
}
    
}

chrome.runtime.sendMessage({ method: "getStatus", data: "data from popup.js" }, function (res) {
  var mytabs=0;
    if(res.method=="tabLength")
   {
       console.log("inside")
       mytabs=res.data;
   }
    document.getElementById("tabl").innerHTML = "Active Tabs = "+mytabs;
    
return true;
});

// for santa 

// var santa_move=0; 
// var santa_direction=1; 
// document.getElementById('animatedImage').style.top = 10;
// document.getElementById('animatedImage').style.left = 10;
// var timerToggle=null; 
// animateBall();
// function animateBall() {   
// document.getElementById("animatedImage").style.left=santa_move + "px";
//               //document.getElementById("animatedImage").style.top=santa_move + "px";
//  santa_move+=santa_direction;
// //400
// if (santa_move>window.screen.width) { 
//     //santa_direction=-1; 
// document.getElementById('animatedImage').style.top = 10;
// document.getElementById('animatedImage').style.left = 10;
// santa_move=0;
// }
//  if (0>santa_move) { santa_direction=1; }
// timerToggle=setTimeout(function() { animateBall(); },10);
// }

// santa code close