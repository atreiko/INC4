
/**
 * @param { Object } selectObject 
 * @returns { Number } 
 * count of select options
 */
const form = document.selectForm;
const select = form.musicTypes

function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
  alert('Выбрано элементов: ' + howMany(select))
});


