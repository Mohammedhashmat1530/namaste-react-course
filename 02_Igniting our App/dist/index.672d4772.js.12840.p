setTimeout(()=>{
    var ele = document.getElementById("hello");
    console.log(ele);
    var innerHtml = ele.innerHTML;
    console.log(innerHtml);
    // Use a timeout of 0 milliseconds to ensure it's executed after the current stack
    setTimeout(()=>{
        ele.style.display = "block";
    }, 2000);
}, 0);

//# sourceMappingURL=index.672d4772.js.map
