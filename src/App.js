import React, { Component } from 'react';
import './App.css';
import { FormControl } from 'react-bootstrap';

const $ = require('jquery');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phoneNumber: '',
      name: '',
      licensePlates: ''
    }
  }

  signup() {
    var data = {
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      name: this.state.name,
      licensePlates: this.state.licensePlates
    }
  //   axios.post('http://localhost:8000/registry', JSON.stringify(data), {
  //     // headers: {
  //     //   'Content-Type': 'application/json;charset=UTF-8',
  //     // }
  // });
  $.ajax({
    type: "POST",
    data: JSON.stringify(data),
    url: 'http://localhost:8000/registry',
    contentType: "application/json"
  })
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8000/registry',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   data: JSON.stringify(data)
    // });

  }

  render() {
    return (
      <div className="App">
        <form class="modal-content" >
          <div class="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>

            <label for="email"><b>Email</b></label>
            <div>
              <FormControl type="text" placeholder="Nhập Email" name="email" required
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })} />
            </div>

            <label for="phoneNumber"><b>Số điện thoại</b></label>
            <div>
              <FormControl type="text" placeholder="Nhập số điện thoại" name="phoneNumber" required
               value={this.state.phoneNumber}
               onChange={e => this.setState({ phoneNumber: e.target.value })} />
            </div>

            <label for="name"><b>Tên</b></label>
            <div>
              <FormControl type="text" placeholder="Nhập tên" name="name" required
               value={this.state.name}
               onChange={e => this.setState({ name: e.target.value })} />
            </div>

            <label for="licensePlates"><b>Biển số xe</b></label>
            <div>
              <FormControl type="text" placeholder="Nhập biển số xe" name="licensePlates" required
               value={this.state.licensePlates}
               onChange={e => this.setState({ licensePlates: e.target.value })} />
            </div>

            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

            <div class="clearfix">
              <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
              <button type="submit" class="signupbtn" onClick={() => this.signup()}>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
