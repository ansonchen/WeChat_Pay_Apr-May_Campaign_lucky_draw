let change = false;
setInterval(() => {
    change = !change;
    $("body").css("background", change ? "#f1f1f1" : "lightblue");
}, 1000);
