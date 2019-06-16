// TODO: 轮播图特效
let slideContainer = document.getElementById('slide-container');
let slideImg = Array.from(document.querySelectorAll('.slide-wrap div'));
let slideIndex = -1;
setInterval(function(e){

  for(let i = 0; i < slideImg.length; i++){
    slideImg[i].style.display = 'none';
  }

  if(slideIndex > 4){
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  slideImg[slideIndex].style.display = 'block';
}, 5000)




// 创建目录列表中的图片
let cateSub2 = Array.from(document.querySelectorAll('.cate-sub-2'));

let cateImgListArr = [
'https://img.alicdn.com/bao/uploaded/TB1B_DcJpXXXXXWXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/i4/T1gRqVXk4fXXb1upjX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1wNJAHFXXXXc7XpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1w472LFXXXXXwXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1fETUHpXXXXbmapXXwu0bFXXX.png_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1UJIfJXXXXXctaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1FfxjHFXXXXbWaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB18XAnIVXXXXclXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1gWxjFFXXXXcEaFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/http://img.taobaocdn.com/bao/uploaded/TB1HMfoHpXXXXclXXXXwu0bFXXX.png_170x120q30.jpg',
'https://img.alicdn.com/tps/TB18nTOLVXXXXc5XXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1wzzFLVXXXXbXXFXXXXXXXXXX-400-200.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1SvLzLVXXXXaKXVXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB17DDrLVXXXXbOaXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1dSYULVXXXXXlXXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1xPvNLVXXXXXDXpXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1QgL7LFXXXXboXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB18HHTLFXXXXaJaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1B6.BLFXXXXXZXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1krn7LFXXXXbVXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1Im6ULFXXXXapaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB16BD9LFXXXXXhXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1KtC.LVXXXXauaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1eFwrLFXXXXacXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i2/TB1MDj0LVXXXXaNXpXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i2/TB1rGn5LVXXXXcZXXXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i4/TB1gAvVLVXXXXbeXFXXPqXt1pXX-1000-500.png_170x120q30.jpg',
'https://img.alicdn.com/tps/i2/TB1ORPWLVXXXXX1XFXXPqXt1pXX-1000-500.png_170x120q30.jpg',
'https://img.alicdn.com/tps/i3/TB1vifWLVXXXXc6XpXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i1/414285109/TB273rQaazyQeBjy0FbXXbZapXa_!!414285109.png_170x120q30.jpg',
'https://img.alicdn.com/tps/i1/TB1NBn3LVXXXXXyXpXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i4/TB1F3PILVXXXXcZapXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1Nza1LFXXXXbDXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1tBlBMXXXXXXaXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i4/TB1hp9WPpXXXXbZXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i4/TB1ZCmFPpXXXXbpaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i4/TB1HTKLPpXXXXXEaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/T1gwebFcFbXXb1upjX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/T1GKWaFd4eXXb1upjX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/T1b98VFgJiXXb1upjX.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i4/TB1PCq3PpXXXXcAXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i3/TB1LX3bLVXXXXcLXXXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i2/TB1BoYYLVXXXXaZXVXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i4/TB1XkMXLVXXXXXHXpXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i4/TB1jL24LVXXXXXRXFXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i1/TB16Jn1LVXXXXc8XFXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i3/TB1_QH3LVXXXXaYXFXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i1/TB1ryEcLVXXXXaFXXXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1Ns2VLVXXXXbXaXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1sZBCMXXXXXbEXpXXXXXXXXXX-1000-500.png_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1r1kdLVXXXXarXpXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1RcY6LVXXXXaJXFXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB16nsdLVXXXXX2XpXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1EubOLVXXXXa6apXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i4/TB1qr7HJpXXXXadXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1SbMiLVXXXXbWXXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1oer2LVXXXXavXVXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1EzggLVXXXXc3XXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB10av_LVXXXXXKXFXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB13YL5LVXXXXaGXVXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1mIZhLVXXXXcNXXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1WfkhLVXXXXcpXXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1ELY5LVXXXXXVXVXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB13RsaLVXXXXcbXpXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB10srVLVXXXXbSaXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1IXDSLVXXXXXPapXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1c0mwJXXXXXbcXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1o2ZgIpXXXXcNXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1Tc.dHpXXXXcZXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1nD_MHpXXXXa3XVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB14Dn0HpXXXXaSaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1qgnQHpXXXXXvXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1dcqhHVXXXXabXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1dOLEIFXXXXXIXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1zL_xHVXXXXaVXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1H9oMIVXXXXarXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB12MLVHpXXXXb4XXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1DOoJIVXXXXb7XFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1o2UxIVXXXXcVaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i1/TB1T_PYLVXXXXcFXVXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i2/TB1OaMbLVXXXXbfXpXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i3/TB1XJz8LVXXXXbnXFXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB1CZYfMXXXXXbCXVXXXXXXXXXX-800-400.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/http://gtms04.alicdn.com/tps/i4/TB1PhrmHpXXXXX0XXXXXD.cNVXX-400-200.png_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1TPLrIFXXXXc9XVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1vBzdJFXXXXaPXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1lsMhLFXXXXb1XFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/i2/TB1xR5SIXXXXXazXpXXaTBZFVXX_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1fB29LVXXXXaGXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1hirDIVXXXXaZXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1MwaIIVXXXXa2XVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1ECQcHpXXXXX0XpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1yMKJLVXXXXaIaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1We4DLVXXXXatXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/tfs/TB1xr53RXXXXXb9aXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1gI_2IXXXXXaFXXXXwu0bFXXX.png_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1kM8EIFXXXXbMXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/TB131n8LVXXXXcVXpXXXXXXXXXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB13ejyGFXXXXXCaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1lxPOHpXXXXcAXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1XtYuKFXXXXa.XpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i4/TB1AejkLVXXXXXwXpXXXpJt1pXX-1000-500.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB13PqeIVXXXXaHapXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1FIXKJFXXXXbiXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1.JEMIpXXXXbWXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB178.CHpXXXXbTapXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1_EMlHpXXXXceXXXXwu0bFXXX.png_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1ZiIJIVXXXXcHXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1yKObKXXXXXbfXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1yo_NHpXXXXXTXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1ZddBIFXXXXbWXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1Dr5dJXXXXXbKXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1iV4BIFXXXXXYXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1ih3hHpXXXXXkXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1Q7MwIVXXXXXFapXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1iW9PIVXXXXbvXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB14XPPHpXXXXbIXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB19_IdKVXXXXbJXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/i5/T1g2lmXadKXXb1upjX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1GxS8JpXXXXaWXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1p3QUIVXXXXXaXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1I0PuHFXXXXbxXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1406DJVXXXXbHXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/i6/T1WafYXbXlXXb1upjX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1q5H8KVXXXXaFXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1nygNIVXXXXacXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1CGKfIFXXXXX1aXXXwu0bFXXX.png_170x120q30.jpg',
'https://img.alicdn.com/tps/i2/TB1c8HTLVXXXXXVaXXXvDEcNVXX-400-200.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1XeXcKpXXXXaYXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1XtLSHpXXXXaTXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1eWlgKFXXXXXaXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1e8m9IpXXXXcmXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1ZKTzIpXXXXcyXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i2/793475151/TB2PMxWa7yWBuNjy0FpXXassXXa_!!793475151.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i3/1734796729/TB2AaE0emMmBKNjSZTEXXasKpXa_!!1734796729.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i2/2217550171/TB2p.jjmY_I8KJjy1XaXXbsxpXa_!!2217550171.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i4/762551010/TB2J0lUepkoBKNjSZFkXXb4tFXa_!!762551010.png_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i2/2255664523/TB2in5hgiCYBuNkSnaVXXcMsVXa_!!2255664523.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i1/894224787/TB2oS7gov1TBuNjy0FjXXajyXXa_!!894224787.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i3/2095494343/TB2Qv_jlFXXXXaHXpXXXXXXXXXX_!!2095494343.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i4/2525258127/TB2zTZWoDlYBeNjSszcXXbwhFXa-2525258127.png_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i4/1733566698/TB2WrL9or1YBuNjSszhXXcUsFXa_!!1733566698.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i1/1579528508/TB2E9rRov9TBuNjy1zbXXXpepXa_!!1579528508.png_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB14lgnlnnI8KJjSszgwu38ApXa.png_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB18S7RKFXXXXbkXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1OBJZJpXXXXcGXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1KQYNIXXXXXXiXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1lIAVIVXXXXchXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1uFV_LpXXXXbEXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1Qj2dIFXXXXcoXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1TPLrIFXXXXc9XVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1WyaHIpXXXXadXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1rLC4IFXXXXXkaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1mci2KFXXXXXpXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/http://img.taobaocdn.com/bao/uploaded/TB1TlAWGVXXXXX1aXXXwu0bFXXX.png_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1Z6xXIpXXXXaoXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB130ZhHpXXXXcrXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1soYNIpXXXXa7XVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1EUPwJFXXXXbwXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1heeRJFXXXXbCXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1mcacIVXXXXa7apXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1VKhiIFXXXXXQaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i4/143584903/TB2Gro9b4WYBuNjy1zkXXXGGpXa-143584903.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1IDP4HpXXXXbiXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1DvejMXXXXXc2XXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1t.MHIFXXXXXHXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/i2/387542955/TB2PLJOdFXXXXXBXXXXXXXXXXXX-387542955.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1H9xlLXXXXXaQaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1OMUNIVXXXXXAXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB16hUZIXXXXXXjaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1jkmjIXXXXXXNaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB19rzWHpXXXXbmXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1qFMlJVXXXXbqXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1sHjoKXXXXXaCXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB17wZEIVXXXXchXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1XsAmflDH8KJjSspnwu2NAVXa.png_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/i2/0/T1FKaeXz4gXXXRih2H_!!0.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1n0lsHFXXXXX1XVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1uDGlIFXXXXbUaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/http://gtms01.alicdn.com/tps/i1/TB1b.F3FVXXXXazXFXXXD.cNVXX-400-200.png_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB11k2qLFXXXXa.XpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1Itb6JVXXXXXAXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1e5WbLXXXXXXmXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1jj3JLFXXXXXcXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/http://gtms04.alicdn.com/tps/i4/TB1xaJ5FVXXXXXnXpXXXD.cNVXX-400-200.png_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1.eogLFXXXXbOXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1US6WLpXXXXarXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1tvPzJFXXXXbRXVXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1zWUQLFXXXXaQXpXXwu0bFXXX.png_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1DKEPIVXXXXXXXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1EtVFLXXXXXaLXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/tfs/TB1vY6furvpK1RjSZPiXXbmwXXa-400-200.jpg_170x120q30.jpg',
'https://img.alicdn.com/tfs/TB1utazv7voK1RjSZFwXXciCFXa-170-85.png_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1OnmRJVXXXXagXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1ueQlJpXXXXcFXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1NEo1KFXXXXXZaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1jETyJVXXXXcOXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1Stk1IFXXXXa7XpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/http://img.taobaocdn.com/bao/uploaded/TB1kbn6GFXXXXXwapXXwu0bFXXX.png_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB10qRPHVXXXXc.XpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1nLJ4HXXXXXaAapXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1Pt_VHpXXXXbzXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1wc_yIVXXXXXTXXXXwu0bFXXX.png_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1R3pzIFXXXXXaXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1oRARKFXXXXbvXpXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1v..NJFXXXXceXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1ojhVKVXXXXXSaXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/i5/T1wPnfXhpkXXb1upjX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1ad5iLVXXXXblXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i4/2074722020/TB28.gelpXXXXaUXpXXXXXXXXXX_!!2074722020.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i3/2074722020/TB20E7zlpXXXXbyXXXXXXXXXXXX_!!2074722020.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i4/705062048/TB2XKFuoVXXXXaWXFXXXXXXXXXX-705062048.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1Wl7LIVXXXXa9XFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/i8/T1JhbiXbJdXXb1upjX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1NexJJpXXXXaqXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i4/1776443719/TB2.yEylpXXXXcpXXXXXXXXXXXX_!!1776443719.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1QWssJXXXXXboXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i2/820398833/TB2jjKqlFXXXXczXXXXXXXXXXXX-820398833.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i3/705062048/TB2_khJoVXXXXcwXpXXXXXXXXXX-705062048.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/i4/0/T1j.xYFqhXXXXRih2H_!!0.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB12QfgIVXXXXaZXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1rZLPHpXXXXcOXFXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i2/2074722020/TB2axgjlpXXXXX1XpXXXXXXXXXX_!!2074722020.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i3/820398833/TB2opmrlFXXXXcxXXXXXXXXXXXX-820398833.jpg_170x120q30.jpg',
'https://img.alicdn.com/imgextra/i4/820398833/TB27vqulFXXXXbWXXXXXXXXXXXX-820398833.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i3/TB1ROPWLVXXXXcjXVXXEQfgIVXX-600-300.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i4/TB1_EohLVXXXXX0XXXXN3Sk_VXX-800-400.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i1/TB1qz_YLVXXXXcsXVXXN3Sk_VXX-800-400.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i3/TB1iSb8LVXXXXXsXFXXma0XTXXX-200-100.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i4/TB1JR.fLVXXXXbwXXXX38MsFXXX-140-70.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i2/TB1XlJvMXXXXXXEaXXXvDEcNVXX-400-200.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i1/TB1WrIeLVXXXXb6XXXX38MsFXXX-140-70.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i2/TB12GQdLVXXXXcIXXXX38MsFXXX-140-70.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i1/TB1RELVLVXXXXXJaXXX38MsFXXX-140-70.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i2/TB1hYv5LVXXXXbfXFXXNkoJQpXX-300-150.jpg_170x120q30.jpg',
'https://img.alicdn.com/tps/i1/TB1oaMdLVXXXXcrXXXXma0XTXXX-200-100.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1b4c1LFXXXXcCXpXXwu0bFXXX.png_170x120q30.jpg',
'https://img.alicdn.com/tps/i3/TB1.9f6LVXXXXaOXFXXma0XTXXX-200-100.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1vHxVLVXXXXXOXpXXwu0bFXXX.png_170x120q30.jpg',
'https://img.alicdn.com/tps/i4/TB13dzTLVXXXXahaXXX38MsFXXX-140-70.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1g0h4KXXXXXcHXXXXSutbFXXX.jpg_170x120q30.jpg',
'https://img.alicdn.com/bao/uploaded/TB1X0e_LVXXXXXgXpXXwu0bFXXX.png_170x120q30.jpg',
'https://img.alicdn.com/tps/i3/TB1YJkgLVXXXXXCXXXX38MsFXXX-140-70.jpg_170x120q30.jpg',
];

// 创建图片
function createA(num){
  let str = '';
  let a = `<a href="javascript:void(0);"><img /></a>`;
  for(let i = 0; i < num; i++){
    str += a;
  }
  return str;
}

// 把图片放入DOM中
cateSub2.forEach((item, ind, arr) => {
  var cateArr = [16,16,16,18,16,17,16,18,11,18,14,17,16,16,18];
  for(let i = 0; i < arr.length; i++){
    arr[i].innerHTML = createA(cateArr[i]);
  }
})

let cateSub2Img = Array.from(document.querySelectorAll('.cate-sub-2 a img'));
// 添加图片src
cateSub2Img.forEach((item, ind, arr) => {
  item.src = cateImgListArr[ind];
})




// #mainPage-2
let mp2ContextText = ['优惠劵 ￥120','Baby Coccole', 'Schneider Electric...','ENFINITAS/蓝臻','优惠劵 ￥250','Babyzen','优惠劵 ￥300','优惠劵 ￥70','优惠劵 ￥100','优惠劵 ￥100','优惠劵 ￥250','scout','优惠劵 ￥210','优惠劵 ￥140','优惠劵 ￥100','双心','hot topic','BARNEYS NEW Y...','优惠劵 ￥100','优惠劵 ￥50','优惠劵 ￥50','优惠劵 ￥10','STOKKE','优惠劵 ￥150','优惠劵 ￥10','优惠劵 ￥80','云南白药','Colgate/高露洁','优惠劵 ￥30'];
let mp2ContextImg = [
'https://img.alicdn.com/i2/2/TB1gWINIVXXXXbbXFXXSutbFXXX.jpg_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1LA6XoL5TBuNjSspmXXaDRVXa?abtest=&pos=31&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1ilbUHpXXXXb8XXXXSutbFXXX.jpg_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1TJNTPXXXXXcqXVXXSutbFXXX.jpg_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1a3bVRXXXXXbfXFXXXXXXXXXX?abtest=&pos=5&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1kloQx8mWBuNkSndVSuwsApXa.jpg_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1gD8NhDlYBeNjSszcXXbwhFXa?abtest=&pos=7&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1_aF7pG6qK1RjSZFmXXX0PFXa?abtest=&pos=8&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB12cBSirGYBuNjy0FoXXciBFXa?abtest=&pos=9&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1IJymuk9WBuNjSspeXXaz5VXa?abtest=&pos=10&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp',
'https://img.alicdn.com/imgextra/i4/928417138/O1CN019OFNEK22bFcXdLUb5_!!928417138.png_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1KH4GQpXXXXb_apXXSutbFXXX.jpg_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1_kq7j1SSBuNjy0FlXXbBpVXa?abtest=&pos=13&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1sM7GSXXXXXb3aXXXXXXXXXXX?abtest=&pos=14&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1A9Eicf5TBuNjSspmXXaDRVXa?abtest=&pos=15&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp  ',
'https://img.alicdn.com/i2/2/TB1R1K4GFmWBuNjSspdSuvugXXa.jpg_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/T25cAwXGhXXXXXXXXX-1785908005.jpg_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1igurtrSYBuNjSspfXXcZCpXa?abtest=&pos=18&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1gOvrmZLJ8KJjy0FnXXcFDpXa?abtest=&pos=19&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/T11mf3Xf0iXXb1upjX.jpg_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1aA5EcMsSMeJjSspeXXa77VXa?abtest=&pos=21&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1G5bXD9BYBeNjy0FeSuvnmFXa.jpg_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1XcHYHpXXXXXmXXXXSutbFXXX.jpg_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1lnhJq9BYBeNjy0FeXXbnmFXa?abtest=&pos=24&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1yQ87kFzqK1RjSZFCXXbbxVXa?abtest=&pos=25&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1CAsYJpXXXXbuXpXXwu0bFXXX.png_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1123WLXXXXXX3aXXXSutbFXXX.jpg_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1Bcu9JFXXXXc9XXXXSutbFXXX.jpg_100x150q100.jpg_.webp',
'https://img.alicdn.com/i2/2/TB1Ul00mlfH8KJjy1XbXXbLdXXa?abtest=&pos=29&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp',
];
let mp2Wrap = document.getElementsByClassName('mp2-wrap')[0];
for(let i = 0; i < 29; i++){
  let createWrapA = document.createElement('a');
  let createImg = document.createElement('img');
  let createSpan1 = document.createElement('span');
  let createSpan2 = document.createElement('span');
  mp2Wrap.appendChild(createWrapA);
  createWrapA.appendChild(createImg);
  createWrapA.appendChild(createSpan1);
  createWrapA.appendChild(createSpan2);
  createImg.src = mp2ContextImg[i];
  createSpan1.innerText = mp2ContextText[i];
  createSpan2.innerText = '点击进入';
}