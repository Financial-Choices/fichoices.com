import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
    return (
        <>
            <div id="page-container">
                <div id="content-wrap">
                    <section id="home">
                        <div className="main-content">
                            <h1>Welcome to Financial Choices</h1>
                            <p>Since 2009, we've been helping homeowners find the best loans for them. Click below to get in contact:</p>
                            <Link to={`contact`}>
                                <button>Contact Us</button>
                            </Link>
                            <div className="buttons-container">
                                {/* <button onClick="showSection('get_started')">Get Started</button> */}
                            </div>
                        </div>
                    </section>
                    <section id="info">
                        <div className="body-container">
                            <div className="info-column">
                                <div className="image">
                                    <img src="photo1.jpg" alt="Image 1" />
                                </div>
                                <div className="text">
                                    <h1>Perfect loan program for you</h1>
                                    <br />
                                    <p>Whether its a VA loan, FHA, Fixed or ARM, we are here to give you the best options for your choice of repayment.</p>
                                    <div className="buttons-container">
                                        <Link to={`contact`}>
                                            <button>Contact Us</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="info-column reverse">
                                <div className="image">
                                    <img src="photo9.jpg" alt="Image 2" />
                                </div>
                                <div className="text">
                                    <h1>Competive Rates</h1>
                                    <br />
                                    <p>We offer the some of the most competive rates in Georgia. See what you qualify for below.</p>
                                    <div className="buttons-container">
                                        <Link to={`contact`}>
                                            <button>Contact Us</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="info-column">
                                <div className="image">
                                    <img src="photo3.jpg" alt="Image 3" />
                                </div>
                                <div className="text">
                                    <h1>We're just a phone call away</h1>
                                    <br />
                                    <p>If you have any questions, please give us a call or shoot us an email.</p>
                                    <div className="buttons-container">
                                        <a href="Contact Page.html">
                                            <Link to={`contact`}>
                                                <button>Contact Us</button>
                                            </Link>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}