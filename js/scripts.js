//back end
var sizePrice = [21, 23, 28, 31]



function Customer(first, last, street, city, state){
  this.firstName = first;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.state = state;
  this.pies = [];
  this.orderTotal = 0;
}

function Pie(size, sauce, topping){
  this.pieSize = size;
  this.pieSauce = sauce;
  this.pieTopping = topping;
    this.piePrice = 0;
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
  }
};

Customer.prototype.addTotal = function() {
  for(var i = 0; i < this.pies.length; i++){
    this.orderTotal += this.pies[i].piePrice;
    }
    console.log(this.orderTotal);
}


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
                                  '<option>pepperoni</option>'+
                                  '<option>sausage</option>'+
                                  '<option>bacon</option>'+
                                  '<option>mushrooms</option>'+
                                  '<option>artichoke hearts</option>'+
                                  '<option>garlic</option>'+
                                  '<option>olives</option>'+
                                  '<option>roasted peppers</option>'+
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
    console.log(newCustomer);
    $(".output-first-name").text(newCustomer.firstName);
    $(".output-last-name").text(newCustomer.lastName);
    $(".output-street").text(newCustomer.street);
    $(".output-city").text(newCustomer.city);
    $(".output-state").text(newCustomer.state);
    $(".output-cost").text(newCustomer.orderTotal);


    newCustomer.pies.forEach(function(pie){
      $("ul#pies").append("<li><span class='pie'>Pie: " + pie.pieTopping + "</span></li>"+
                          "<p><span>Sauce: " + pie.pieSauce + "</span></p>"+
                          "<p><span>Size: " + pie.pieSize + "</span></p>"+
                          "<p><span>Price: " + pie.piePrice + "</span></p>"+
                          "<h1></h1>");
    });
  });
});
