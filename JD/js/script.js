// 改变定位位置
let locationNow = document.getElementsByClassName("location-now")[0];
let locations = Array.from(document.getElementsByClassName("location-table")[0].querySelectorAll("td"));

// TODO: 点击后要显示红色背景，其他的回复正常
locations.forEach((element, index, array) => {
    element.addEventListener("click", function(e){
        locationNow.innerHTML = this.innerText;
    }, false);
})