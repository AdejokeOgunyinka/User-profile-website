import { DropdownStyle, DropDown } from './style';

const GenderOptions = [
	{ value: 'Male', label: 'Male' },
	{ value: 'Female', label: 'Female' },
	{ value: 'Prefer to skip', label: 'Prefer to skip' }
];

const PaymentOptions = [
	{ value: 'money order', label: 'money order' },
	{ value: 'cc', label: 'cc' },
	{ value: 'check', label: 'check' },
	{ value: 'paypal', label: 'paypal' }
];

const CreditCardTypeOptions = [
	{ value: 'American Express', label: 'American Express' },
	{ value: 'JCB', label: 'JCB' }
];

export const GenderDropdown = ({ onChange }) => {
	return (
		<DropdownStyle>
			<DropDown options={GenderOptions} placeholder='Filter by gender' onChange={onChange}/>
		</DropdownStyle>
	);
};

export const PaymentOptionsDropdown = ({ onChange }) => {
	return (
		<DropdownStyle>
			<DropDown options={PaymentOptions} placeholder='Filter by payment options' onChange={onChange}/>
		</DropdownStyle>
	);
};

export const CreditCardTypeDropdown = ({ onChange }) => {
	return (
		<DropdownStyle>
			<DropDown options={CreditCardTypeOptions} placeholder='Filter by credit card type' onChange={onChange}/>
		</DropdownStyle>
	);
};
