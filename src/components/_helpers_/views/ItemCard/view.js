import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../defaultTheme';

export const StyledCard = styled.div`
    font-family: ${(props) => props.theme.fontFamily};
    box-shadow: ${(props) => props.theme.card.boxShadow};
    transition: 0.3s;
    width: 20%;
    color: ${(props) => props.theme.card.color};
    cursor: pointer;
    &:hover {
        font-size: 16.5px;
        box-shadow: ${(props) => props.theme.card.hover.boxShadow};
        color: ${(props) => props.theme.card.hover.color};
    }
`;

export const StyledName = styled.h3`
    padding: 1px 6px;
    margin: 5px 0px;
    text-align: center;
`;

export const StyledCategory = styled.h5`
    margin: 6px 0px;
    text-align: center;
`;

export const StyledPrice = styled.h3`
    padding: 5px 0px 16px 0px;
    margin: 3px 0px;
    text-align: center;
`;

export const StyledImg = styled.img`
    width: 100%;
`;

StyledCard.defaultProps = {
    theme: defaultTheme
}

StyledCard.propTypes = {
    theme: PropTypes.shape()
}

