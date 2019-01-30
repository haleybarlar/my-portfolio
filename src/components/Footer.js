import React, { Component } from 'react'
import '../css/footer.scss'

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footer-text">
          <h1>Let's chat</h1>
          <p>Get in touch for any full-time opportunities or a quick hello!</p>
          <a href="mailto:hbarlar1@gmail.com" target="_top">hbarlar1@gmail.com</a>
          <br></br>
          <a href="https://github.com/haleybarlar" alt="" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/haleybarlar/" alt="" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
          <a href="https://www.behance.net/haleybarlar" alt="" target="_blank"><i class="fa fa-behance" aria-hidden="true"></i></a>
        </div>
      </div>
    )
  }
}

export default Footer
