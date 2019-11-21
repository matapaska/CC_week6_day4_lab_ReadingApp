document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const submit = document.querySelector('#new-item-form');
  submit.addEventListener('submit', handleFormSubmit);

})

const handleFormSubmit = function (event){
  event.preventDefault();
  console.log(event);
}
