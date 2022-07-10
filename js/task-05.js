const refs = {
    input : document.querySelector('#name-input'),
    output : document.querySelector('#name-output'),
}

refs.input.addEventListener('click', onInputChange);

function onInputChange (event){
    if(refs.input.value !== ''){
        refs.output.textContent = event.currentTarget.value;
    }else{
        refs.output.textContent = "Anonymous" ;
    }
}