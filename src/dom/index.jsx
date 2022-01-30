import '../styles/dom.css'

import logoSrc from '../assets/logo.png'

import Section from './components/Section'

import { sections, link } from './data'

const Dom = () => {
  return (
    <>
      <a href={link} target='_blank'>
        <figure className='figure'>
          <img className='logo' src={logoSrc} alt='Wallrus' />
        </figure>
      </a>

      {sections.map((section, i) => (
        <Section key={i} id={`s${i}`} className='section'>
          {section}
        </Section>
      ))}
    </>
  )
}

export default Dom
