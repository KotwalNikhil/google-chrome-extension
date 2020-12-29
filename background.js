var mytabs=0;
 

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse)
{
if(request.method=='getStatus')
{
    chrome.tabs.query({windowType:'normal'}, function(tabs) {
      //  console.log('Number of open tabs in all normal browser windows:',tabs.length);
        mytabs=tabs.length;
    });
    console.log(request.data);
    sendResponse({method:"tabLength",data:mytabs})


   
}
});
   
       
       
  
    
 