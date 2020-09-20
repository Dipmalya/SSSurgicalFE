import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../defaultTheme';

export const StyledCard = styled.div`
    font-family: ${(props) => props.theme.fontFamily};
    box-shadow: ${(props) => props.theme.card.boxShadow};
    transition: 0.3s;
    width: 100%;
    height: 50%;
    color: ${(props) => props.theme.card.color};
    cursor: pointer;
    &:hover {
        font-size: 16.5px;
        box-shadow: ${(props) => props.theme.card.hover.boxShadow};
        color: ${(props) => props.theme.card.hover.color};
    }
    background-color: #e6e1e1;
`;

export const StyledDesc = styled.div`
    background-color: #e6e1e1;
`;

export const StyledName = styled.h3`
    padding: 1px 6px;
    margin: 5px 0px;
`;

export const StyledCategory = styled.h5`
    padding: 1px 6px;
    margin: 6px 0px;
`;

export const StyledStatement = styled.h6`
    padding: 1px 6px;
    margin: 6px 0px;
`;

export const StyledPrice = styled.h3`
    padding: 1px 6px;
    margin: 3px 0px;
`;

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const StyledAction = styled.div`
    button {
        padding: 10px;
        width: 40%;
    }
`;

StyledCard.defaultProps = {
    theme: defaultTheme
}

StyledCard.propTypes = {
    theme: PropTypes.shape()
}

