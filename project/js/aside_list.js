    //滚动条滚动事件
    window.onscroll = function () {
        // 侧边导航列表 
        let list = document.querySelectorAll(".nav_list ul li")
        resetStyle(list)
        switch (getTopIndex()) {
            case 0:
                list[0].style.background = "#00a1d6"
                list[0].style.color = "#fff"
                break;
            case 1:
                list[1].style.background = "#00a1d6"
                list[1].style.color = "#fff"
                break;
            case 2:
                list[2].style.background = "#00a1d6"
                list[2].style.color = "#fff"
                break;
            case 3:
                list[3].style.background = "#00a1d6"
                list[3].style.color = "#fff"
                break;
            case 4:
                list[4].style.background = "#00a1d6"
                list[4].style.color = "#fff"
                break;
            case 5:
                list[5].style.background = "#00a1d6"
                list[5].style.color = "#fff"
                break;
        }
    }
    function getTopIndex() {
        let top = null
        if (document.documentElement && document.documentElement.scrollTop)
            top = document.documentElement.scrollTop
        else
            top = document.body.scrollTop
        if (570 < top && top <= 1020)
            return 0
        else if (1020 < top && top <= 1520)
            return 1
        else if (1520 < top && top <= 1985)
            return 2
        else if (1985 < top && top <= 2480)
            return 3
        else if (top > 2480)
            return 4
    }
    function resetStyle(list) {
        for (let i = 0; i < list.length; i++) {
            list[i].style.background = "transparent"
            list[i].style.color = "#000"
        }
    }
    // 滚动条滚动事件end