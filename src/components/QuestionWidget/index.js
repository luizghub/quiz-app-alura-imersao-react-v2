import React from 'react';
// import PropTypes from 'prop-types';

import Widget from '../Widget';
import Button from '../Button';
import db from '../../../db.json';

export default function QuestionWidget() {
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;
  const questionID = `question__${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
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
        <form onSubmit={(e) => e.preventDefault()}>
          {
          question.alternatives.map((alternative, alternativeIndex) => (
            <Widget.Alternativas as="label" htmlFor={`${alternativeIndex}`} key={alternativeIndex.toString()}>
              <input id={`${alternativeIndex}`} type="radio" name={questionID} />
              {` ${alternative}`}
            </Widget.Alternativas>
          ))
        }
        </form>
        <Button type="submit" />
      </Widget.Content>
    </Widget>
  );
}

// Quiz.propTypes = {
//   totalQuestions: PropTypes.number.isRequired,
//   questionIndex: PropTypes.number.isRequired,
//   question: PropTypes.func.isRequired,
//   questionID: PropTypes.func.isRequired,
// };
