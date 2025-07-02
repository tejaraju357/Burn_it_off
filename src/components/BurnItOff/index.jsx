import {useState, useEffect} from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'
import ExerciseItem from '../ExerciseItem'
import './index.css'

const initialExercisesList = [
  {
    id: '10de38ea-bb3a-11ec-8422-0242ac120002',
    name: 'Barbell Squats',
    calories: 250,
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/squats.png',
    isCompleted: false,
  },
  {
    id: '10de3e80-bb3a-11ec-8422-0242ac120002',
    name: 'Treadmill',
    calories: 250,
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/treadmill.png',
    isCompleted: false,
  },
  {
    id: '10de3fde-bb3a-11ec-8422-0242ac120002',
    name: 'Chest Press',
    calories: 200,
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/chest_press.png',
    isCompleted: false,
  },
  {
    id: '10de4128-bb3a-11ec-8422-0242ac120002',
    name: 'Lat Pulldown',
    calories: 300,
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/pulldown.png',
    isCompleted: false,
  },
  {
    id: '10de4290-bb3a-11ec-8422-0242ac120002',
    name: 'Dumbbells Exercise',
    calories: 200,
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/dumbells.png',
    isCompleted: false,
  },
  {
    id: '10de43c6-bb3a-11ec-8422-0242ac120002',
    name: 'Jump Roping',
    calories: 300,
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/jumping.png',
    isCompleted: false,
  },
  {
    id: '10de4506-bb3a-11ec-8422-0242ac120002',
    name: 'Stability Ball',
    calories: 200,
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/stability_ball.png',
    isCompleted: false,
  },
  {
    id: '10de463c-bb3a-11ec-8422-0242ac120002',
    name: 'Hula Hooping',
    calories: 300,
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/hooping.png',
    isCompleted: false,
  },
]

const caloriesBurnStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  done: 'DONE',
}

const BurnItOff = () => {
  const [exercisesList, setExercisesList] = useState(initialExercisesList)
  const [caloriesTarget, setCaloriesTarget] = useState(0)
  const [caloriesBurnStatus, setCaloriesBurnStatus] = useState(
    caloriesBurnStatusConstants.initial,
  )
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    document.title = `Target: ${caloriesTarget}`
  }, [caloriesTarget,caloriesBurnStatus])

  const renderCongratulationsView = () => (
    <div className="congratulations-container">
      <BsCheckCircleFill color="#10B981" size={48} />
      <h1 className="congratulations-heading">Congratulations!</h1>
      <p className="congratulations-description">
        You reached the goal and you have completed all the exercises.
      </p>
    </div>
  )

  const decrementExerciseItemCalories = exerciseId => {
    const exerciseObject = exercisesList.find(
      eachExerciseItem => eachExerciseItem.id === exerciseId,
    )
    const updatedCaloriesTarget =
      parseInt(caloriesTarget) - exerciseObject.calories

    if (updatedCaloriesTarget <= 0) {
      setCaloriesTarget(0)
      setCaloriesBurnStatus(caloriesBurnStatusConstants.done)
    } else {
      setCaloriesTarget(updatedCaloriesTarget)
    }
  }

  const updateExerciseItemAsCompleted = exerciseId => {
    const exerciseObject = exercisesList.find(
      eachExerciseItem => eachExerciseItem.id === exerciseId,
    )

    if (exerciseObject.isCompleted === false) {
      setExercisesList(prevExercisesList =>
        prevExercisesList.map(exercise => {
          if (exerciseId === exercise.id) {
            return {
              ...exercise,
              isCompleted: true,
            }
          }
          return exercise
        }),
      )
      decrementExerciseItemCalories(exerciseId)
    }
  }

  const renderExercisesView = () => (
    <div className="exercises-container">
      <div className="target-container">
        <div className="target-sub-container">
          <p className="target-paragraph">TARGET</p>
          <h1 className="target-heading">{caloriesTarget}</h1>
          <p className="calories-paragraph">Calories</p>
        </div>
      </div>
      <div className="exercises-container">
      {exercisesList.map(exercise => (
        <ExerciseItem
          key={exercise.id}
          exerciseDetails={exercise}
          updateExerciseItemAsCompleted={updateExerciseItemAsCompleted}
        />
      ))}
    </div>
    </div>
  )

  const updateCaloriesTarget = calories => {
    setCaloriesTarget(calories)
  }

  const onChangeCalories = event => {
    updateCaloriesTarget(event.target.value)
  }

  const onSubmitFailure = () => {
    setErrorMessage(
      'Calories target should not be greater than 2000 and less than 1',
    )
  }

  const onSubmitSuccess = () => {
    setCaloriesBurnStatus(caloriesBurnStatusConstants.inProgress)
  }

  const onSubmitForm = async event => {
    event.preventDefault()
    if (caloriesTarget > 0 && caloriesTarget <= 2000) {
      onSubmitSuccess()
    } else {
      onSubmitFailure()
    }
  }

  const renderCaloriesView = () => (
    <form className="input-form-container" onSubmit={onSubmitForm}>
      <label className="label" htmlFor="caloriesToBeBurn">
        Calories to burn
      </label>
      <input
        className="input"
        type="text"
        id="caloriesToBeBurn"
        placeholder="Enter Calories to Burn"
        onChange={onChangeCalories}
        value={caloriesTarget}
        autoComplete="off"
      />
      <button className="submit-button" type="submit">
        Submit
      </button>
      {errorMessage && <p className="error-message">*{errorMessage}</p>}
    </form>
  )

  const renderCaloriesBurnStatus = () => {
    switch (caloriesBurnStatus) {
      case caloriesBurnStatusConstants.initial:
        return renderCaloriesView()
      case caloriesBurnStatusConstants.inProgress:
        return renderExercisesView()
      case caloriesBurnStatusConstants.done:
        return renderCongratulationsView()
      default:
        return null
    }
  }

  return (
    <div className="burn-it-off-container" data-testid="burnItOff">
      <h1 className="burn-it-off-heading">BURN IT OFF</h1>
      {renderCaloriesBurnStatus()}
    </div>
  )
}

export default BurnItOff
