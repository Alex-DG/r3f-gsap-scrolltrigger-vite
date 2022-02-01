import Icosahedron from '../components/Icosahedron'
import TorusKnot from '../components/TorusKnot'

/// /// /// /// /// /// /// /// /// /// /// ///
const DefaultDemo = () => (
  <Icosahedron
    position={[0, 0, 0]}
    scale={[1.1, 1.1, 1.1]}
    args={[10, 0]}
    scrollAnimation
  />
)
/// /// /// /// /// /// /// /// /// /// /// ///
const Demo1 = () => (
  <>
    <Icosahedron
      position={[0, 0, 0]}
      scale={[1.1, 1.1, 1.1]}
      args={[10, 0]}
      scrollAnimation
    />

    <Icosahedron
      position={[0, 0, 0]}
      scale={[0.5, 0.5, 0.5]}
      args={[10, 0]}
      scrollAnimation
    />
  </>
)
/// /// /// /// /// /// /// /// /// /// /// ///
const Demo2 = () => (
  <>
    <TorusKnot
      position={[0, 0, 0]}
      scale={[1, 1, 1]}
      args={[10, 1]}
      scrollAnimation
    />
    <TorusKnot
      position={[0, 0, 0]}
      scale={[0.5, 0.5, 0.5]}
      args={[10, 1]}
      scrollAnimation
    />{' '}
  </>
)
/// /// /// /// /// /// /// /// /// /// /// ///
const Demo3 = () => (
  <TorusKnot
    position={[0, 0, 0]}
    scale={[2.5, 2.5, 2.5]}
    args={[10, 0.5]}
    scrollAnimation
  />
)
/// /// /// /// /// /// /// /// /// /// /// ///

const Demo = ({ queryString }) => {
  switch (queryString) {
    case '?1':
      return <Demo1 />
    case '?2':
      return <Demo2 />
    case '?3':
      return <Demo3 />
    default:
      return <DefaultDemo />
  }
}

export default Demo
