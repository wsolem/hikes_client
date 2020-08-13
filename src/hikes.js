import React, {Component} from 'react';
import Hike from './hike';

//  todo: make a todo list of hikes
// so two lists - all hikes, and my hiking todo list
// so actually, could totally re-use this component
// also this should be sortable and filterable

class Hikes extends Component {
  constructor(props) {
    super(props);
    this.listType = this.listType.bind(this);
    // this.state = {
    //   hikes: []
    // }
  }

  listType(type) {
    if (type === "all") {
      return (<h2>All the Hikes</h2>)
    } else {
      return (<h2>{type} Hikes</h2>)
    }
  }

  render() {
    // add keys
    const { hikes, type } = this.props;
    const typeofList = this.listType(type);
    return (
      <div>
        {typeofList}
        <i>todo: make this filterable and sortable</i>
        <ul>
          {hikes.map(hike => {
            return (<Hike 
              key="" // figure out later
              name={hike.name}
              distance={hike.distance}
              park={hike.parks}
              region={hike.region}
              difficulty={hike.difficulty}
              completed={hike.hiked}
              date={hike.date}
            />)
          })}
        </ul>

      </div>
    )
  }
}

// const Hikes = ({ hikes }) => {

//   return (
//     <div>
//       <h1>Here's all the hikes</h1>
//       {hikes.forEach(hike => {
//         return (<Hike 
//           name={hike.name}
//         />)
//       })}
//     </div>
//   )
// };

export default Hikes

/*
  state = {
    hikes: []
  }
  render() {
    return (
      <div>
        <h1>Here's all the hikes</h1>
        {hikes.map((hike) => (
          <div>{hike}</div>
        ))}
      </div>
    )
  }
*/