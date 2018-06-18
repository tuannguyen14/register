import React, { Component } from 'react';
import './InfoUser.css';
import axios from 'axios';

class InfoUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: global.searchUser,
            atEnd: false,
        }
    }


    formatMillisecondsToDate(time) {
        const date = new Date(parseInt(time));
        return this.formatDate(date);
    }

    formatDate(date) {
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const second = date.getSeconds();

        return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ':' + minutes + ':' + second;
    }


    render() {
        return (
            <div className="App" id="back-ground">
                <form id="main-form">
                    <div id="label-header">
                        <h1>Thông tin người dùng</h1>
                    </div>
                    <div id="div-table">
                        <table class="table table-user-information">
                            <tbody>
                                <tr>
                                    <td id="td-header">Tên:</td>
                                    <td id="td-body">{this.state.user.name}</td>
                                </tr>
                                <tr>
                                    <td id="td-header">Email:</td>
                                    <td id="td-body">{this.state.user.email}</td>
                                </tr>
                                <tr>
                                    <td id="td-header">Số điện thoại:</td>
                                    <td id="td-body">{this.state.user.phoneNumber}</td>
                                </tr>
                                <tr>
                                    <td id="td-header">Biển số xe:</td>
                                    <td id="td-body">{this.state.user.licensePlates}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <div id="list-header">
                                <h3>Danh sách vi phạm</h3>
                            </div>

                            <div id="th-contener">
                                <div id="th1">
                                    <h3>Ngày vi phạm</h3>
                                </div>
                                <div id="th2">
                                    <h3>Lý do vi phạm</h3>
                                </div>
                                <div id="th2">
                                    <h3>Tiền phạt</h3>
                                </div>
                                <div id="th2">
                                    <h3>Địa điểm</h3>
                                </div>
                            </div>
                            <scroll-container>
                                {this.state.user.violations.map(item => {
                                    return (
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <div id="item1">
                                                        <scroll-page>{this.formatMillisecondsToDate(item.date)}</scroll-page>
                                                    </div>
                                                    <div id="item2">
                                                        <scroll-page>{item.reason}</scroll-page>
                                                    </div>
                                                    <div id="item3">
                                                        <scroll-page>{item.money}</scroll-page>
                                                    </div>
                                                    <div id="item4">
                                                        <scroll-page>{item.address}</scroll-page>
                                                    </div>
                                                </tr>
                                            </tbody>
                                        </table>
                                    )
                                }
                                )}
                            </scroll-container>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default InfoUser;
