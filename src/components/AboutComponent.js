import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardBody,
    CardHeader,
    Media,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { Fade, Stagger } from "react-animation-components";

function RenderLeader({ leader }) {
    return (
        <Media tag="li">
            <Media left middle className="about--image--container">
                <img
                    object
                    className="about--image"
                    src={`${baseUrl}images/${leader.image}`}
                    alt={leader.name}
                />
            </Media>
            <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
            </Media>
        </Media>
    );
}

function LeaderList(props) {
    const leaders = props.leaders.leaders.map((leader) => {
        return (
            <Fade in key={leader._id}>
                <div className="col-12 mt-2">
                    <RenderLeader leader={leader} />
                </div>
            </Fade>
        );
    });

    if (props.leaders.isLoading) {
        return <Loading />;
    } else if (props.leaders.errMess) {
        return (
            <div className="col-12">
                <h4>{props.leaders.errMess}</h4>
            </div>
        );
    } else {
        return (
            <Media list>
                <Stagger in>{leaders}</Stagger>
            </Media>
        );
    }
}

function About(props) {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>
                        Started in 2022, Pizza by Zane quickly
                        established itself as a three-star Michelin Restaurant. With its unique brand of pizza
                        that can't be found anywhere else, it enjoys patronage from
                        the A-list clientele in NYC. Featuring four of the
                        best three-star Michelin chefs in the world, you never
                        know what will arrive on your plate the next time you
                        visit us.
                    </p>
                    <p>
                        The restaurant traces its humble beginnings to{" "}
                        <em>The Pizza Pan</em>, a successful chain started by
                        our CEO, Mr. Peter Pan, that featured for the first time
                        the world's best pizza, but in a pan!
                    </p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="text-white about--table-head">
                            Facts At a Glance
                        </CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">April 1 2022</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">The Other Brothers</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">14</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">
                                    You better cut the pizza in four pieces
                                    because I'm not hungry enough to eat six.
                                </p>
                                <footer className="blockquote-footer">
                                    Yogi Berra,
                                    <cite title="Source Title">
                                        The Wit and Wisdom of Yogi Berra, P.
                                        Pepe, Diversion Books, 2014
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <LeaderList leaders={props.leaders} />
            </div>
        </div>
    );
}

export default About;
