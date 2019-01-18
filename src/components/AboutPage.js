import React, { Component } from 'react'
import '../css/aboutpage.scss'

class AboutPage extends Component {

  render() {
    return (
      <div className="about-page">
        <img src={'../haley.jpg'} alt=""/>

        <h1>Hi. I’m Haley Barlar.</h1>

        <div className="about-text">
          <p>I’m a front end web developer who believes in the power of good design.  Even the most useful app can be sabotaged by a lack of margins or Comic Sans, and I feel it is my civic duty to prevent this from happening.</p>
          <p>My passion for design comes from having a BFA in Fibers from the Savannah College of Art and Design. While it’s often hard to visualize the correlation of a wool sculpture to a 2D digital app, I find that there are some major similarities. For example, I’m an extremely process-oriented person, and this is the driving point of both Fibers and code. Watching something come to life and immersing myself into each molecule of my project is where I find extreme joy.  Another example of a Fibers to code similarity would be in the aspect of user interaction.  With both Fine Art and code, I’m creating with a clear question in mind: how will a user or viewer interact with or experience my project?  Human interaction is one of the most beautiful and natural parts of life, and this can be positively initiated with great user experience.</p>
          <p>In my free time you can find me doing yoga, hiking, learning French or spending time with my dog.  I love meeting new friends, so send me an email if you’d like to get in touch. Thanks for stopping by!</p>
        </div>
      </div>
    )
  }
}

export default AboutPage
