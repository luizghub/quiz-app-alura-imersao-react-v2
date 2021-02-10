import styled from 'styled-components';
import db from '../../../db.json';

const Widget = styled.section`
  margin: 24px 0;
  border: 2px solid ${db.theme.colors.secondary};
  background-color: ${db.theme.colors.mainBg};
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
  color: ${db.theme.colors.contrastTextLight};
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
  color: ${db.theme.colors.contrastTextDark};
  background-color: ${db.theme.colors.primary};
  * {
    margin: 0;
  }
`;

export default Widget;
