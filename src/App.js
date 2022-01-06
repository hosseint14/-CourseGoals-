import { useState } from "react";
import CourseGoalList from "./component/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./component/CourseGoals/CourseInput/CourseInput";
import "./App.css";

function App() {
  const [courseGoal, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "e1" },
    { text: "Finish the course!", id: "e2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoal) => {
      const updateGoals = [...prevGoal];
      updateGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updateGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoal) => {
      const updateGoals = prevGoal.filter((goal) => goal.id !== goalId);
      return updateGoals;
    });
  };
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoal.length > 0) {
    content = (
      <CourseGoalList items={courseGoal} onDelete={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );

  
}

export default App;
