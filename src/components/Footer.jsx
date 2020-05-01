import React, { Component } from "react";
import "../css/footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a
          href="https://github.com/haleybarlar"
          alt=""
          target="_blank"
          aria-label="github"
        >
          <i class="fa fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/haleybarlar/"
          alt=""
          target="_blank"
          aria-label="linkedIn"
        >
          <i class="fa fa-linkedin" />
        </a>
        <a
          href="https://www.behance.net/haleybarlar"
          alt=""
          target="_blank"
          aria-label="behance"
        >
          <i class="fa fa-behance" />
        </a>
        <a
          href="https://twitter.com/haley_barlar"
          alt=""
          target="_blank"
          aria-label="behance"
        >
          <i class="fa fa-twitter" />
        </a>
      </div>
    );
  }
}

export default Footer;
