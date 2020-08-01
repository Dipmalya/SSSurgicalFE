import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../defaultTheme';

export const StyledNumberInput = styled.input`
    font-family: ${(props) => props.theme.fontFamily};
    margin: 0px 4px 0px 17px;
    width: 1.75rem;
    border: ${props => props.theme.input.number.border};
    font-size: ${props => props.theme.input.number.fontSize};
`;

export const Button = styled.button`
    border-radius: ${props => props.theme.input.number.button.borderRadius};
    font-size: ${props => props.theme.input.number.button.fontSize};
    padding: 2px 8px;
    color: ${props => props.theme.input.number.button.color};
    background: ${props => props.theme.input.number.button.backgroundColor};
    border-color: ${props => props.theme.input.number.button.borderColor};
    cursor: pointer;
`;

StyledNumberInput.defaultProps = {
    theme: defaultTheme
}

StyledNumberInput.propTypes = {
    theme: PropTypes.shape()
}

Button.defaultProps = {
    theme: defaultTheme
}

Button.propTypes = {
    theme: PropTypes.shape()
}
