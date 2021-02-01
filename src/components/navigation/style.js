import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styled from 'styled-components';

export const NavigationStyle = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	padding-right: 35px;
	justify-content: flex-end;
	align-self: center;
	box-sizing: border-box;
	flex-basis: 5%;
	margin-top: 10px;
`;

export const LeftArrow = styled(FaAngleLeft)`
    font-size: 30px;
    color: white;
`;

export const RightArrow = styled(FaAngleRight)`
    font-size: 30px;
    color: white;
`;

export const LeftArrowStyle = styled.div`
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 10px;
	margin-right: 10px;
	cursor: pointer;
`;

export const RightArrowStyle = styled.div`
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 10px;
	cursor: pointer;
`;
