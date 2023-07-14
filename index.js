let rate;
function display(id){
    document.querySelectorAll('.rating').forEach((itm)=>itm.classList.remove('selected'));
    rate = id.innerHTML;
    id.classList.add('selected');
    let button = document.querySelector(".custom-btn");
    button.disabled = false;
};

function submit(){
    document.getElementById('one').classList.add('d-none');
    document.getElementById('two').classList.remove('d-none');
    document.getElementById('displayHeading').innerHTML="You selected "+rate+" out of 5"
}