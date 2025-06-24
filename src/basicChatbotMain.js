import axios from 'axios';

const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (!userMessage) return;

  addMessage('You', userMessage);
  input.value = '';

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userMessage }]
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const botReply = response.data.choices[0].message.content;
    addMessage('Bot', botReply);
  } catch (error) {
    addMessage('Bot', 'Error: Failed to fetch response.');
    console.error(error);
  }
});

function addMessage(sender, text) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
