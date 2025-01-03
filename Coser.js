function openNav() {
            document.getElementById("sidebar").style.width = "250px";
            document.getElementById("sidebar").setAttribute("aria-hidden", "false");
        }

        function closeNav() {
            document.getElementById("sidebar").style.width = "0";
            document.getElementById("sidebar").setAttribute("aria-hidden", "true");
        }

            function toggleChat() {
                const chatContainer = document.getElementById('chat-container');
                chatContainer.style.display = chatContainer.style.display === 'flex' ? 'none' : 'flex';
            }
    
            function sendMessage() {
                const userInput = document.getElementById('user-input');
                const chatMessages = document.getElementById('chat-messages');

                if (userInput.value.trim() !== '') {
                    // User message
                    const userMessage = document.createElement('div');
                    userMessage.className = 'message user-message';
                    userMessage.textContent = userInput.value;
                    chatMessages.appendChild(userMessage);

                    // Bot message
                    const botMessage = document.createElement('div');
                    botMessage.className = 'message bot-message';
                    botMessage.innerHTML = getBotResponse(userInput.value); // Use innerHTML to render links
                    chatMessages.appendChild(botMessage);

                    userInput.value = '';
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }
            }
    
            function getBotResponse(input) {
                const responses = {
                    hello: "Hi there! I’m Luce’s helper. How can I assist you today?",
                    events: `You can find the list of events on the <a href="EventsPage.html" style="color: #6200ea; text-decoration: underline;">Events page</a>!`,
                    contact: `Reach out to Luce on the <a href="ContactPage.html" style="color: #6200ea; text-decoration: underline;">Contact page</a>!`,
                    commission: `Learn more about commissions on the <a href="CommissionsPage.html" style="color: #6200ea; text-decoration: underline;">Commissions page</a>!`,
                    bye: "Goodbye! Feel free to chat again anytime.",
                    cosplay: "Cosplay is all about creativity and fun! Do you have a favorite character you want to dress as?",
                };

                return responses[input.trim().toLowerCase()] || "I'm here to help! Ask me about events, contact info, or commissions.";
            }
