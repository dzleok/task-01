import { ResultsProps, StarWarsRequest } from '../types/types';

export default function Results({
  data,
  selectedType,
}: ResultsProps): JSX.Element {
  console.log(data);

  const { count }: StarWarsRequest = data;

  return (
    <ul>
      <h1>
        {count} {selectedType}
      </h1>

      {selectedType === 'people' &&
        data.results?.map((el, i) => (
          <li key={i}>
            {el.name} has height {el.height}cm, mass {el.mass} kg and{' '}
            {el.hair_color} hair
          </li>
        ))}
    </ul>
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
