$(document).ready(() => {
  $(".get-screenshot").click(() => {
    if ($(".url").val()?.toString() === "") {
      alert("未粘贴链接！");
      return;
    }
    if ($(".url").val()?.toString().search("m.html") === -1) {
      alert("请粘贴正确的青年大学习视频播放时的链接！");
      return;
    }
    window.open($(".url").val()?.toString() + "/../images/end.jpg");
  });
  $(".all-clear").click(() => {
    $(".url").val("");
  });
});
