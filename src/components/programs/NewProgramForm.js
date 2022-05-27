import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewProgramForm.module.css';

function NewProgramForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const daysInputRef = useRef();
  const descriptionInputRef = useRef();
  const spreadsheetInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDays = daysInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredSpreadsheet = spreadsheetInputRef.current.value;

    const programData = {
      title: enteredTitle,
      image: enteredImage,
      days: enteredDays,
      description: enteredDescription,
      spreadsheet: enteredSpreadsheet,
    };

    props.onAddProgram(programData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Program Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='days'>Number of Days per Week</label>
          <input type='text' required id='days' ref={daysInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='spreadsheet'>Program Spreadsheet Link</label>
          <input type='text' required id='spreadsheet' ref={spreadsheetInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Program</button>
        </div>
      </form>
    </Card>
  );
}

export default NewProgramForm;
