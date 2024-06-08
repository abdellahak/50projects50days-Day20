let button = document.getElementById('rippleButton');


button.addEventListener('click', function(event){
    let x = event.clientX;
    let y = event.clientY;
    let buttonLeft = event.target.offsetLeft;
    let buttontop = event.target.offsetTop;

    x -= buttonLeft;
    y -= buttontop;

    let circle = document.createElement('span');
    circle.className = 'circle';
    circle.style.left=`${x}px`;
    circle.style.top=`${y}px`;
    button.append(circle);
    setTimeout(function(){
        circle.remove()
    }, 500)


})