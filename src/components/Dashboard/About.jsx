import React from 'react'

const About = () => {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med" data-aos="fade-up">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            Here you'll discover additional details about me, my professional endeavors, and my current expertise primarily focused on programming and technology.
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main" data-aos="fade-up" data-aos-delay="200">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                Welcome! I'm a passionate <strong>Full Stack Developer</strong> specializing in Front-End Development using <strong>React.js</strong> and Back-End Development using <strong>Node.js</strong> & <strong>CodeIgniter PHP</strong>. With a strong background and ongoing studies in Computer Science, I constantly push the boundaries of what's possible.
              </p>
              <p className="about__content-details-para">
                I excel in <strong>Project Management</strong> and <strong>UI/UX Design</strong>. Open to job opportunities, I'm eager to contribute, learn, and grow. Don't hesitate to <strong>contact</strong> me if you have a matching opportunity.
              </p>
              <p className="about__content-details-para">
                Connect with me on <a href="https://www.linkedin.com/in/takimsry/"><strong>LinkedIn</strong></a> for useful content on web development and programming.
              </p>
              <p className="about__content-details-para">
                Let's collaborate and bring your <strong>ideas</strong> to life!
              </p>
            </div>
            <a href="https://drive.google.com/file/d/1B86KTlMz953EBWZdiKem1z2x43kkqTo_/view?usp=sharing" className="btn btn--med btn--theme dynamicBgClr" target="_blank" rel="noreferrer"
            >My CV</a
            >
          </div>
          <div className="about__content-skills" data-aos="fade-up" data-aos-delay="200">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React.js</div>
              <div className="skills__skill">Node.js</div>
              <div className="skills__skill">PHP</div>
              <div className="skills__skill">CodeIgniter</div>
              <div className="skills__skill">jQuery</div>
              <div className="skills__skill">Ajax</div>
              <div className="skills__skill">SQL</div>
              <div className="skills__skill">MySQL</div>
              <div className="skills__skill">PostgreSQL</div>
              <div className="skills__skill">MongoDB</div>
              <div className="skills__skill">GraphQL</div>
              <div className="skills__skill">UI/UX Design</div>
              <div className="skills__skill">Tailwind CSS</div>
              <div className="skills__skill">Bootstrap</div>
              <div className="skills__skill">Git</div>
              <div className="skills__skill">GitHub</div>
              <div className="skills__skill">Problem Solving</div>
              <div className="skills__skill">Project Management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About