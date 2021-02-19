/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import db from '../../db.json';

import QuizScreen from '../../src/screens/quiz';

export default function QuizDaGaleraPage({ dbExternal }) {
  return (
    <ThemeProvider theme={dbExternal.theme}>
      <QuizScreen
        externalQuestions={dbExternal.questions}
        externalBg={dbExternal.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps() {
  const dbExternal = await fetch(db.external)
    .then((respDoServer) => {
      if (respDoServer.ok) {
        return respDoServer.json();
      }
      throw new Error('Falha ao tentar captar os dados!');
    }).then((respConvertDoServer) => respConvertDoServer)
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });

  return {
    props: {
      dbExternal,
    },
  };
}

QuizDaGaleraPage.propTypes = {
  dbExternal: PropTypes.object.isRequired,
  theme: PropTypes.array.isRequired,
  bg: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
};
