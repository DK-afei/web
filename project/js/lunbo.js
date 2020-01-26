 window.onload = function () {
      slideshow();
    }
    function slideshow() {   //轮播图函数
      let slideshowDiv = document.getElementsByClassName("out")[0];
      let ul = document.getElementsByClassName("img")[0];
      let items = document.getElementsByClassName("dianin");
      let index = 0;   //轮播图下标

      function move() {   //轮播图播放
        if (index==4) {
          index = 0;
          removeOn();
          items[index].classList.add("on");
            ul.style.left = 0;
        } else {
          ul.style.left = Number.parseInt(getComputedStyle(ul).left) - 400 + "px";
          index = index + 1;
          removeOn();
          items[index].classList.add("on");
        }
      }

      function removeOn() {   //移除轮播图活跃状态
        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove("on");
        }
      }

      let time = setInterval(move, 3000);
      for (let i = 0; i < items.length; i++) {  //给每个点绑定事件
        items[i].onclick = function () {
          ul.style.left = i * (-400) + "px";
          removeOn();
          items[i].classList.add("on");
          index = i;
        }
      }
      slideshowDiv.onmouseover = function () {
        clearInterval(time);
      }
      slideshowDiv.onmouseout = function () {
        time = setInterval(move, 3000);   //特别注意  move  这里不能加()   加了表示立即调用
      }
	  
	  //侧边导航点击事件
	  let list = document.querySelectorAll(".nav_list ul li")
	  for (let i = 0; i < list.length - 1; i++) {
	      list[i].onclick = function () {
	          scrollTo((i + 1) * 600)
	      }
	  }
	  list[list.length-1].onclick=function(){
	      scrollTo(0)
	  }
	  function scrollTo(target) {
	      let top = getScrollTop()
	      let timeout = null
	      let current = Math.abs(top - target)
	      let residue = current
	      if (top > target) {
	          timeout = setInterval(() => {
	              if (residue == 0) {
	                  clearInterval(timeout)
	              } else {
	  
	                  if (residue < 15) {
	                      window.scrollTo(0, target + residue)
	                      residue = 0
	                  }
	                  else {
	                      window.scrollTo(0, target + residue - 15)
	                      residue -= 15
	                  }
	              }
	          }, 1)
	      } else {
	          timeout = setInterval(() => {
	              if (residue == 0) {
	                  clearInterval(timeout)
	              } else {
	  
	                  if (residue < 15) {
	                      window.scrollTo(0, target - residue)
	                      residue = 0
	                  }
	                  else {
	                      window.scrollTo(0, target - residue + 15)
	                      residue -= 15
	                  }
	              }
	          }, 1)
	      }
	  }
	  function getScrollTop() {
	      let top = null
	      if (document.documentElement && document.documentElement.scrollTop)
	          top = document.documentElement.scrollTop
	      else
	          top = document.body.scrollTop
	      return top
	  }
    }