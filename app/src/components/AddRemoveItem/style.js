import styled from 'styled-components';
import { MAIN_COLOR_DARK, SECONDARY_COLOR, DEFAULT_HEIGHT_BUTTONS, DEFAULT_BORDER_RADIUS } from '../../constants/defaultStyleProps'

export const Container = styled.div`
    display:flex;
    align-items:center;
`

export const BtnAdd = styled.button`
    background-color:${MAIN_COLOR_DARK};
    border:none;
    color:#fff;
    font-size:20px;
    height: 22px;
    width: 22px;
    margin:5px;
    border-radius:${DEFAULT_BORDER_RADIUS};
`

export const Qty = styled.p`
    font-weight:600;
    color:${MAIN_COLOR_DARK};
`

export const BtnRemove = styled.button`
    background-color:${MAIN_COLOR_DARK};
    border:none;
    color:#fff;
    font-size:20px;
    height: 22px;
    width: 22px;
    margin:5px;
    border-radius:${DEFAULT_BORDER_RADIUS};
`