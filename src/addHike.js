import React, {Component} from 'react';

class AddHike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hikeDifficulty: "1"
    }; // hike - I don't think this is getting used
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateDistance = this.validateDistance.bind(this);
    this.validateName = this.validateName.bind(this);
  }
  // need an overall validator for all strings
  validateName(name) {
    // check if the name contains invalid string, and has a length
    return (name && name.length > 0);
  }
  validateDistance(distance) {
    return (distance && distance.length > 0);
  }

  handleSubmit(event) {
    let errorMessages = [];
    let submitObject;
    event.preventDefault();
    // first validate
    // the required files are: hikeName, hikeDistance, hikeDifficulty
   
    const { hikeName, hikeDistance, hikeDifficulty, hikePark, hikeRegion, hikeCompleted, hikeDate } = this.state;
    if(!this.validateName(hikeName)) {
      errorMessages.push('Invalid Name');
      // we won't submit and we will collect the errors
    }
    if(!this.validateDistance(hikeDistance)) {
      errorMessages.push('Invalid Distance');
    }
    // no need since there is a default value now
    // if(!this.validateDifficulty(hikeDifficulty)) {
    //   errorMessages.push('Invalid Difficulty');
    // }
    if(errorMessages.length !== 0) {
      // submit form
      // we want to turn on a s
      console.log(errorMessages); 
    } else {
      submitObject = {
        name: hikeName,
        distance: hikeDistance,
        difficulty: hikeDifficulty,
        park: hikePark,
        region: hikeRegion,
        completed: hikeCompleted,
        date: hikeDate 
      }
      console.log(submitObject);


      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitObject)
    };

    fetch('http://localhost:8080/api/hikes', requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            this.setState({ postId: data.id })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });

      // show invalid form and highlight invalid fields
          /*
    fetch('http://localhost:8080/hike')
    .then(res => res.json())
    .then((data) => {
      this.setState({hikes: data})
      // map to get todo hikes
    })
    .catch(console.log);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitObject)
    };

    fetch('http://localhost:8080/hikes', requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            this.setState({ postId: data.id })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    */
    }
    // ok, we need to now submit this form but only after making sure that 
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
 }

  render() {
    // todo: add limits to all these fields
    // add function to save hike
    // set a default for difficulty
    return (
      <div>
        <h2>Add a Hike</h2>
        <form id="addHike" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="hikeName">Name of hike</label>
            <input id="hikeName" name="hikeName" className="required" type="text" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="hikeDistance">Distance (in miles - future have a kilometer toggle)</label>
            <input id="hikeDistance" name="hikeDistance" className="required" type="number" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="hikeDifficulty">Difficulty - this should be a dropdown</label>
            <select id="hikeDifficulty" name="hikeDifficulty" className="required" onChange={this.handleChange}>
              <option value={"1"}>Easy</option>
              <option value={"2"}>Medium-Easy</option>
              <option value={"3"}>Medium</option>
              <option value={"4"}>Medium-Difficult</option>
              <option value={"5"}>Difficult</option>
              <option value={"6"}>Butt-Buster</option>
            </select>
          </div>
          <div>
            <label htmlFor="hikePark">What park was this in?</label>
            <input id="hikePark" name="hikePark" type="text" onChange={this.handleChange} />  
          </div>
          <div>
            <label htmlFor="hikeRegion">If not in a park, where was it? - maybe add a conditional above </label>
            <input id="hikeRegion" name="hikeRegion" type="text" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="hikeCompleted">Have you already hiked it?</label>
            <input id="hikeCompleted" name="hikeCompleted" type="checkbox" value="Completed" onChange={this.handleChange} /> 
          </div>
          <div>
            <label htmlFor="hikeDate">when? (conditional based on above)</label>
            <input id="hikeDate" name="hikeDate" type="date" onChange={this.handleChange} />            
          </div>

          <input id="hikeSave" type="submit" value="Save" />
        </form>
      </div>
    )
  }

}

export default AddHike;