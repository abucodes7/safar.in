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

// Login Form Submission
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Login successful!');
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