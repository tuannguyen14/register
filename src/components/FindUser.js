import React, { Component } from 'react';
import './FindUser.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';

import axios from 'axios';


class FindUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            statusSearch: false
        }
    }

    search() {
        var data = {
            phoneNumber: this.state.phoneNumber
        }

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: JSON.stringify(data),
            url: 'http://localhost:8000/user-info'
        }
        axios(options).then((response) => {
            global.searchUser = response.data;
            this.setState({ statusSearch: true });
        }).catch((error) => {
            alert("Người dùng không tồn tại!");
        });;
    }

    onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            this.search();
        }
    }


    render() {
        if (this.state.statusSearch) {
            return <Redirect push to="/InfoUser" />;
        }
        return (
            <div className="App" id="back-ground">
                <form id="main">
                    <div class="row">
                        <div class="col-md-6">
                            <div id="label-header">
                                <h1>Tìm kiếm thông tin user</h1>
                            </div>
                            <div id="custom-search-input">
                                <div class="input-group col-md-12">
                                    <input type="text" class="form-control input-lg" placeholder="Nhập số điện thoại" onKeyDown={this.onEnterPress}
                                        value={this.state.phoneNumber}
                                        onChange={e => this.setState({ phoneNumber: e.target.value })} />
                                    <span class="input-group-btn">
                                        <button class="btn btn-info btn-lg" type="button" onClick={() => this.search()}>
                                            <i class="glyphicon glyphicon-search" />
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="register">
                        Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default FindUser;
