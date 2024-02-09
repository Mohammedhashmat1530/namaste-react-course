setTimeout(()=>{

    var ele = document.getElementById("hello"); // Use "root" instead of "hello"
    console.log(ele);
  
    var innerHtml = ele.innerHTML;
   
    console.log(innerHtml);
   // Use a timeout of 0 milliseconds to ensure it's executed after the current stack
  
  },0)