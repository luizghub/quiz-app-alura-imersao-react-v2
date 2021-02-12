import React from 'react';
import useRouter from 'next/router';

import Input from '../Input';
import FormButton from '../FormButton';

export default function Form() {
  const router = useRouter;
  const [name, setName] = React.useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      router.push(`/quiz?name=${name}`);
    }}
    >
      <Input
        name="nomeDoUsuario"
        onChange={(e) => setName(e.target.value)}
        placeholder="Diga-me seu nome para jogar!"
        value={name}
      />
      <FormButton type="submit" disabled={name.length === 0}>
        <span>
          Jogar como:
          {' '}
          {name}
        </span>
      </FormButton>
    </form>
  );
}
