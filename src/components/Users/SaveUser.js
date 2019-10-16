import React, {Component} from 'react';

class SaveUser extends Component {
    state = {
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null,
        location: null,
        aboutUser: null
    };

    inputChangeHandler = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    submitUserFormHandler = e => {
        e.preventDefault();
        console.log(this.state)

    };

    render() {
        return (
            <div className="col-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Create User</h4>
                        <form className="forms-sample" onSubmit={this.submitUserFormHandler}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="First Name"
                                       onChange={this.inputChangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Last Name"
                                       onChange={this.inputChangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email"
                                       placeholder="Email" onChange={this.inputChangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <select className="form-control" id="gender" onChange={this.inputChangeHandler}>
                                    <option value="">Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>File upload</label>
                                <input type="file" name="img[]" className="file-upload-default"/>
                                <div className="input-group col-xs-12">
                                    <input type="text" className="form-control file-upload-info" disabled
                                           placeholder="Upload Image"/>
                                    <span className="input-group-append">
                                            <button className="file-upload-browse btn btn-gradient-primary"
                                                    type="button">Upload</button></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input type="text" className="form-control" id="phoneNumber"
                                       placeholder="Phone Number" onChange={this.inputChangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">City</label>
                                <input type="text" className="form-control" id="location"
                                       placeholder="Location" onChange={this.inputChangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="aboutUser">About User</label>
                                <textarea className="form-control" id="aboutUser" rows="4"
                                          onChange={this.inputChangeHandler}/>
                            </div>
                            <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
                            <button className="btn btn-light" type="submit">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SaveUser;