import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastTextLight};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;

  width: 100%;
  padding: 15px 20px;
  font-weight: bold;
  font-size: 1.1em;
  line-height: 1;
  outline: 0;
  transition: .3s;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled}50;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
