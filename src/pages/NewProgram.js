import { useHistory } from 'react-router-dom';

import NewProgramForm from '../components/programs/NewProgramForm';

function NewProgramPage() {
  const history = useHistory();

  function addProgramHandler(programData) {
    fetch(
      'https://lift-vault-react-default-rtdb.firebaseio.com/programs.json',
      {
        method: 'POST',
        body: JSON.stringify(programData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Workout Program</h1>
      <NewProgramForm onAddProgram={addProgramHandler} />
    </section>
  );
}

export default NewProgramPage;
