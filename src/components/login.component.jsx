import { Component } from 'react'

export default class Login extends Component {

  forgot = "#"

  render() {
    return (
      <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remenber me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href={this.forgot}>password?</a>
        </p>
      </form>
    )
  }
}