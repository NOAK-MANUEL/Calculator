(function() {
  let btns = document.querySelectorAll('.btn')
  let del = document.querySelector('.delete')
  let clear = document.querySelector('.clear')
  let equal = document.querySelector('.btn-equal')
  let screen = document.querySelector('.screen')
  let screen2 = document.querySelector('.screen2')

  btns.forEach(function(btn) {
    btn.addEventListener('click', function(p) {
      let value = p.target.dataset.num
      screen.value += value  
      screen2.value = eval(screen.value)    

      // setTimeout(() => {
      //   screen2.value =''
      // }, 100);
    })
  })

  equal.addEventListener('click', function() {
    if (screen.value === '') {
      screen.value = 'NaN'
      setTimeout(() => {
        screen.value = ''
      }, 1500);
    }else {
      let result = eval(screen.value)
      screen2.value = result     
      screen.value =''
      screen2.style.opacity = '1';
    }
    
  })

  clear.addEventListener('click', function() {
    screen.value = ''
    screen2.value = ''
    screen2.style.opacity = '.4';
  })

  del.addEventListener('click', function() {
    let del = screen.value.slice(0, -1)
    screen.value = del
  })
})()

