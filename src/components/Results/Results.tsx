import {
  ResultsProps,
  StarWarsRequest,
  StarWarsCharacter,
} from '../../types/types';
import './Results.css';
export default function Results({
  data,
  selectedType,
}: ResultsProps): JSX.Element {
  const { count, next, previous }: StarWarsRequest = data;

  return (
    <>
      <h1>
        {count} {selectedType}
      </h1>

      {previous && <button> Previous </button>}
      {data.results?.map((el, i) => (
        <ResultsItem
          key={i}
          name={el.name}
          height={el.height}
          mass={''}
          hair_color={''}
          skin_color={''}
          eye_color={''}
          birth_year={''}
          gender={''}
          homeworld={''}
          films={[]}
          species={[]}
          vehicles={[]}
          starships={[]}
          created={''}
          edited={''}
          url={''}
          climate={''}
          diameter={''}
          gravity={''}
          orbital_period={''}
          population={''}
          residents={[]}
          rotation_period={''}
          surface_water={''}
          terrain={''}
          characters={[]}
          director={''}
          episode_id={0}
          opening_crawl={''}
          planets={[]}
          producer={''}
          release_date={''}
          title={''}
          average_height={''}
          average_lifespan={''}
          classification={''}
          designation={''}
          eye_colors={''}
          hair_colors={''}
          language={''}
          people={[]}
          skin_colors={''}
          cargo_capacity={''}
          consumables={''}
          cost_in_credits={''}
          crew={''}
          length={''}
          manufacturer={''}
          max_atmosphering_speed={''}
          model={''}
          passengers={''}
          pilots={[]}
          vehicle_class={''}
          MGLT={''}
          hyperdrive_rating={''}
          starship_class={''}
        />
      ))}
      {next && <button> Next </button>}
    </>
  );
}

function ResultsItem({ name }: StarWarsCharacter): JSX.Element {
  console.log(name);
  return (
    <div className="results">
      <h4>{name}</h4>
    </div>
  );
}

//   {data.selectedType === 'people' &&
//     data.results?.map((el, i) => (
//       <li key={i}>
//         {el.name} has height {el.height}cm, mass {el.mass} kg and{' '}
//         {el.hair_color} hair
//       </li>
//     ))}

//   {data.selectedType === 'planets' &&
//     data.results?.map((el, i) => (
//       <li key={i}>
//         {el.name} has diameter {el.diameter}km, population {el.population}{' '}
//         people and {el.terrain}
//       </li>
//     ))}
//   {data.selectedType === 'films' &&
//     data.results?.map((el, i) => (
//       <li key={i}>
//         {el.title} was produced by {el.producer}, director {el.director} and
//         released {el.release_date}
//       </li>
//     ))}
//   {data.selectedType === 'species' &&
//     data.results?.map((el, i) => (
//       <li key={i}>
//         {el.name} is {el.designation}, average height {el.average_height}cm
//         and language {el.language}
//       </li>
//     ))}
//   {data.selectedType === 'vehicles' &&
//     data.results?.map((el, i) => (
//       <li key={i}>
//         {el.name} is {el.length}m, has crew {el.crew} person and cost{' '}
//         {el.cost_in_credits} credits
//       </li>
//     ))}
//   {data.selectedType === 'starships' &&
//     data.results?.map((el, i) => (
//       <li key={i}>
//         {el.name} is {el.length}m, has crew {el.crew} person and cost{' '}
//         {el.cost_in_credits} credits
//       </li>
// ))}
