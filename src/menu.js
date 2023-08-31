// A function for when you click on the menu icon in the website the menu box show
$(document).ready(function(){
    $("#showBox").hide();
    $("#menu").click(function(){
        $("#showBox").slideToggle("slow");
    });
});