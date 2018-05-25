import React, { Component } from 'react';
import './InfoUser.css';
import { FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

class InfoUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: global.searchUser
        }
    }

    render() {
        return (
            <div className="App">
                <form class="modal-content" >
                    <div>
                        <h1>{this.state.user.name}</h1>
                    </div>
                    <div>
                        <h1>{this.state.user.email}</h1>
                    </div>
                    <div>
                        <h1>{this.state.user.phoneNumber}</h1>
                    </div>
                    <div>
                        <h1>{this.state.user.licensePlates}</h1>
                    </div>
                </form>
            </div>
        );
    }
}

export default InfoUser;
