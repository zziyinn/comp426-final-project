// 获取 DOM 元素
const filterForm = document.getElementById("filter-form");
const exerciseList = document.getElementById("exercise-list");

// 监听表单提交事件
filterForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const muscleGroup = document.getElementById("muscle-group").value;
  const level = document.getElementById("level").value;

  // 确保必填字段有值
  if (!muscleGroup || !level) {
    exerciseList.innerHTML = `<p>Please select both Muscle Group and Level.</p>`;
    return;
  }

   // 确保 apiUrl 正确构造
  const apiUrl = `http://localhost:8000/random-workout?muscleGroup=${muscleGroup}&level=${level}&num=5`;

  console.log("API URL:", apiUrl); // 检查 URL 是否正确
  
  try {
    // 发起 API 请求
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch exercises");
    }

    const exercises = await response.json();
    displayExercises(exercises); // 显示锻炼结果
  } catch (error) {
    console.error("Error fetching exercises:", error.message);
    exerciseList.innerHTML = `<p>Error loading exercises: ${error.message}</p>`;
  }
});

// 显示锻炼结果
function displayExercises(exercises) {
  exerciseList.innerHTML = ""; // 清空现有内容

  exercises.forEach((exercise) => {
    const item = document.createElement("div");
    item.className = "exercise-item";
    item.innerHTML = `
      <h3>${exercise.Exercise}</h3>
      <p>Muscle Group: ${exercise.MuscleGroup}</p>
      <p>Level: ${exercise.Level}</p>
      <p>Modality: ${exercise.Modality}</p>
    `;
    exerciseList.appendChild(item);
  });
}
