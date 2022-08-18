$(".tab").on("click", function () {
  if ($(this).hasclass("tab1")) {
    $(".tab1").addClass("active");
    $(".tab2").removeClass("active");

    $("#tabContent1").css("display", "block");
    $("#tabContent2").css("display", "none");
    console.log("Tab 1 was selected");
  } else if ($(this).hasclass("tab2")) {
    $(".tab2").addClass("active");
    $(".tab1").removeClass("active");

    $("#tabContent2").css("display", "block");
    $("#tabContent1").css("display", "none");
  }
  console.log("Tab 2 was selected");
});
