import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

class ModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register: false
        }
    }
    render() {
        const { register } = this.state;
        const { proceedFurther } = this.props;
        return (
            <div className="my-md-3 mt-lg-0 mr-3 px-3">
                <div className="row alert alert-warning" role="alert">
                    <div className="col-md-11 col-10">
                        To add an item to cart or to buy an item, kindly let us know who you are.<br />
                        Don't worry, if you want to proceed without sharing your details, you can do so
                        by buying a single item at a time
                    </div>
                    <div className="col-md-1 col-2">
                        <button type="button" className="close" onClick={() => proceedFurther()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                <div className="px-md-5">
                    {
                        !register ? (
                            <>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label><br/>
                                    <Input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label><br/>
                                    <Input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="py-2">Not a member yet? 
                                    <div className="btn" onClick={() => this.setState({ register: true })}>
                                        <strong style={{textDecoration: 'underline'}}>Please Register</strong>
                                    </div>
                                </div>
                                <div className="row mt-3 mb-5">
                                    <button type="button" class="col-md-2 btn btn-primary mr-md-3 mb-md-0 mb-2">Sign in</button>
                                    <button type="button" class="col-md-3 btn btn-secondary" onClick={() => proceedFurther()}>May be later</button>
                                </div>
                            </>
                        ) : (
                                <>
                                    <div class="form-group">
                                        <label for="exampleInputName1">Name</label><br />
                                        <Input type="email" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputMobile1">Mobile</label>< br/>
                                        <Input type="tel" class="form-control" id="exampleInputMobile1" aria-describedby="emailHelp" placeholder="Enter mobile" />
                                        <small id="emailHelp" class="form-text text-muted">We won't bother you unless absolute necessary.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label><br />
                                        <Input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label><br />
                                        <Input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="py-2">Already registered? 
                                        <div className="btn" onClick={() => this.setState({ register: false })}>
                                            <strong style={{textDecoration: 'underline'}}>Please sign in</strong>
                                        </div>
                                    </div>
                                    <div className="row mt-3 mb-5">
                                        <button type="button" class="col-md-2 btn btn-primary mr-md-3 mb-md-0 mb-2">Register</button>
                                        <button type="button" class="col-md-3 btn btn-secondary" onClick={() => proceedFurther()}>May be later</button>
                                    </div>
                                </>
                            )
                    }
                </div>
            </div>
        )
    }
}

ModalForm.defaultProps = {
    proceedFurther: () => {}
}

ModalForm.propTypes = {
    proceedFurther: PropTypes.func
}

export default ModalForm;
