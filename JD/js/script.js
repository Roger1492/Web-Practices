let locationNow = document.getElementsByClassName("location-now")[0];
let locations = Array.from(document.getElementsByClassName("location-table")[0].querySelectorAll("td"));
let superName = document.getElementsByClassName("search-suggestion-now")[0].getElementsByTagName("a")[0];
let superNameArr = ["超级品牌日","夏日新推荐","平衡轮首发","京东水饮节",];
let newBanner = document.getElementById("newBanner");
let closeNewBanner = document.getElementById("newBanner").getElementsByTagName("span")[0];
let imgNewBanner = document.getElementById("newBanner").querySelector("img");
let index = 0;
let sliderIndex = 0;

// 轮播图DOM
let smImgAll = document.getElementsByClassName("sm-img-all")[0];
let sliderImgs = document.getElementsByClassName("sm-img-all")[0].querySelectorAll("img");
let sliderDots = document.getElementsByClassName("sm-img-dots")[0].querySelectorAll("span");
let sliderPrevious = document.getElementsByClassName("previous")[0];
let sliderNext = document.getElementsByClassName("next")[0];

// ↑ 以上是获取的元素DOM
///////////////////////


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

// 轮播图
// let runSlider = setInterval(function(){

//     for(let i = 0; i < sliderImgs.length; i++){
//         sliderImgs[i].style.display = "none";
//     }

//     if(sliderIndex >= 8){
//         sliderIndex = 0;
//     } else{
//         sliderImgs[sliderIndex++].style.display = "block";
//         sliderDots[sliderIndex].style.background = "white";
//         sliderDots[sliderIndex].style.boxShadow = "0px 0px 0px 4px rgba(245, 245, 245, 0.37)";
//     }
// }, 1000);

// smImgAll.addEventListener("mouseenter", function(e){
//     clearInterval(runSlider);
// }, false);
// smImgAll.addEventListener("mouseleave", function(e){

// },false);



// 设置newBanner的图片
window.onload = function(){
    let r = Math.floor(Math.random()*2);

    // 如果是第一张图片，则背景换成#3294b8，否则换成#028f6c
    if(r == 0){
        newBanner.style.background = "#3294b8";
    } else {
        newBanner.style.background = "#028f6c";
    }

    imgNewBanner.src = "imgs/top-banner/"+r+".jpg";
}


// 删除newBanner
closeNewBanner.addEventListener("click", function(e){
    this.parentElement.parentElement.removeChild(this.parentElement);
}, false);