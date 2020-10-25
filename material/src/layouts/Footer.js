import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small teal pt-4">
        <Divider />
        <div
          style={{ marginTop: "50px" }}
          className="container-fluid text-center text-md-left"
        >
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">Usage</h5>
              <p>
                Just prepare an electronic version of an X-Ray image of
                patient's chest, Upload it to above form and see the prediction
                result
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-6 mb-md-0 mb-3">
              <h5 className="text-uppercase font-weight-bold">Terms of Use</h5>
              <p>
                This application is provided by two students of Amirkabir
                University of Technology by their own works. It is planned to be
                free to everyone across the world. Feel free to share it to
                anyone who may need it and use it. you can find the git
                repository links <Link to="/repos">HERE</Link>
                {/* <u>
                  this app is provided AS IS and the producers have no
                  commitement to any use of this app of any kind.
                </u> */}
              </p>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            © 2020 Licensed With:
            <a href="https://opensource.org/licenses/MIT">
              {" "}
              Mit opensource license
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
