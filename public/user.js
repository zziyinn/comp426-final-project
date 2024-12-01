const userGreeting = document.getElementById('user-greeting');
const userNameInput = document.getElementById('user-name');
const saveNameButton = document.getElementById('save-name-button');

const userName = userNameInput.value.trim();

saveNameButton.addEventListener('click', async (event) => {
    const userName = userNameInput.value.trim();

    if (!userName) {
        alert('Please enter a valid name!');
        return;
    } else {
        sessionStorage.setItem('currentUser', userName);
        const apiURL = 'http://localhost:8000/user?userName=' + userName;
        let fetchResult = await fetch(apiURL);
        if (!fetchResult.ok) {
            throw new Error('Failed to fetch exercises');
        }
        let result_json = await fetchResult.json();
        console.log(result_json);
        if (result_json.message === 'New') {
            console.log('New user');
            userGreeting.textContent = `Welcome, ${userName}!`;
            userNameInput.style.display = 'none'; 
            saveNameButton.style.display = 'none';
        } else {
            userGreeting.textContent = `Welcome back, ${userName}!`;
            userNameInput.style.display = 'none'; 
            saveNameButton.style.display = 'none';
        }
        window.location.href='main.html';
    }
});
