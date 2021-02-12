import PropTypes from 'prop-types';
import styled from 'styled-components';
import db from '../../../db.json';

const Button = styled.button`
  background-color: ${db.theme.colors.secondary};
  color: ${db.theme.colors.contrastTextLight};
  border-radius: ${db.theme.borderRadius};
  border: 0;

  width: 100%;
  padding: 15px 20px;
  font-weight: bold;
  font-size: 1.1em;
  line-height: 1;
  outline: 0;
  transition: .3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: .5;
  }

  &:disabled {
    background-color: ${db.theme.colors.disabled};
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
