import React, { Component } from 'react'
import '../css/aboutpage.scss'

class AboutPage extends Component {

  state = {
    clicked: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleClick = (event) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div className="about-page">
        <img src={'../haley.jpg'} alt=""/>

        <h1>Hi. I’m Haley Barlar.</h1>

        <div className="about-text">
          <p>I’m a front-end developer who believes in the power of good design.  Even the most useful app can be sabotaged by a lack of margins or Comic Sans, and I feel it is my civic duty to prevent this from happening.</p>

          <p>As a JavaScript enthusiast, I spend most of my time working with React, Redux and CSS.  Although my preference is front-end, I completed a full-stack program at Flatiron School in NYC, so I also feel comfortable with back-end and Ruby, Rails, SQL and Node.</p>

          <p>In my free time you can find me doing yoga, hiking, learning German or spending time with my dog.  I love meeting new friends, so send me an email if you’d like to get in touch. Thanks for stopping by!</p>
        </div>

      </div>
    )
  }
}

export default AboutPage
