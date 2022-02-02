import '../styles/dom.css'

import logoSrc from '../assets/favicon.svg'

import Section from './components/Section'

import useTweens from './hooks/useTweens'

import { sections, link } from './data'

const Dom = () => {
  useTweens()

  return (
    <>
      <a href={link} target='_blank'>
        <figure className='figure'>
          <img className='logo' src={logoSrc} alt='logo' />
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
