import React, { Component } from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarToggler,
    Collapse,
    NavItem,
    Jumbotron,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Input,
    Label,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }


    handleLogin(event) {
        this.toggleModal();
        this.props.loginUser({
            username: this.username.value,
            password: this.password.value,
        });
        event.preventDefault();
    }

    handleLogout() {
        this.props.logoutUser();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img
                                className="header--image"
                                src="/assets/images/logo.png"
                                alt="Ristorante Con Fusion"
                            />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span>{" "}
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span>{" "}
                                        About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span>{" "}
                                        Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to="/favorites"
                                    >
                                        <span className="fa fa-heart fa-lg"></span>{" "}
                                        My Favorites
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to="/contactus"
                                    >
                                        <span className="fa fa-address-card fa-lg"></span>{" "}
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    {!this.props.auth.isAuthenticated ? (
                                        <Button
                                            outline
                                            onClick={this.toggleModal}
                                        >
                                            <span className="fa fa-sign-in fa-lg"></span>{" "}
                                            Login
                                            {this.props.auth.isFetching ? (
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                            ) : null}
                                        </Button>
                                    ) : (
                                        <div>
                                            <div className="navbar-text mr-3">
                                                {this.props.auth.user.username}
                                            </div>
                                            <Button
                                                outline
                                                onClick={this.handleLogout}
                                            >
                                                <span className="fa fa-sign-out fa-lg"></span>{" "}
                                                Logout
                                                {this.props.auth.isFetching ? (
                                                    <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                ) : null}
                                            </Button>
                                        </div>
                                    )}
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12">
                                <h1>
                                    Pizza <small>by</small> Zane
                                </h1>
                                <p>
                                    We take inspiration from the World's best
                                    pizza, and create a unique pizza eating
                                    experience. Our lipsmacking creations will
                                    tickle your culinary senses!
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}
                >
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    type="text"
                                    id="username"
                                    name="username"
                                    innerRef={(input) =>
                                        (this.username = input)
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    innerRef={(input) =>
                                        (this.password = input)
                                    }
                                />
                            </FormGroup>
                            <FormGroup check className="header--remember">
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        name="remember"
                                        innerRef={(input) =>
                                            (this.remember = input)
                                        }
                                    />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <br />
                            <span>
                                <Button
                                    type="submit"
                                    value="submit"
                                    className="header--login-button"
                                >
                                    Login
                                </Button>{" "}
                                Don't have an account?{" "}
                                <Link
                                    to="/users/signup"
                                    onClick={this.toggleModal}
                                >
                                    Signup
                                </Link>
                            </span>
                        </form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;
