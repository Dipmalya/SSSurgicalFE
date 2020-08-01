import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../defaultTheme';

export const StyledInput = styled.input`
    font-family: ${(props) => props.theme.fontFamily};
    border-radius: ${props => props.theme.input.borderRadius};
    font-size: ${props => props.theme.input.fontSize};
    padding: 6px;
    border: ${props => props.error ? props.theme.input.error.border : props.theme.input.border};
    &:focus {
        border: ${props => props.theme.input.active.border};
    }
`;

StyledInput.defaultProps = {
    theme: defaultTheme,
    error: false
}

StyledInput.propTypes = {
    theme: PropTypes.shape(),
    error: PropTypes.bool
}

