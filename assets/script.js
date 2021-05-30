let input = document.querySelector('.input');
let items = Array.from(document.querySelectorAll('.item'));
items.forEach(function(btn) {
    btn.addEventListener('click', function(){
        if(input.innerHTML=='0') 
        // để không bi trường hợp 0123 mà hiện 123
        input.innerHTML='';
        if(btn.innerHTML=='AC')
        input.innerHTML='0';
        else if (btn.innerHTML=='DEL') {
            let arrtext = Array.from(input.innerHTML);
            arrtext.splice(arrtext.length -1, 1);
            if(arrtext.length!=0)
            input.innerHTML = arrtext.join('');
            else input.innerHTML='0';
        }
        else if (btn.innerHTML == '=') {
            input.innerHTML = eval(input.innerHTML);
            
        }
        else input.innerHTML += btn.innerHTML;
    })
})