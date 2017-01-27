//back end

function Customer(first, last){
  this.firstName = first;
  this.lastName = last;
  this.pies = [];

}

function Pie(size, sauce, topping){
  this.pieSize = size;
  this.pieSauce = sauce;
  this.topping = topping;
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
    var inputStreet = $("input.form-control street").val();
    var inputCity = $("input.form-control city").val();
    var inputState = $("input.form-control state").val();
    var newCustomer = new Customer(inputFirstName, inputLastName);
    $(".new-pie").each(function(){
      var inputSize = $(this).find(".pie-size").val();
      var inputSauce = $(this).find(".pie-sauce").val();
      var inputTopping = $(this).find(".pie-topping").val();
      var newPie = new Pie(inputSize, inputSauce, inputTopping);
      newCustomer.pies.push(newPie);
      // newCustomer.pies.forEach(function(){
        console.log(inputTopping);
       $("ul#pies").append("<li><span class='pie'>" + inputTopping + "</span></li>")
      // })

    });
  console.log(newCustomer);
  });
});
