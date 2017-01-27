//back end

function Customer(first, last, street, city, state){
  this.firstName = first;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.state = state;
  this.pies = [];
  this.orderTotal = 0;
};

function Pie(size, sauce, topping){
  this.pieSize = size;
  this.pieSauce = sauce;
  this.pieTopping = topping;
    this.piePrice = 0;
};

var clearFields = function(){
  $("input#customer-first-name").val("");
  $("input#customer-last-name").val("");
  $("input#customer-street").val("");
  $("input#customer-city").val("");
  $("input#customer-state").val("");
};

Pie.prototype.findPrice = function (){
  if (this.pieSize === "Small"){
    return 21
  } else if (this.pieSize == "Medium"){
    return 23
  } else if (this.pieSize == "Large"){
    return 28
  } else if (this.pieSize == "Obscene"){
    return 31
  };
};

Customer.prototype.addTotal = function() {
  for(var i = 0; i < this.pies.length; i++){
    this.orderTotal += this.pies[i].piePrice;
  };
};

//front end
$(document).ready(function(){
  $("#add-pie").click(function(){
    $("#new-pie").append('<div class="new-pie">'+
                          '<div class="form-group">'+
                            '<label for="pie-size">Pie Size</label>'+
                            '<select class="form-control pie-size">'+
                              '<option>Small</option>'+
                              '<option>Medium</option>'+
                              '<option>Large</option>'+
                              '<option>Obscene</option>'+
                            '</select>'+
                          '</div>'+
                          '<div class="form-group">'+
                            '<label for="pie-sauce">Sauce</label>'+
                            '<select class="form-control pie-sauce">'+
                              '<option>Tomato</option>'+
                              '<option>Olive Oil</option>'+
                              '<option>Basil Pesto</option>'+
                              '<option>Bechamel</option>'+
                            '</select>'+
                          '</div>'+
                          '<div id="new-toppings">'+
                            '<div class="new-topping">'+
                              '<div class="form-group">'+
                                '<label for="pie-topping">State</label>'+
                                '<select class="form-control pie-topping">'+
                                  '<option>Pepperoni</option>'+
                                  '<option>Sausage</option>'+
                                  '<option>Bacon</option>'+
                                  '<option>Mushrooms</option>'+
                                  '<option>Artichoke hearts</option>'+
                                  '<option>Garlic</option>'+
                                  '<option>Olives</option>'+
                                  '<option>Roasted peppers</option>'+
                                '</select>'+
                              '</div>'+
                            '</div>'+
                          '</div>');
  });
  $("form#new-customer").submit(function(event) {
    event.preventDefault();
    var inputFirstName = $("input#customer-first-name").val();
    var inputLastName = $("input#customer-last-name").val();
    var inputStreet = $("input#customer-street").val();
    var inputCity = $("input#customer-city").val();
    var inputState = $("input#customer-state").val();
    var newCustomer = new Customer(inputFirstName, inputLastName, inputStreet, inputCity, inputState);
    $(".new-pie").each(function(){
      var inputSize = $(this).find(".pie-size").val();
      var inputSauce = $(this).find(".pie-sauce").val();
      var inputTopping = $(this).find(".pie-topping").val();
      var newPie = new Pie(inputSize, inputSauce, inputTopping);
      newPie.piePrice = newPie.findPrice();
      newCustomer.pies.push(newPie);
    });
    newCustomer.addTotal();
    $(".output-first-name").text(newCustomer.firstName);
    $(".output-last-name").text(newCustomer.lastName);
    $(".output-street").text(newCustomer.street);
    $(".output-city").text(newCustomer.city);
    $(".output-state").text(newCustomer.state);
    $(".output-cost").text(newCustomer.orderTotal);
    newCustomer.pies.forEach(function(pie){
      $("ul#pies").append("<li><span class='pie'>Pie:</span> " + pie.pieTopping +
                          "<br>   Sauce: " + pie.pieSauce + "<br>  Size: " + pie.pieSize + "<br>  Price: $" + pie.piePrice + "</li><h1></h1>");
    });
    clearFields();
    $("#input").slideUp();
    $("#output").slideDown();
    $("#confirm").click(function(){
      alert("Thanks for confirming your order.  If this were a real pizzeria, our scurvy kitchen slaves would even now commence making your gutbomb, but since it isn't, we're going to refresh the page.");
      location.reload();
    });
    $("#reload").click(function(){
      alert("Sorry about that, please start all over again!");
      location.reload();
    });
  });
});
