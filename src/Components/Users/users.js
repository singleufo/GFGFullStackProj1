import React from "react";
import User from "../User/user";
import "./users.css";
import Spinner from "react-bootstrap/Spinner";

// const persons = [
//   {
//     id: "60d0fe4f5311236168a109ca",
//     title: "ms",
//     firstName: "Sara",
//     lastName: "Andersen",
//     picture: "https://randomuser.me/api/portraits/women/58.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109cb",
//     title: "miss",
//     firstName: "Edita",
//     lastName: "Vestering",
//     picture: "https://randomuser.me/api/portraits/med/women/89.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109cc",
//     title: "ms",
//     firstName: "Adina",
//     lastName: "Barbosa",
//     picture: "https://randomuser.me/api/portraits/med/women/28.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109cd",
//     title: "mr",
//     firstName: "Roberto",
//     lastName: "Vega",
//     picture: "https://randomuser.me/api/portraits/med/men/25.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109ce",
//     title: "mr",
//     firstName: "Rudi",
//     lastName: "Droste",
//     picture: "https://randomuser.me/api/portraits/med/men/83.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109cf",
//     title: "mrs",
//     firstName: "Carolina",
//     lastName: "Lima",
//     picture: "https://randomuser.me/api/portraits/med/women/5.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109d0",
//     title: "mr",
//     firstName: "Emre",
//     lastName: "Asikoglu",
//     picture: "https://randomuser.me/api/portraits/med/men/23.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109d1",
//     title: "mr",
//     firstName: "Kent",
//     lastName: "Brewer",
//     picture: "https://randomuser.me/api/portraits/med/men/52.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109d2",
//     title: "mr",
//     firstName: "Evan",
//     lastName: "Carlson",
//     picture: "https://randomuser.me/api/portraits/med/men/80.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109d3",
//     title: "mr",
//     firstName: "Friedrich-Karl",
//     lastName: "Brand",
//     picture: "https://randomuser.me/api/portraits/med/men/7.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109d4",
//     title: "mr",
//     firstName: "Valentin",
//     lastName: "Ortega",
//     picture: "https://randomuser.me/api/portraits/med/men/3.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109d5",
//     title: "mrs",
//     firstName: "Sibylle",
//     lastName: "Leibold",
//     picture: "https://randomuser.me/api/portraits/med/women/89.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109d6",
//     title: "mrs",
//     firstName: "Elisa",
//     lastName: "Lorenzo",
//     picture: "https://randomuser.me/api/portraits/med/women/89.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109d7",
//     title: "mr",
//     firstName: "Leevi",
//     lastName: "Savela",
//     picture: "https://randomuser.me/api/portraits/med/men/67.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109d8",
//     title: "mrs",
//     firstName: "Karoline",
//     lastName: "Sviggum",
//     picture: "https://randomuser.me/api/portraits/med/women/61.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109d9",
//     title: "ms",
//     firstName: "Nuria",
//     lastName: "Leon",
//     picture: "https://randomuser.me/api/portraits/med/women/93.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109da",
//     title: "mr",
//     firstName: "Lance",
//     lastName: "Foster",
//     picture: "https://randomuser.me/api/portraits/med/men/13.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109db",
//     title: "miss",
//     firstName: "Naomi",
//     lastName: "Rodrigues",
//     picture: "https://randomuser.me/api/portraits/med/women/39.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109dc",
//     title: "mr",
//     firstName: "Evan",
//     lastName: "Roux",
//     picture: "https://randomuser.me/api/portraits/med/men/59.jpg",
//   },
//   {
//     id: "60d0fe4f5311236168a109dd",
//     title: "mr",
//     firstName: "Miguel",
//     lastName: "Lima",
//     picture: "https://randomuser.me/api/portraits/med/men/31.jpg",
//   },
// ];

class Users extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: true, usersData: [] };
  }

  componentDidMount() {
    fetch("https://dummyapi.io/data/v1/user", {
      headers: {
        "app-id": "62f7889bc62f3151ed9c2de6",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        this.setState({ isLoading: false, usersData: data.data });
      });
  }

  showSpinner() {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  showUser() {
    return (
      <div className="usersDiv">
        {this.state.usersData.map((person) => {
          return <User data={person} />;
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Employee List</h1>
        {this.state.isLoading ? this.showSpinner() : this.showUser()}
      </div>
    );
  }
}

export default Users;