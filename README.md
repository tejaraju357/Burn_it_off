In this project, let's build a **Burn it off** app by applying the concepts we have learned till now.

You’ll be provided with pre-filled code, including the basic React Code and the CSS styles.

Your task is to read the given code carefully and then complete the missing parts to achieve the expected output shown in the reference image.

### Refer to the image below:

<br/>
<div style="text-align: center;">
  <video
      disablePictureInPicture
      style="max-width:80%; box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12); outline:none;"
      loop="true"
      autoplay="autoplay"
      controls="controls"
      muted>
      <source src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/Burn_it_off%201.mp4" type="video/mp4">
  </video>

</div>
<br/>


### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm run dev`
</details>

### Completion Instructions

<details>
<summary>Functionality should be present in the code</summary>
<br/>

The app must have the following functionalities

- Initially, the input value should be `0`
- Calories should be greater than `0` and less than `2000`
- Calories should be displayed in the **Browser title** as `Target: {calories}`
- When the calories are provided then the **Browser title** should be updated
- When invalid calories are provided and the **Submit** button is clicked, then the error message should be displayed
- When valid calories are provided and the **Submit** button is clicked, then the `exercises` view should be displayed
- When an exercise completed icon is clicked, then the target should be decremented by the number of calories contains in the exercise item
- When the target is completed, then the `congratulations` view should be displayed
- The App is provided with `initialExercisesList`. It consists of a list of exercise item objects with the following properties in each exercise item object

  |     Key     | Data Type |
  | :---------: | :-------: |
  |     id      |  String   |
  |    name     |  String   |
  |  imageUrl   |  String   |
  | isCompleted |  Boolean  |

</details>

<details>
<summary>Implementation Files</summary>
<br/>

The implementation is present in these files:

- `src/components/BurnItOff/index.jsx`
- `src/components/BurnItOff/index.css`
- `src/components/ExerciseItem/index.jsx`
- `src/components/ExerciseItem/index.css`

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- Images in the exercise items should have the alt as values of the key `name` from the `exercisesList` provided
- Each of the 8 exercise items should consist of an HTML button element with `data-testid` attribute value as **complete**.
- The HTML button elements should consist of the check icons with the `data-testid` attribute value as **check-icon**.`BsCheckCircleFill` icon from `react-icons` should be used for the check icons.

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

**Background Colors**:

<div style="background-color: #f5eee3; width: 150px; padding: 10px; color: black">Hex: #f5eee3</div>
<div style="background-color: #fecc7b; width: 150px; padding: 10px; color: black">Hex: #fecc7b</div>
<div style="background-color: #fe805d; width: 150px; padding: 10px; color: black">Hex: #fe805d</div>
<div style="background-color: #ffefd6; width: 150px; padding: 10px; color: black">Hex: #ffefd6</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<br/>

**Text Colors**:

<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #fe805d; width: 150px; padding: 10px; color: black">Hex: #fe805d</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: black">Hex: #64748b</div>
<br/>
</details>

<details>
<summary>Font-families</summary>

- playfair display sc
- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
# Burn_it_off
