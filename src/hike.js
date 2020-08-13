import React from 'react';

const difficultyWord = {
  '1': 'easy',
  '2': 'medium-easy',
  '3': 'medium',
  '4': 'medium-difficult',
  '5': 'difficult',
  '6': 'butt buster',
}
const completedSection = (completed, date) => {
  if (!!completed) {
    // I really should make a simple checkbox
    return(<div>
      You completed this hike on {date};
    </div>)
  } else {
    return (<div>
      Add to upcoming list?
    </div>)
  }
  // also what if I do it a bunch of times?
  // hike should be editable
  // and deletable

}
const Hike = ({ name, distance, park, region, difficulty, completed, date }) => {
  const hikeDone = completedSection(completed, date);
  const difficultyRating = difficultyWord[String(difficulty)]; // defintiely not the best way of doing this
  return (
    <li>
      <div className="hikeWrapper">
        <i>todo: hike should be editable and deletable</i>
        <div className="editHike button">Edit</div>
        <div className="deleteHike button">Delete</div>
        <div>{name}</div>
        <div>distance: {distance} miles</div>
        <div>park: {park}</div>
        <div>difficulty: {difficultyRating}</div>
        {hikeDone}
      </div>
    </li>
  )
}
export default Hike


