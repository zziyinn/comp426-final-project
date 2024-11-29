// 检查 sessionStorage 中是否保存了用户的名字
document.addEventListener('DOMContentLoaded', () => {
    const userGreeting = document.getElementById('user-greeting');
    const userNameInput = document.getElementById('user-name');
    const saveNameButton = document.getElementById('save-name-button');

    // 从 sessionStorage 加载用户名
    const storedName = sessionStorage.getItem('userName');
    if (storedName) {
        userGreeting.textContent = `Welcome back, ${storedName}!`;
        userNameInput.style.display = 'none'; // 隐藏输入框
        saveNameButton.style.display = 'none'; // 隐藏保存按钮
    }

    // 保存用户名到 sessionStorage
    saveNameButton.addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        if (userName) {
            sessionStorage.setItem('userName', userName);
            userGreeting.textContent = `Welcome, ${userName}!`;
            userNameInput.style.display = 'none'; // 隐藏输入框
            saveNameButton.style.display = 'none'; // 隐藏保存按钮
        }
    });
});
