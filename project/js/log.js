 // 消息框
    let showMessage = document.querySelector(".message-btn")
    let closeMessage = document.querySelector(".message .close")
    let message = document.querySelector(".message-btn .message")
    showMessage.onclick = function () {
        message.style.cssText = "display:block;top:0px;visibility: hidden;opacity: 0;"
        setTimeout(() => {
            message.style.top = "88px"
            message.style.visibility = "visible"
            message.style.opacity = "1"
        }, 10);
    }
    closeMessage.onclick = function (e) {
        // 由于html结构没设计好，出现了事件冒泡，触发了上一层div的事件，所以要阻止冒泡
        e.stopPropagation()
        message.style.top = "-400px"
        message.style.visibility = "hidden"
        message.style.opacity = "0"
        setTimeout(() => {
            message.style.cssText = "display:none"
        }, 300)
    }
    // 消息框end