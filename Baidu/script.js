// 显示和隐藏右侧的banner
$(document).ready(function(){
    $(".list-highlight").click(function(){
        $(".sub-list").toggle();
    })
})

let search = document.getElementById("search");
let btn = document.getElementById("btn");
btn.addEventListener("click",function(e){
    location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + search.value;
}, false);
document.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + search.value;
    }
}, false);