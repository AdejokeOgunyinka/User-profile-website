import { useState, useEffect } from 'react';
import { Background, HeaderSection, SearchSection, FilterSection, CardSection, FooterSection } from './style';
import Search from '../searchBar/index';
import { GenderDropdown, CreditCardTypeDropdown, PaymentOptionsDropdown } from '../filter/index';
import Navigation from '../navigation/index';
import Header from '../header/index';
import Card from '../card/index';

const Webpage = () => {
	const [ values, setItems ] = useState([]);
	const [ paginatedValues, setPaginatedValues ] = useState([]);

	const fetchFunction = async () => {
		const data = await fetch('https://api.enye.tech/v1/challenge/records');
		const results = await data.json();
		const value = results.records.profiles.slice(0, 100);

		setItems(() => [ ...value ]);
		setPaginatedValues(() => [ ...value.slice(0, 20) ]);
	};

	const handleSearch = (query) => {
		const search_detail = values.filter(
			(person) =>
				person.FirstName.toLowerCase().includes(query.toLowerCase()) ||
				person.LastName.toLowerCase().includes(query.toLowerCase())
		);

		setPaginatedValues(() => [ ...search_detail.slice(0, 20) ]);
	};

	const filterCreditCardType = (query) => {
		const credit_card_detail = values.filter((person) => person.CreditCardType.includes(query));
		setPaginatedValues(() => [ ...credit_card_detail.slice(0, 20) ]);
	};

	const creditCardType = values.map((person) => person.CreditCardType);
	const creditCardTypeValues = new Set(creditCardType);

	const genderType = values.map((person) => person.Gender);
	const genderValues = new Set(genderType)

	const paymentType = values.map((person) => person.PaymentMethod);
	const paymentValues = new Set(paymentType)

	const filterGender = (query) => {
		const gender_detail = values.filter((person) => person.Gender.includes(query));
		setPaginatedValues(() => [ ...gender_detail.slice(0, 20) ]);
	};

	const filterPaymentMethod = (query) => {
		const payment_method_detail = values.filter((person) => person.PaymentMethod.includes(query));
		setPaginatedValues(() => [ ...payment_method_detail.slice(0, 20) ]);
	};

	const [ currentPage, setPage ] = useState(1);

	const handlePagination = (type) => {
		if (type === 'next') {
			setPage(currentPage + 1);
			const start = (currentPage + 1) * 20 - 20;
			const stop = start + 20;
			const data = values.slice(start, stop);
			data.length > 0 ? setPaginatedValues(data) : setPage(currentPage);
		} else if (type === 'prev') {
			setPage(currentPage - 1);
			const start = currentPage - 1 === 0 ? 0 : (currentPage - 1) * 20 - 20;
			const stop = start + 20;
			const data = values.slice(start, stop);
			data.length > 0 ? setPaginatedValues(data) : setPage(currentPage);
		}
	};

	useEffect(() => {
		fetchFunction();
	}, []);

	return (
		<Background>
			<HeaderSection>
				<Header />
			</HeaderSection>
			<SearchSection>
				<Search onChange={(e) => handleSearch(e.target.value)} />
			</SearchSection>
			<FilterSection>
				<GenderDropdown onChange={(e) => filterGender(e.value)} genderValues={genderValues}/>
				<CreditCardTypeDropdown onChange={(e) => filterCreditCardType(e.value)} creditCardValues={creditCardTypeValues} />
				<PaymentOptionsDropdown onChange={(e) => filterPaymentMethod(e.value)} paymentValues={paymentValues}/>
			</FilterSection>
			<Navigation
				onClickLeftArrow={() => handlePagination('prev')}
				onClickRightArrow={() => handlePagination('next')}
			/>
			<CardSection>
				<Card paginatedValues={paginatedValues}> </Card>
			</CardSection>
			<FooterSection />
		</Background>
	);
};

export default Webpage;
