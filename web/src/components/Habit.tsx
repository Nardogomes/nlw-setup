interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {
  return <h1>Habit complited: {props.completed} </h1>
}
