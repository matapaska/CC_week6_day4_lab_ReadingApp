document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const submit = document.querySelector('#new-item-form');
  submit.addEventListener('submit', handleFormSubmit);
  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('submit', handleElementDelete);
})

const handleFormSubmit = function (event){
  event.preventDefault();
  console.log(event);
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const outputBook = document.createElement('li')
  outputBook.textContent = `${title} ${author} ${category}`;
  outputBook.classList.add('book');

  const list = document.querySelector('#reading-list');
  list.appendChild(outputBook);
  const submit = document.querySelector('#new-item-form');
  submit.reset();
};

const handleElementDelete = function(event){
  const listDiv = document.querySelector('#reading-list-div')
  listDiv.removeChild(list);
}
