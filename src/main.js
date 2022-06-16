"use strict";
$(document).ready(function () {
    $(".get-screenshot").click(function () {
        var _a, _b, _c;
        if (((_a = $(".url").val()) === null || _a === void 0 ? void 0 : _a.toString()) === "") {
            alert("未粘贴链接！");
            return;
        }
        if (((_b = $(".url").val()) === null || _b === void 0 ? void 0 : _b.toString().search("m.html")) === -1) {
            alert("请粘贴正确的青年大学习视频播放时的链接！");
            return;
        }
        window.open(((_c = $(".url").val()) === null || _c === void 0 ? void 0 : _c.toString()) + "/../images/end.jpg");
    });
    $(".all-clear").click(function () {
        $(".url").val("");
    });
});
//# sourceMappingURL=main.js.map