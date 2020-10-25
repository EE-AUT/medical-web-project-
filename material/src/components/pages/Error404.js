import React, { Component } from "react";

export class Error404 extends Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Error 404</h1>
        <h3>Page not found</h3>
        <p style={{ textAlign: "center" }}>
          please select of links is the left Drawer menu <br /> or report the
          issue to MohammadAliGhorbani{" "}
          <a href="/aboutus">Click here for contact links</a>
        </p>
      </div>
    );
  }
}

export default Error404;
