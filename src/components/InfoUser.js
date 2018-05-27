import React, { Component } from 'react';
import './InfoUser.css';
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
            <div className="App" id="back-ground">
                <form id="main-form">
                    <div id="label-header">
                        <h3>Thông tin người dùng</h3>
                    </div>
                    <div id="div-table">
                        <table class="table table-user-information">
                            <tbody>
                                <tr>
                                    <td>Tên:</td>
                                    <td>{this.state.user.name}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{this.state.user.email}</td>
                                </tr>
                                <tr>
                                    <td>Số điện thoại:</td>
                                    <td>{this.state.user.phoneNumber}</td>
                                </tr>
                                <tr>
                                    <td>Biển số xe:</td>
                                    <td>{this.state.user.licensePlates}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <ReactList
                        itemRenderer={: :this.renderItem}
                     length={this.state.accounts.length}
                    type='uniform'
                  /> */}
                </form>
            </div>
        );
    }
}

export default InfoUser;
