import React, { Component } from 'react'
import '../css/aboutpage.scss'

class AboutPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="about-page">
        <img src={'../haley.jpg'} alt=""/>

        <h1>Hi. I’m Haley Barlar.</h1>

        <div className="about-text">
          <p>I’m a front end web developer who believes in the power of good design.  Even the most useful app can be sabotaged by a lack of margins or Comic Sans, and I feel it is my civic duty to prevent this from happening.</p>
          <p>As a people person, I thrive in collaborative environments. Being able to combine ideas and problem-solve as a team is one of the most efficient ways to complete a project. I create with a clear question in mind: how will a user or viewer interact with or experience my project?  Human interaction is one of the most beautiful and natural parts of life, and this can be positively initiated with great user experience. </p>
          <p>In my free time you can find me doing yoga, hiking, learning French or spending time with my dog.  I love meeting new friends, so send me an email if you’d like to get in touch. Thanks for stopping by!</p>
        </div>
      </div>
    )
  }
}

export default AboutPage
