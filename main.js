$( document ).ready(function() {
    var heights = $(".testt").map(function() {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".testt").height(maxHeight);
});