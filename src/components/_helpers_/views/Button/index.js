import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../defaultTheme';

const Button = styled.button`
    cursor: pointer;
    padding: 5px;
    font-family: ${(props) => props.theme.fontFamily};

    &::before, &::after {
        position: absolute;
        height: 100%;
        color: inherit;
        transition: all 0.3s;
        speak: none;
    }
`;

Button.Primary = styled(Button)`
  color: ${props => props.theme.button.primary.color};
  border-color: ${props => props.theme.button.primary.borderColor};
  background: ${props => props.theme.button.primary.backgroundColor};
  border-width: ${props => props.theme.button.primary.borderWidth};
  padding: ${props => props.theme.button.primary.padding};
  font-weight: ${props => props.theme.button.primary.fontWeight};
  border-radius: ${props => props.theme.button.primary.borderRadius};
  font-size: ${props => props.theme.button.primary.fontSize};
  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: ${props => props.theme.button.primary.focus.color};
    background: ${props => props.theme.button.primary.focus.backgroundColor};
    border-color: ${props => props.theme.button.primary.focus.borderColor};
  }
`;

Button.Secondary = styled(Button)`
  color: ${props => props.theme.button.secondary.color};
  border-color: ${props => props.theme.button.secondary.borderColor};
  background: ${props => props.theme.button.secondary.backgroundColor};;
  border-width: ${props => props.theme.button.secondary.borderWidth};
  padding: ${props => props.theme.button.secondary.padding};
  font-weight: ${props => props.theme.button.secondary.fontWeight};
  border-radius: ${props => props.theme.button.secondary.borderRadius};
  font-size: ${props => props.theme.button.secondary.fontSize};
  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: ${props => props.theme.button.secondary.focus.color};
    background: ${props => props.theme.button.secondary.focus.backgroundColor};
    border-color: ${props => props.theme.button.secondary.focus.borderColor};
  }
`;

Button.Tertiary = styled(Button)`
  color: ${props => props.theme.button.tertiary.color};
  border-color: ${props => props.theme.button.tertiary.borderColor};
  background: ${props => props.theme.button.tertiary.backgroundColor};;
  border-width: ${props => props.theme.button.tertiary.borderWidth};
  padding: ${props => props.theme.button.tertiary.padding};
  font-weight: ${props => props.theme.button.tertiary.fontWeight};
  border-radius: ${props => props.theme.button.tertiary.borderRadius};
  font-size: ${props => props.theme.button.tertiary.fontSize};
  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: ${props => props.theme.button.tertiary.focus.color};
    background: ${props => props.theme.button.tertiary.focus.backgroundColor};
    border-color: ${props => props.theme.button.tertiary.focus.borderColor};
  }
`;

// Button.Danger = styled(Button)`
//   border-color: ${props => props.theme.button.danger.borderColor};
//   background: ${props => props.theme.button.danger.backgroundColor};
//   &:hover:not(:disabled),
//   &:focus:not(:disabled) {
//     background: ${props => props.theme.button.danger.focus.backgroundColor};
//     border-color: ${props => props.theme.button.danger.focus.borderColor};
//   }
// `;

Button.defaultProps = {
    theme: defaultTheme
}

Button.propTypes = {
    id: PropTypes.string,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.shape()
}

export default Button;