import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchStyle = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	flex-direction: row;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    border-radius: 25px;
    background-color: white;
    box-sizing: border-box;
`;

export const InputStyle = styled.input`
	flex-basis: 60%;
	height: 90%;
    width: 50%;
    border: none;
    outline: none;
    margin-left: 15px;
    font-size: 20px;
    box-sizing: border-box;
`;

export const SearchIcon = styled(FaSearch)`
    flex-basis: 10%;
    font-size: 30px;
    color: grey;
    cursor: pointer;
    padding-top: 15px;
    padding-bottom: 15px;
`;
