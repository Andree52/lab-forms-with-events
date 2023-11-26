function handleTodoFormSubmit(event) {
    event.preventDefault();
  
    const inputValue = document.getElementById('todo-input').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    if (inputValue === '') {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Please enter a valid to-do!';
      
      setTimeout(() => {
        errorMessage.style.display = 'none';
      }, 3000);
    } else {
      const newTodoItem = document.createElement('li');
      newTodoItem.textContent = inputValue;
  
      newTodoItem.addEventListener('click', function() {
        this.classList.toggle('completed');
      });
  
      document.getElementById('todo-list').appendChild(newTodoItem);
      document.getElementById('todo-input').value = '';
    }
  }
  
  document.getElementById('todo-form').addEventListener('submit', handleTodoFormSubmit);
  
console.log("handletodoformSubmit")
