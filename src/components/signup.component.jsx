import { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            id="firstname"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            id="lastname"
            className="form-control"
            placeholder="Last name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href='/sign-in'>sign in?</a>
        </p>
      </form>
    )
  }
}