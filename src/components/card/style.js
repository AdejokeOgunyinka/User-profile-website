import styled from 'styled-components';
import {FaEnvelope, FaPhoneAlt, FaRegCreditCard, FaPaypal, FaVenusMars} from 'react-icons/fa';


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
    flex-basis: 23%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin-right: 20px;
    margin-top: 20px;
    background-color: white;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

export const EmailIcon = styled(FaEnvelope)`
	color: #00103FFB;
	margin-right: 5px;
	font-size: 15px;
`

export const PhoneIcon = styled(FaPhoneAlt)`
	color: #00103FFB;
	margin-right: 10px;
`

export const CardIcon = styled(FaRegCreditCard)`
	color: #00103FFB;
	margin-right: 10px;
`

export const PaymentIcon = styled(FaPaypal)`
	color: #00103FFB;
	margin-right: 10px;
`

export const GenderIcon = styled(FaVenusMars)`
	color: #00103FFB;
	margin-right: 10px;
	font-size: 25px;
`

export const ContentStyle = styled.div`
	display: flex;
	flex-direction: row;
	width: 50%;
	height: 10%;
	margin-top: 10px;
	justify-content: center;
	align-items: center;
    box-sizing: border-box;
`;

export const Text = styled.text`
	color: #00103FFB;
	font-size: 20px;
	font-family: Raleway;
	font-weight: 300;
	align-self: center;
	margin-right: 5px;
`;

export const ImageStyle = styled.div`
    
`