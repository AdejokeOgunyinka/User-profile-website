import { DropdownStyle, DropDown } from './style';

export const GenderDropdown = ({ onChange, genderValues }) => {
	const genderValue = Array.from(genderValues)
	const newGenderValues = genderValue.map((genderType) => {
		return {value: `${genderType}`, label: `${genderType}`}
	})

	return (
		<DropdownStyle>
			<DropDown options={newGenderValues} placeholder='Filter by gender' onChange={onChange}/>
		</DropdownStyle>
	);
};

export const PaymentOptionsDropdown = ({ onChange, paymentValues }) => {
	const paymentTypes = Array.from(paymentValues)
	const newPaymentValues = paymentTypes.map((paymentType) => {
		return {value: `${paymentType}`, label: `${paymentType}`}
	})

	return (
		<DropdownStyle>
			<DropDown options={newPaymentValues} placeholder='Filter by payment options' onChange={onChange}/>
		</DropdownStyle>
	);
};

export const CreditCardTypeDropdown = ({ onChange, creditCardValues }) => {
	const creditCardValue = Array.from(creditCardValues)
	const newCreditTypeOptions = creditCardValue.map((creditCardType) => {
		return {value: `${creditCardType}`, label: `${creditCardType}`}
	})

	return (
		<DropdownStyle>
			<DropDown options={newCreditTypeOptions} placeholder='Filter by credit card type' onChange={onChange}/>
		</DropdownStyle>
	);
};
