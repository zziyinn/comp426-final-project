// 获取筛选表单和结果区域的元素
const filterForm = document.getElementById("filter-form");
const exerciseList = document.getElementById("exercise-list");

// 监听表单提交事件
filterForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // 获取用户选择的值
  const muscleGroup = document.getElementById("muscle-group").value;
  const level = document.getElementById("level").value;

  // 清空现有的结果并显示加载状态
  exerciseList.innerHTML = "Loading exercises...";

  try {
   
    const apiUrl = `http://localhost:8000/random-workout?muscleGroup=${muscleGroup}&level=${level}&num=5`;
    console.log("API URL:", apiUrl); // 检查 API URL 是否正确

    // 调用 API 获取锻炼数据
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch exercises");
    }

    const exercises = await response.json();

    // 清空加载状态
    exerciseList.innerHTML = "";

    // 显示锻炼结果
    exercises.forEach((exercise) => {
      const exerciseItem = document.createElement("div");
      exerciseItem.className = "exercise-item";
      exerciseItem.innerHTML = `
        <h3>${exercise.Exercise}</h3>
        <p>Muscle Group: ${exercise.MuscleGroup}</p>
        <p>Level: ${exercise.Level}</p>
    
      `;
      exerciseList.appendChild(exerciseItem);
    });
  } catch (error) {
    // 显示错误信息
    exerciseList.innerHTML = `<p>Error loading exercises: ${error.message}</p>`;
  }
console.log(apiUrl);

  

});
