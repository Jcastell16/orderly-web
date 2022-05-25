import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Contact = () => (
    <>
        <section className="page-section bg-dark" id="contact">
            <div className="container col-12  mx-auto h-300">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 col-lg-offset-2">
                    <h2 className="mt-0 text-white font-weight-bold mb-3">Contact Us</h2>
                    <hr className="divider text-white"/>
                        <form id="contact-form" method="post" action="" role="form">
                            <div className="messages"></div>
                            <div className="controls">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group text-white font-weight-bold">
                                            <h5 for="form_name">Firstname</h5>
                                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group text-white font-weight-bold">
                                            <h5 for="form_lastname">Lastname</h5>
                                            <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mt-3">
                                        <div className="form-group text-white font-weight-bold">
                                            <h5 htmlFor="form_email">Email</h5>
                                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <div className="form-group text-white font-weight-bold">
                                            <h5 htmlFor="form_phone">Phone</h5>
                                            <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mt-3">
                                        <div className="form-group text-white font-weight-bold">
                                            <h5 htmlFor="form_message">Message</h5>
                                            <textarea id="form_message" name="message" className="form-control" placeholder="Message for me *" rows="4" required data-error="Please,leave us a message."></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <input type="submit" className="btn btn-light btn-xl mt-3" value="Send message" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
);