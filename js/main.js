//user click on the 'add' button
// if there is any text inside the item field, add that text to the todo list
document.getElementById("addItem").addEventListener('click', function() {
    var value = document.getElementById("item").value;
    console.log(value);
});