function addImage(e) {
    var imgUrl = $("#imgUrl").val();
    if (imgUrl.length) {
        $("#imageContainer img").attr("src", imgUrl);
    }
    e.preventDefault();
}

//on pressing return, addImage() will be called
$("#urlBox").submit(addImage);

$("input[type=range]").mousemove(editImage).change(editImage);

function editImage() {
    var gs = $("#gs").val(); // grayscale
    var blur = $("#blur").val(); // blur
    var br = $("#br").val(); // brightness
    var ct = $("#ct").val(); // contrast
    var huer = $("#huer").val(); //hue-rotate
    var opacity = $("#opacity").val(); //opacity
    var invert = $("#invert").val(); //invert
    var saturate = $("#saturate").val(); //saturate
    var sepia = $("#sepia").val(); //sepia

    $("#imageContainer img").css("filter", 'grayscale(' + gs+
        '%) blur(' + blur +
        'px) brightness(' + br +
        '%) contrast(' + ct +
        '%) hue-rotate(' + huer +
        'deg) opacity(' + opacity +
        '%) invert(' + invert +
        '%) saturate(' + saturate +
        '%) sepia(' + sepia + '%)');

    $("#imageContainer img").css("-webkit-filter", 'grayscale(' + gs+
        '%) blur(' + blur +
        'px) brightness(' + br +
        '%) contrast(' + ct +
        '%) hue-rotate(' + huer +
        'deg) opacity(' + opacity +
        '%) invert(' + invert +
        '%) saturate(' + saturate +
        '%) sepia(' + sepia + '%)');
}

$('#imageEditor').on('reset', function () {
    setTimeout(function() {
        editImage();
    },0);
});