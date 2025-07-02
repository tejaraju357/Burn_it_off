import {BsCheckCircleFill} from 'react-icons/bs'
import './index.css'

const ExerciseItem = props => {
  const {exerciseDetails, updateExerciseItemAsCompleted} = props
  const {id, name, imageUrl, calories, isCompleted} = exerciseDetails

  const onClickCompleteIcon = () => {
    updateExerciseItemAsCompleted(id)
  }

  return (
    <div
      className={"exercise-details-container"}
    >
      <li className="exercise-item">
        <img src={imageUrl} alt={name} className="exercise-image" />
        <div className="exercise-details">
          <p className="exercise-name">{name}</p>
          <p className="exercise-calories">{ calories }</p>
        </div>
        <button
          type="button"
          className={"exercise-button"}
          onClick={onClickCompleteIcon}
          data-testid={"complete"}
          color = "#cbd5e1"
        >
          <BsCheckCircleFill
            
            className={`${isCompleted ? 'exercise-completed' : ''}`}
            data-testid="check-icon" 
          />
        </button>
      </li>
    </div>
  )
}

export default ExerciseItem
