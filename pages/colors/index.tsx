import { useMemo } from 'react'
/* Components */
import Container from '../../components/Container/Container'
import Navbar from '../../components/Navbar/Navbar'
import ColorsSection from '../../components/ColorsSection/ColorsSection'
import TextSection from '../../components/TextSection/TextSection'
/* Data */
import JSON from './sorted.json'

// Prevent recalculations
const ColorsPage = () => {
  const data = useMemo(() => JSON, [])

  return (
    <Container>
      <Navbar />
      <TextSection title="Description">
        <p>Colors are sorted by luminosity.</p>
        <p>Click the color to copy hex value to your clipboard.</p>
      </TextSection>
      <ColorsSection colors={data} />
    </Container>
  )
}

export default ColorsPage
