import React from 'react';
import Widget from '../Widget';

const Result = () => (
  <Widget>
    <Widget.Header>
      Quantas questões você acertou..
    </Widget.Header>
    <Widget.Content>
      {/* {`Você acertou ${rightAnswers} de ${totalQuestions}`} */}
    </Widget.Content>
  </Widget>
);

export default Result;
