/* Packages */
import Head from 'next/head'
/* Components */
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import TextSection from '../components/TextSection/TextSection'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <Container>
      <Header />

      <TextSection title="About">
        <p>
          Hexadecimal color values can be described using only three characters.
          It’s elegant and easy to understand but not every color can be
          represented this way — we are left with the total of 4096 colors to
          choose from. It’s more than enough for most cases. By the way{' '}
          <a href="https://google.github.io/styleguide/htmlcssguide.html#Hexadecimal_Notation">
            Google engineers recommend
          </a>{' '}
          using shorter syntax when possible. So, when in doubt — it’s better to
          use a three-character notation.
        </p>
        <p>
          Minimize your web application bandwidth by using only 3 characters for
          colors and make the world a better place. Three bytes at a time.
        </p>
      </TextSection>
      <Footer />
    </Container>
  )
}

export default Home
