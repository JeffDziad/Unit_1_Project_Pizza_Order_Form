$(document).ready(function (){
    $("#orderNow").click(function (){
       window.location = 'order.html';
        window.addEventListener("load", function() {
            alert('Page is loaded');
        });
    });

    $("#pizzaSizeLabel").click(function() {
        if ($("#pizzaSizeContent").is(":visible"))      //IF only size content is visible
        {
            $("#pizzaSizeContent").slideUp("fast");
            $("#pizzaSizeLabel").toggleClass("rounded");
        }
        else if ($(".tabPizzaContent").is(":visible"))   //IF any other content is visible
        {
            $(".tabPizzaContent").slideUp("fast");
            $("#pizzaSizeContent").slideToggle("fast");
            $(".tabPizzaLabel").addClass("rounded");
            $("#pizzaSizeLabel").removeClass("rounded");
        }
        else                                                    //IF no other content is visible
        {
            $("#pizzaSizeContent").slideToggle("fast");
            $("#pizzaSizeLabel").toggleClass("rounded");
        }
    });

    $("#pizzaCrustLabel").click(function() {
        if ($("#pizzaCrustContent").is(":visible"))
        {
            $("#pizzaCrustContent").slideUp("fast");
            $("#pizzaCrustLabel").toggleClass("rounded");
        }
        else if ($(".tabPizzaContent").is(":visible"))
        {
            $(".tabPizzaContent").slideUp("fast");
            $("#pizzaCrustContent").slideToggle("fast");
            $(".tabPizzaLabel").addClass("rounded");
            $("#pizzaCrustLabel").removeClass("rounded");
        }
        else
        {
            $("#pizzaCrustContent").slideToggle("fast");
            $("#pizzaCrustLabel").toggleClass("rounded");
        }
    });

    $("#pizzaMeatLabel").click(function() {
        if ($("#pizzaMeatContent").is(":visible"))
        {
            $("#pizzaMeatContent").slideUp("fast");
            $("#pizzaMeatLabel").toggleClass("rounded");
        }
        else if ($(".tabPizzaContent").is(":visible"))
        {
            $(".tabPizzaContent").slideUp("fast");
            $("#pizzaMeatContent").slideToggle("fast");
            $(".tabPizzaLabel").addClass("rounded");
            $("#pizzaMeatLabel").removeClass("rounded");
        }
        else
        {
            $("#pizzaMeatContent").slideToggle("fast");
            $("#pizzaMeatLabel").toggleClass("rounded");
        }
    });

    $("#pizzaVeggieLabel").click(function() {
        if ($("#pizzaVeggieContent").is(":visible"))
        {
            $("#pizzaVeggieContent").slideUp("fast");
            $("#pizzaVeggieLabel").toggleClass("rounded");
        }
        else if ($(".tabPizzaContent").is(":visible"))
        {
            $(".tabPizzaContent").slideUp("fast");
            $("#pizzaVeggieContent").slideToggle("fast");
            $(".tabPizzaLabel").addClass("rounded");
            $("#pizzaVeggieLabel").removeClass("rounded");
        }
        else
        {
            $("#pizzaVeggieContent").slideToggle("fast");
            $("#pizzaVeggieLabel").toggleClass("rounded");
        }
    });

});