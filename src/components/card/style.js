import styled from 'styled-components';
import {FaEnvelope, FaPhoneAlt, FaRegCreditCard, FaRegMoneyBillAlt, FaVenusMars} from 'react-icons/fa';


export const CardStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 22%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 15px;
    background-color: black;
	padding: 25px;
    box-sizing: border-box;
	align-self: center;
	border-radius: 7px;
`

export const EmailIcon = styled(FaEnvelope)`
	color: white;
	margin-right: 8px;
	font-size: 18px;
`

export const PhoneIcon = styled(FaPhoneAlt)`
	color: white;
	margin-right: 10px;
`

export const CardIcon = styled(FaRegCreditCard)`
	color: white;
	margin-right: 10px;
`

export const PaymentIcon = styled(FaRegMoneyBillAlt)`
	color: white;
	margin-right: 13px;
	font-size: 18px;
`

export const GenderIcon = styled(FaVenusMars)`
	color: white;
	margin-right: 3px;
	font-size: 23px;
`

export const ContentStyle = styled.div`
	display: flex;
	flex-direction: row;
	width: 70%;
	height: 10%;
	margin-top: 10px;
    box-sizing: border-box;
`;

export const Text = styled.text`
	color: white;
	font-size: 17px;
	font-family: Raleway;
	font-weight: 400;
	align-self: center;
	margin-right: 5px;
`;

export const ImageStyle = styled.div`
    
`
