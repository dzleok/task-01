import { useState } from 'react';
import {
  ResultsProps,
  StarWarsCharacter,
  StarWarsRequest,
  // StarWarsCharacter,
} from '../../types/types';
import './CardList.css';

export default function CardList({
  data,
  // selectedType,
}: ResultsProps): JSX.Element {
  const { next, previous }: StarWarsRequest = data;
  // const { results }: StarWarsRequest = data;

  const [isShowCardDetails, setIsShowCardDetails] = useState<boolean>(true);
  function showCardDetails() {
    setIsShowCardDetails(!isShowCardDetails);
  }

  console.log(data);
  return (
    <div className="card-list">
      <div>
        {previous && <button> Previous </button>}
        {next && <button> Next </button>}
        {data.results?.map((el, i) => <Card key={i} character={el} />)}
      </div>
      {isShowCardDetails && <CardDetails />}
    </div>
  );

  function Card({ character }: { character: StarWarsCharacter }): JSX.Element {
    return (
      <div className="card" onClick={showCardDetails}>
        {character.name}
      </div>
    );
  }

  function CardDetails() {
    return (
      <div className="card-details">
        <button className="btn-close" onClick={showCardDetails}>
          X
        </button>
        <h2>Name</h2>
        <span>height: 172cm</span>
        <span>&nbsp;</span>
        <span>mass: 152 kg</span>
        <p>hair color: blonde, brown, black, red</p>
        <p>skin color: blonde, brown, black, red</p>
        <p>eye color: brown, blue, green, hazel, grey, amber</p>
        <p>birth year: 152 kg</p>
        <p>gender: male</p>
        <p>homeworld: Earth</p>
      </div>
    );
  }
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
