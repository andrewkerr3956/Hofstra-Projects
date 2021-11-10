import './App.css';
import React from 'react';

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th> Remove </th>
          <th> First Name </th>
          <th> Last Name </th>
          <th> Activity </th>
          <th> Restrictions </th>
        </tr>
      </thead>
    </table>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "" ,  lastName: "" ,  activity: "" , restrictions: [[false, "a"], [false, "b"], [false, "c"]]}
    this.handleChange = this.handleChange.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState(...this.state, { firstName: this.state.firstName, lastName: this.state.lastName, activity: this.state.activity });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChecked(event) {
    // This method is not working correctly
    this.setState({checked: event.target.checked})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="firstName">First Name</label><br />
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} /><br />
          <label for="lastName">Last Name</label><br />
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} /><br />
          <label for="activity">Select Activity</label><br />
          <select name="activity" value={this.state.activity} onChange={this.handleChange}>
            <option value="Science Lab">Science Lab</option>
            <option value="Swimming">Swimming</option>
            <option value="Cooking">Cooking</option>
            <option value="Painting">Painting</option>
          </select><br />
          <label for="restrictions">Check all that apply:</label><br />
          {/* Checkboxes below not working correct */}
          <input type="checkbox" name="dietaryRestrictions" checked={this.state.restrictions[0][0]} onChecked={this.handleChecked} />
          <label for="dietaryRestrictions">a) Dietary Restrictions</label><br />
          <input type="checkbox" name="physicalDisabilities" checked={this.state.restrictions[1][0]} onChecked={this.handleChecked} />
          <label for="physicalDisabilities">b) Physical Disabilities</label><br />
          <input type="checkbox" name="medicalNeeds" checked={this.state.restrictions[2][0]} onChecked={this.handleChecked} />
          <label for="medicalNeeds">c) Medical Needs</label><br />
          <button style={{ marginTop: "20px", width: "200px" }}>Submit</button>
          <Table />
          {/* Below is not working correctly */}
          {this.state && this.state.length > 0 && this.state.map((item, idx) => {
            return <div key={idx}>
              <span>{item.firstName}</span>
              <span>{item.lastName}</span>
              <span>{item.activity}</span>
              <span>{item.restrictions}</span>
            </div>
          })}
        </form>
      </div>
    )
  }
}

export default App;
