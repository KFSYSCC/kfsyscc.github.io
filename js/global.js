$(function() {
    $("a.blank,a.x_blank").click(function() {
        return !window.open(this.href);
    });
    $("a[href^=http]:not([rel=nofollow])").click(function() {
        return !/^https?:/.test($(this).attr("href")) || !window.open(this.href);
    });
    $("#content>a.top").click(function() {
        return !$("html,body").scrollTop(0);
    });
    $(".languages ul").mouseenter(function() {
        $("li",this).show();
    }).mouseleave(function() {
        $("li:gt(0)",this).hide();
    });
    $(".tab-subNav li:not(.hover), #mainNav li:not(.hover), #sidebar li:not(.hover), .calendar .event li:has(a)").hover(function() {
        $(this).addClass("hover");
    }, function() {
        $(this).removeClass("hover");
    });
    $("select.nav").change(function() {
        var a = $(this).val();
        if (a != '')
            $(this).find("option:selected").text("\u8f09\u5165\u4e2d...").end().attr("disabled", location.href = a);
    }).attr("disabled", false);
    var b = $("li.font span").click(function() {
        b.removeClass("actBig actMiddle actSamll");
        var a = $(this);
        $("#mainContent").removeClass("small middle big").addClass(a.attr("class"));
        a.addClass("actBig actMiddle actSamll".split(" ")[b.index(this)]);
    });
    if (b.size()) {
        window.addthis_config = {
            services_compact: "facebook,plurk,blogger,email,more",
            ui_click: true
        };
        $("<script/>", {
            type: "text/javascript",
            async: "true",
            src: "//s7.addthis.com/js/250/addthis_widget.js#username=xa-4ca4565f3bc9acc5"
        }).insertBefore("script:first");
    }
    if($.fn.colorbox) {
        $(".ckContent a.x_lightbox,.ckContent a[rel=lightbox]").colorbox();
    }
});