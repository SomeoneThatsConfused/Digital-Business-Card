/* eslint-disable react/no-unescaped-entities */
import './info.css'
import pfp from './assets/pfp.png'
import HTMLIcon from './assets/HTML-icon.png'
import CSSIcon from './assets/CSS-icon.png'
import JSIcon from './assets/JavaScript-icon.png'
import ReactIcon from './assets/React-icon.png'

export default function Info() {
  return (
    <article className="Info">
      <section className="Header">
        <img src={pfp}/>
        <div className='Details'>
          <h1>SomeoneThatsConfused</h1>
          <h2>Aspiring Front-End Developer</h2>
        </div>
        
      </section>
      <section className="Tagline">
        <h3>Tagline</h3>
        <q>I'm Confused</q>
      </section>
      <section className="Skills">
        <h3>Skills</h3>
        <div className='SkillList'>
          <img src={HTMLIcon} alt="HTML Icon" />
          <img src={CSSIcon} alt="CSS Icon" />
          <img src={JSIcon} alt="JavaScript Icon" />
          <img src={ReactIcon} alt="ReactJS Icon" />
        </div>
      </section>
      <section className="Links">
        <a href='https://github.com/SomeoneThatsConfused'></a>
        <a href='mailto:mrplwastaken@gmail.com'></a>
      </section>
    </article>
  )
}