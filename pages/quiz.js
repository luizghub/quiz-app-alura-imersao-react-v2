import React from 'react';

import db from '../db.json';

import PageHead from '../src/components/PageHead';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Loading from '../src/components/Loading';

export default function QuizPage() {
  const question = db.questions[0]

  return (
    <QuizBackground>
      <PageHead />
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            {/* <BackLinkArrow href="/" /> */}
            <h3>
              Pergunta
              {' '}
              1
              {' '}
              de
              {` ${db.questions.length}`}
            </h3>
          </Widget.Header>
          <img
            alt="Descrição"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
            }}
            src={question.image}
          />
          <Widget.Content>
            <h2>
              {question.title}
            </h2>
            <p>
              {question.description}
            </p>
          </Widget.Content>
        </Widget>
        <Loading />
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
