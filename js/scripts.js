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

 
