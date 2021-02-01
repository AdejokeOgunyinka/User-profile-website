import styled from 'styled-components';

export const Background = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	
`;

export const HeaderSection = styled.div`
	flex-basis: 20%;
	width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
`;

export const SearchSection = styled.div`
	flex-basis: 15%;
	width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
	margin-bottom: 15px;
`;

export const FilterSection = styled.div`
	flex-basis: 10%;
	width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
`;
export const CardSection = styled.div`
	flex-basis: 52%;
	width: 100%;
    display: flex;
    box-sizing: border-box;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	overflow: auto;
	padding-bottom: 30px;
`;

export const FooterSection = styled.div`
	flex-basis: 3%;
	width: 100%;
	height: 55px;
	background-color: black;
    box-sizing: border-box;
`;
