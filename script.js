const chk = document.getElementById('chk')
const valueIn = document.getElementById('valueIn')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

valueIn.addEventListener('change', function(){
  console.log('troquei o valor')
})