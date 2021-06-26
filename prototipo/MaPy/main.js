var slider = document.getElementById("myRango");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
