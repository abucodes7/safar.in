// Toggle Chatbot Window
const chatbotIcon = document.querySelector('.chatbot-icon');
const chatbotWindow = document.querySelector('.chatbot-window');
const closeBtn = document.querySelector('.close-btn');

chatbotIcon.addEventListener('click', () => {
  chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
});

closeBtn.addEventListener('click', () => {
  chatbotWindow.style.display = 'none';
});

// Continue Without Login
const continueWithoutLoginBtn = document.getElementById('continue-without-login');
const loginPage = document.querySelector('.login-page');
const userInputForm = document.querySelector('.user-input-form');

continueWithoutLoginBtn.addEventListener('click', () => {
  loginPage.style.display = 'none';
  userInputForm.style.display = 'block';
});

// Trip Form Submission
document.getElementById('trip-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const source = document.getElementById('source').value;
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;
  const budget = document.getElementById('budget').value;
  alert(`Trip planned from ${source} to ${destination} on ${date} with a budget of ₹${budget}.`);
});