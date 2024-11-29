// sessionStorage 
document.addEventListener('DOMContentLoaded', () => {
    const userGreeting = document.getElementById('user-greeting');
    const userNameInput = document.getElementById('user-name');
    const saveNameButton = document.getElementById('save-name-button');

  
    const storedName = sessionStorage.getItem('userName');
    if (storedName) {
        userGreeting.textContent = `Welcome back, ${storedName}!`;
        userNameInput.style.display = 'none'; 
        saveNameButton.style.display = 'none'; 
    }

    saveNameButton.addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        if (userName) {
            sessionStorage.setItem('userName', userName);
            userGreeting.textContent = `Welcome, ${userName}!`;
            userNameInput.style.display = 'none'; 
            saveNameButton.style.display = 'none'; 
        }
    });
});
