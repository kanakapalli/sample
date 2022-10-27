import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {

        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }

    changeStatus = () => {

        this.setState({ isLoggedIn: !this.state.isLoggedIn })
    }
    render() {

        let context = null;
        let buttonLabel = 'Login';

        if (this.state.isLoggedIn) {

            context = <h4> Hello User</h4>;

            buttonLabel = "Logout";
        }

        else {
            context = <h4> Hello Guest</h4>;

            buttonLabel = "Login";
        }



        return (
            <div style={{ float: "right", display: "inline-block", color: ' white', marginTop: "-10px" }}>
                {context}
                <button style={{ position: 'absolute', top: "45px", fontsize: "80" }} onclick={this.changeStatus}>{buttonLabel}</button>
            </div>
        );
    }
}
export default Profile;