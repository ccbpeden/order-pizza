//back end

function Customer(first, last){
  this.firstName = first;
  this.lastName = last;
  this.pies = [];

}

function Pie(size, sauce){
  this.pieSize = size;
  this.pieSauce = sauce;
  this.toppings = [];
}

var NewCustomer = new Customer;

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
});
