$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    var items = ['item1', 'item2', 'item3', 'item4'];
    var inputs = [];

    items.forEach(function(item) {
      var userInput = $("input#" + item).val();
      inputs.push(userInput);
    });
    inputs.sort();
    $("#list li").remove();
    inputs.forEach(function(input) {
      $("ul").append("<li>" + input.toUpperCase() + "</li>");
    });
    $("#list").show();
  event.preventDefault();
  console.log();
  });
});
