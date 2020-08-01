import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../defaultTheme';

export const StyledTab = styled.div`
    font-family: ${(props) => props.theme.fontFamily};
    transition: 0.4s;
    text-align: left;
    outline: none;
    padding: 20px;
    cursor: pointer;
    background: ${props => props.theme.accordion.backgroundColor};
    border-color: ${props => props.theme.accordion.borderColor};
    color: ${props => props.theme.accordion.color};
    font-size: ${props => props.theme.accordion.fontSize};
    font-weight: ${props => props.theme.accordion.fontWeight};
    letter-spacing: ${props => props.theme.accordion.letterSpacing};
`;

export const StyledPanel = styled.div`
    background: ${props => props.theme.accordion.panel.backgroundColor};
    font-size: ${props => props.theme.accordion.fontSize};
    font-weight: ${props => props.theme.accordion.panel.fontWeight};
    letter-spacing: ${props => props.theme.accordion.letterSpacing};
`;

export const StyledItem = styled.div`
    padding: 8px 20px;
    &:hover {
        cursor: pointer;
        background: ${props => props.theme.accordion.panel.focus.backgroundColor};
        color: ${props => props.theme.accordion.panel.focus.color};
        font-size: ${props => props.theme.accordion.panel.focus.fontSize};
    }
`;



StyledTab.defaultProps = {
    theme: defaultTheme
}

StyledTab.propTypes = {
    theme: PropTypes.shape()
}

StyledPanel.defaultProps = {
    theme: defaultTheme
}

StyledPanel.propTypes = {
    theme: PropTypes.shape()
}

StyledItem.defaultProps = {
    theme: defaultTheme
}

StyledItem.propTypes = {
    theme: PropTypes.shape()
}

