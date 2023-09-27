$(() => {
    const url_data = $(".url");
    $(".get-screenshot").on("click", (e) => {
        e.preventDefault();
        if (url_data.val()?.toString() === "") {
            alert("未粘贴链接！");
            url_data.focus();
            return;
        }
        if (url_data.val()?.toString().search("m.html") === -1) {
            alert("请粘贴正确的青年大学习视频播放时的链接！");
            url_data.focus();
            return;
        }
        window.open(url_data.val()?.toString() + "/../images/end.jpg");
    });
    $(".all-clear").on("click", () => {
        url_data.val("");
        url_data.focus();
    });
});
