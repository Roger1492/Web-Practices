let locationNow = document.getElementsByClassName("location-now")[0];
let locations = Array.from(document.getElementsByClassName("location-table")[0].querySelectorAll("td"));
let superName = document.getElementsByClassName("search-suggestion-now")[0].getElementsByTagName("a")[0];
let superNameArr = ["超级品牌日","夏日新推荐","平衡轮首发","京东水饮节",];
let index = 0;

// 改变定位位置
// TODO: 点击后要显示红色背景，其他的恢复正常
locations.forEach((element, index, array) => {
    element.addEventListener("click", function(e){
        locationNow.innerHTML = this.innerText;
    }, false);
})

// 切换搜索框下的 `超级品牌日`
setInterval(function(){
    if(index >= 4){
        index = 0;
    } else{
        superName.innerHTML = superNameArr[index++];
    }
}, 3000);