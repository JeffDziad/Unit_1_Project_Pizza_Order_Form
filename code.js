$(document).ready(function (){
    $("#orderNow").click(function (){
       window.location = 'order.html';
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

    $("#confirmOrderTab").click(sendToOrderSummary);


    function sendToOrderSummary()
    {
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var streetAddress = $("#streetAdd").val();
        var phone = $("#phone").val();

        var pizzaSize = $("input[name=pizzaSize]:checked").val();
        if (pizzaSize === undefined)
        {
            pizzaSize = "None Selected";
        }
        var pizzaCrust = $("input[name=pizzaCrust]:checked").val();
        if (pizzaCrust === undefined)
        {
            pizzaCrust = "None Selected"
        }
        var pizzaToppingsMeat = [];
        var pizzaToppingsVeggie = [];
        $("input[name=meats]:checked").each(function() {
            pizzaToppingsMeat.push($(this).val())
        });
        $("input[name=veggies]:checked").each(function() {
            pizzaToppingsVeggie.push($(this).val());
        });
        var pizzaSizeCost = 0;
        var pizzaToppingsMeatCost = pizzaToppingsMeat.length * 1.50;
        var pizzaToppingsVeggieCost = pizzaToppingsVeggie.length;

        switch (pizzaSize)
        {
            case "Small":
                pizzaSizeCost = 7;
                break;
            case "Medium":
                pizzaSizeCost = 9;
                break;
            case "Large":
                pizzaSizeCost = 12;
                break;
        }

        var subTotal = pizzaSizeCost + pizzaToppingsMeatCost + pizzaToppingsVeggieCost;

        var taxAmt = subTotal * 0.051;

        var deliveryFee = 2;

        var total = subTotal + taxAmt + deliveryFee;

        $("#outputID").text(`Customer Information:\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nAddress: ${streetAddress}\nPhone Number: ${phone}`);
        $("#output").text(`Pizza Size: ${pizzaSize}\nPizza Crust: ${pizzaCrust}\nMeat Toppings: ${pizzaToppingsMeat}\nVeggie Toppings: ${pizzaToppingsVeggie}\n\nSubtotal: $${subTotal}\nTax: $${taxAmt.toFixed(2)}\nDelivery Fee: $${deliveryFee}\n\nTotal: $${total.toFixed(2)}`);

    }

});