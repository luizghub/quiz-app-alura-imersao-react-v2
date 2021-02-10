import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'

export default function Home() {
  return (
    <QuizBackground>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>Quiz da Bobeira</h1>
          </Widget.Header>
          <Widget.Content>
            <p>teste</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quiz's da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>teste</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner/>
    </QuizBackground>
  )
}
