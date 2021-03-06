import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import './CourseGoalList.css'

const CourseGoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={props.onDelete}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
