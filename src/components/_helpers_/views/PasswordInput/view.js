import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../defaultTheme';

export const StyledPasswordInput = styled.input`
    font-family: ${(props) => props.theme.fontFamily};
    border-radius: ${props => props.theme.input.password.borderRadius};
    font-size: ${props => props.theme.input.password.fontSize};
    padding: 6px;
    border: ${props => props.theme.input.password.border};
    &:focus {
        border: ${props => props.theme.input.password.active.border};
    }
`;

StyledPasswordInput.defaultProps = {
    theme: defaultTheme
}

StyledPasswordInput.propTypes = {
    theme: PropTypes.shape()
}

