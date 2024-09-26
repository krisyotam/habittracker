document.addEventListener("DOMContentLoaded", function () {
    const habitList = document.getElementById("habit-list");
    const addHabitBtn = document.getElementById("add-habit-btn");
    const habitModal = document.getElementById("habit-modal");
    const closeModalBtn = document.querySelector(".close");
    const saveHabitBtn = document.getElementById("save-habit-btn");
    const habitNameInput = document.getElementById("habit-name");
  
    // Open Modal
    addHabitBtn.addEventListener("click", () => {
      habitModal.style.display = "flex";
    });
  
    // Close Modal
    closeModalBtn.addEventListener("click", () => {
      habitModal.style.display = "none";
    });
  
    // Save New Habit
    saveHabitBtn.addEventListener("click", () => {
      const habitName = habitNameInput.value.trim();
      if (habitName !== "") {
        addHabit(habitName);
        habitNameInput.value = "";
        habitModal.style.display = "none";
      }
    });
  
    // Add habit to the list
    function addHabit(name) {
      const habitItem = document.createElement("div");
      habitItem.classList.add("habit-item");
  
      const habitName = document.createElement("span");
      habitName.classList.add("habit-name");
      habitName.textContent = name;
  
      const habitCheck = document.createElement("div");
      habitCheck.classList.add("habit-check");
      habitCheck.addEventListener("click", () => {
        habitCheck.classList.toggle("checked");
      });
  
      habitItem.appendChild(habitName);
      habitItem.appendChild(habitCheck);
      habitList.appendChild(habitItem);
    }
  
    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
      if (event.target === habitModal) {
        habitModal.style.display = "none";
      }
    });
  });
  