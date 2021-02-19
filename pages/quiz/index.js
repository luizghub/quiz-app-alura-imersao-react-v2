import React from 'react';
import PropTypes from 'prop-types';

import db from '../../db.json';

import PageHead from '../../src/components/PageHead';
import GitHubCorner from '../../src/components/GitHubCorner';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import Widget from '../../src/components/Widget';
import Button from '../../src/components/Button';
import LoadingWidget from '../../src/components/LoadingWidget';
import AlternativesForm from '../../src/components/AlternativesForm';

function QuestionWidget({
  question, questionIndex, totalQuestions, onSubmit, addResults,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

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

        <AlternativesForm
          onSubmit={(e) => {
            e.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResults(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 1 * 500);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'Succes' : 'Error';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  Quiz: 'Quiz',
  Loading: 'Loading',
  Result: 'Result',
};

function ResultWidget({ results }) {
  const totalQuestions = db.questions.length;
  const rightAnswers = results.filter((x) => x);
  const hitRate = Number(totalQuestions) / Number(rightAnswers.length);

  function Rate() {
    let comment = '';
    if (hitRate > 0 || hitRate < 2) {
      comment = 'Parabéns ein! Muito Bom!! : ]';
    } else if (hitRate >= 2) {
      comment = 'Continue tentando! Revise o assunto! : ]';
    } else if (hitRate > totalQuestions) {
      comment = 'Precisa estudar mais esse assunto, ein! : ]';
    }
    return comment;
  }

  return (
    <Widget>
      <Widget.Header>
        <h3>Este é o seu resultado:</h3>
      </Widget.Header>
      <Widget.Content>
        <p>{`Você acertou ${rightAnswers.length} de ${totalQuestions} questões!`}</p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              {`A ${index + 1}ª Resposta: `}
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
        <p>{`${Rate()}`}</p>
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.Loading);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;

  function addResults(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.Quiz);
    }, 1 * 2000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.Result);
    }
  }

  return (
    <QuizBackground>
      <PageHead />
      <QuizContainer>
        {screenState === screenStates.Quiz && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResults={addResults}
          />
        )}
        {screenState === screenStates.Loading && <LoadingWidget />}
        {screenState === screenStates.Result && <ResultWidget results={results} />}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/luizghub" />
    </QuizBackground>
  );
}

QuestionWidget.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  question: PropTypes.object.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  questionIndex: PropTypes.number.isRequired,
  addResults: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ResultWidget.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array.isRequired,
};
