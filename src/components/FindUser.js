import React, { Component } from 'react';
import './FindUser.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Popup from "reactjs-popup";

class FindUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            statusSearch: false,
            open: false,
            userNotFound: false,
            codeVerify: '',
            cssError: 'input-verify'
        }
    }

    search() {
        const data = {
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
            if (error.response.data.error === "Phone number not registered") {
                this.setState({ userNotFound: true });
            } else {
                const options = {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    data: JSON.stringify(data),
                    url: 'http://localhost:8000/req-verify-phone'
                }
                axios(options).then((response) => {
                }).catch((error) => {
                });;
            }
            this.openModal();
        });;
    }

    submit() {
        const data = {
            code: this.state.codeVerify,
            phoneNumber: this.state.phoneNumber
        }
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: JSON.stringify(data),
            url: 'http://localhost:8000/verify-code'
        }
        axios(options).then((response) => {
            global.searchUser = response.data;
            this.setState({ statusSearch: true });
        }).catch((error) => {
            this.setState({
                cssError: "input-verify error"
            })
        });;
    }

    onEnterPressSearch = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            this.search();
        }
    }

    onEnterPressVerify = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            this.submit();
        }
    }

    openModal = () => {
        this.setState({ open: true });
    };

    closeModal = () => {
        this.setState({ open: false });
    };

    render() {
        if (this.state.statusSearch) {
            return <Redirect push to="/InfoUser" />;
        }
        return (
            <div className="App" id="back-ground">
                <form id="main">
                    <div class="row">
                        <div>
                            <div id="label-header">
                                <h1>Tìm kiếm thông tin user</h1>
                            </div>
                            <div id="custom-search-input">
                                <div class="input-group col-md-12">
                                    <input type="text" class="form-control input-lg" placeholder="Nhập số điện thoại" onKeyDown={this.onEnterPressSearch} required
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
                    <Popup
                        open={this.state.open}
                        closeOnDocumentClick
                        onClose={this.closeModal}
                    >
                        {this.state.userNotFound === true ?
                            <div>Người dùng không tồn tại</div> :
                            <div>
                                <input id={`${this.state.cssError}`} type="text" 
                                    placeholder="Nhập mã xác nhận"
                                    onKeyDown={this.onEnterPressVerify}
                                    value={this.state.codeVerify}
                                    onChange={e => this.setState({ codeVerify: e.target.value })} />
                                <Button id="submit-verify" onClick={() => this.submit()}>Xác nhận</Button>
                            </div>
                        }

                    </Popup>
                </form>
            </div>
        );
    }
}

export default FindUser;
