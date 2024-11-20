const workoutList = document.getElementById('workout-list');

const url = 'https://gym-fit.p.rapidapi.com/v1/exercises/search?number=50&offset=0'; // 替换为你需要的ID或动态生成的ID
const options = {
  method: 'GET',
  headers: {
		'x-rapidapi-key': '6a01d0b5e0msh2e95cd49b37ed31p1a2294jsnb17ce4df3e62',
		'x-rapidapi-host': 'gym-fit.p.rapidapi.com'
	}
};

async function fetchWorkoutDetails() {
  try {
    console.log('Fetching workout details...');
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const exercise = await response.json(); // 假设返回单一练习对象
    console.log('Exercise fetched:', exercise);

    // 清空之前的内容
    workoutList.innerHTML = '';

    // 动态显示锻炼建议
    const exerciseItem = document.createElement('div');
    exerciseItem.classList.add('exercise-item');
    exerciseItem.innerHTML = `
      <h3>${exercise.name}</h3>
      <p><strong>Muscle Group:</strong> ${exercise.muscleGroup}</p>
      <p><strong>Equipment:</strong> ${exercise.equipment || 'None'}</p>
      <p><strong>Instructions:</strong> ${exercise.instructions || 'Follow the standard practice.'}</p>
    `;
    workoutList.appendChild(exerciseItem);
  } catch (error) {
    console.error('Error fetching workout details:', error);
    workoutList.innerHTML = '<p>Failed to load workout details. Please try again later.</p>';
  }
}

// 调用函数，页面加载时加载数据
fetchWorkoutDetails();
