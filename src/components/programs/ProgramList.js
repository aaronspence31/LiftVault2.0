import ProgramItem from './ProgramItem';
import classes from './ProgramList.module.css';

function ProgramList(props) {
  return (
    <ul className={classes.list}>
      {props.programs.map((program) => (
        <ProgramItem
          key={program.id}
          id={program.id}
          image={program.image}
          title={program.title}
          days={program.days}
          spreadsheet={program.spreadsheet}
          description={program.description}
        />
      ))}
    </ul>
  );
}

export default ProgramList;
