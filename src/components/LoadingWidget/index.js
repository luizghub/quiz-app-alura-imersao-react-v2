import React from 'react';
import Widget from '../Widget';

const Loading = () => (
  <Widget>
    <Widget.Header>
      Carregando a pergunta... !
    </Widget.Header>
    <Widget.Content>
      Carregando alternativas... !
    </Widget.Content>
  </Widget>
);

export default Loading;
