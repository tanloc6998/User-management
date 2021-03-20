import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: data,
    };
  }
  _findIndex = (id) => {
    return this.state.listUser.findIndex((item) => {
      return item.id === id;
    });
  };
  handleDeleteUser = (user) => {
    let viTri = this._findIndex(user.id);
    let listUser = [...this.state.listUser];
    if (viTri !== -1) {
      listUser.splice(viTri, 1);
    }
    this.setState({ listUser: listUser });
  };

  render() {
    return (
      <div className="container d-block">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users
          listUser={this.state.listUser}
          deleteUser={this.handleDeleteUser}
        />
        <Modal />
      </div>
    );
  }
}

export default Home;
