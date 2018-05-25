import React, { Component } from 'react';
import './Register.css';
import { FormControl } from 'react-bootstrap';
import { Redirect } from 'react-router';

const $ = require('jquery');

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phoneNumber: '',
      name: '',
      licensePlates: '',
      statusCancel: false
    }
  }

  signup() {
    var data = {
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      name: this.state.name,
      licensePlates: this.state.licensePlates
    }
    $.ajax({
      type: "POST",
      data: JSON.stringify(data),
      url: 'http://localhost:8000/registry',
      contentType: "application/json"
    })
  }

  cancel() {
    this.setState({ statusCancel: true });
  }

  render() {
    if (this.state.statusCancel) {
      return <Redirect push to="/" />;
    }
    return (
      <div className="App" id="back-ground">
        <form id="form-main" >
          <div class="container">
            <h1>Đăng ký</h1>

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
              <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn" onClick={() => this.cancel()}>Cancel</button>
              <button type="submit" class="signupbtn" onClick={() => this.signup()}>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
