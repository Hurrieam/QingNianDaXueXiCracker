$(function () {
    var url_data = $(".url");
    $(".get-screenshot").on("click", function (e) {
        var _a, _b, _c;
        e.preventDefault();
        if (((_a = url_data.val()) === null || _a === void 0 ? void 0 : _a.toString()) === "") {
            alert("未粘贴链接！");
            url_data.focus();
            return;
        }
        if (((_b = url_data.val()) === null || _b === void 0 ? void 0 : _b.toString().search("m.html")) === -1) {
            alert("请粘贴正确的青年大学习视频播放时的链接！");
            url_data.focus();
            return;
        }
        window.open(((_c = url_data.val()) === null || _c === void 0 ? void 0 : _c.toString()) + "/../images/end.jpg");
    });
    $(".all-clear").on("click", function () {
        url_data.val("");
        url_data.focus();
    });
});
//# sourceMappingURL=main.js.map