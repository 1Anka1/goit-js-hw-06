const counter = {
    value: 0,

  decrementValueCounter() {
    this.value -= 1;
  },

  incrementValueCounter() {
    this.value += 1;
  },
};

const refs = {
    decrementBotton: document.querySelector('[data-action="decrement"]'),
    incrementBotton: document.querySelector('[data-action="increment"]'),
    counterValue : document.querySelector('#value')
}

refs.decrementBotton.addEventListener ('click', function(){
    counter.decrementValueCounter()
    refs.counterValue.textContent = counter.value;
})

refs.incrementBotton.addEventListener ('click', function(){
    counter.incrementValueCounter()
    refs.counterValue.textContent = counter.value;
})
