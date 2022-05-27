import { useState, useEffect } from 'react';

import ProgramList from '../components/programs/ProgramList';

function AllProgramsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPrograms, setLoadedPrograms] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://lift-vault-react-default-rtdb.firebaseio.com/programs.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const programs = [];

        for (const key in data) {
          const program = {
            id: key,
            ...data[key]
          };

          programs.push(program);
        }

        setIsLoading(false);
        setLoadedPrograms(programs);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Workout Programs</h1>
      <ProgramList programs={loadedPrograms} />
    </section>
  );
}

export default AllProgramsPage;
