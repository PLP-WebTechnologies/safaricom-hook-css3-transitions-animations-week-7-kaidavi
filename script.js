// Function with parameters and return values
function calculateArea(length, width) {
    return length * width;
  }
  
  const area = calculateArea(10, 5); // Example usage
  console.log(`The area is: ${area}`);
  
  // Demonstrating scope
  let globalMessage = "I am a global variable!";
  
  function demonstrateScope() {
    let localMessage = "I am a local variable!";
    console.log(globalMessage); // Accessible
    console.log(localMessage);  // Accessible
  }
  // Uncomment to test scope
  // console.log(localMessage); // Error: localMessage is not defined
  
  // Function to toggle modal visibility
  function toggleModal() {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('hidden');
  }
  
  // Event listener to toggle the modal
  document.querySelector('.toggle-modal-btn').addEventListener('click', toggleModal);
  
  // Trigger spinner animation
  document.querySelector('.trigger-animation-btn').addEventListener('click', () => {
    const spinner = document.querySelector('.spinner');
    spinner.classList.remove('hidden');
  
    // Reset spinner animation after 3 seconds
    setTimeout(() => {
      spinner.classList.add('hidden');
    }, 3000);
  });
  