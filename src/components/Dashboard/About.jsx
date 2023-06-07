import React from 'react'
import myCV from '../../assets/cv/M. Mustakim Surya_CV.pdf'

const About = () => {
  return (
    <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med" data-aos="fade-up">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
            Here you'll discover additional details about me, my professional endeavors, and my current expertise primarily focused on programming and technology.
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main" data-aos="fade-up" data-aos-delay="150">
            <h3 class="about__content-title">Get to know me!</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                Welcome! I'm a passionate <strong>Full Stack Developer</strong> specializing in Web Development using <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>CodeIgniter PHP</strong>. With a strong background and ongoing studies in Computer Science, I constantly push the boundaries of what's possible.
              </p>
              <p class="about__content-details-para">
                I excel in <strong>Project Management</strong> and <strong>UI/UX Design</strong>. Open to job opportunities, I'm eager to contribute, learn, and grow. Don't hesitate to <strong>contact</strong> me if you have a matching opportunity.
              </p>
              <p class="about__content-details-para">
                Connect with me on <a href="https://www.linkedin.com/in/m-mustakim-surya/"><strong>LinkedIn</strong></a> for useful content on web development and programming.
              </p>
              <p class="about__content-details-para">
                Let's collaborate and bring your <strong>ideas</strong> to life!
              </p>
            </div>
            <a href={myCV} class="btn btn--med btn--theme dynamicBgClr" download
              >My CV</a
            >
          </div>
          <div class="about__content-skills" data-aos="fade-up" data-aos-delay="150">
            <h3 class="about__content-title">My Skills</h3>
            <div class="skills">
              <div class="skills__skill">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill">JavaScript</div>
              <div class="skills__skill">React.js</div>
              <div class="skills__skill">Node.js</div>
              <div class="skills__skill">PHP</div>
              <div class="skills__skill">CodeIgniter</div>
              <div class="skills__skill">MySQL</div>
              <div class="skills__skill">Apollo GraphQL</div>
              <div class="skills__skill">Axios</div>
              <div class="skills__skill">UI/UX Design</div>
              <div class="skills__skill">Tailwind CSS</div>
              <div class="skills__skill">Bootstrap</div>
              <div class="skills__skill">Git</div>
              <div class="skills__skill">GitHub</div>
              <div class="skills__skill">Project Management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About