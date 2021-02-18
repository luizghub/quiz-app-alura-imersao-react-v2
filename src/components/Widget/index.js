import styled from 'styled-components';

const Widget = styled.section`
  margin: 24px 0;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 1.4em;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 1em;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  color: ${({ theme }) => theme.colors.contrastTextLight};
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  color: ${({ theme }) => theme.colors.contrastTextDark};
  background-color: ${({ theme }) => theme.colors.primary};
  * {
    margin: 0;
  }
`;

Widget.Topic = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastTextLight};
  padding: 5px 8px 5px 8px;
  margin-bottom: 5px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.primary}30;
  border-radius: 4px;
  transition: .3s;
  display: block;
  opacity: .85;
  &:hover, &:focus {
    opacity: 1;
    border: 2px solid ${({ theme }) => theme.colors.primary}75;
  }
`;

export default Widget;
