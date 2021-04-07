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
		const data = await fetch('https://randomuser.me/api/?results=200'); //https://api.enye.tech/v1/challenge/records
		const results = await data.json();
		const value = results.results.slice(0, 100);

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

	const creditCard = values.map((person) => person.CreditCardType);
	const creditCardTypeValues = new Set(creditCard);

	const genderType = values.map((person) => person.Gender);
	const genderValues = new Set(genderType);

	const paymentType = values.map((person) => person.PaymentMethod);
	const paymentValues = new Set(paymentType);

	const [ filterData, setFilterData ] = useState({ Gender: '', CreditCardType: '', PaymentMethod: '' });

	const filterCreditCardType = (query) => {
		const newFilter = { ...filterData, CreditCardType: query };
		setFilterData((prev) => ({ ...prev, CreditCardType: query }));
		generalFilter(newFilter);
	};

	const filterGender = (query) => {
		const newFilter = { ...filterData, Gender: query };
		setFilterData((prev) => ({ ...prev, Gender: query }));
		generalFilter(newFilter);
	};

	const filterPaymentMethod = (query) => {
		const newFilter = { ...filterData, PaymentMethod: query };
		setFilterData((prev) => ({ ...prev, PaymentMethod: query }));

		generalFilter(newFilter);
	};

	const generalFilter = (filterData) => {		
		const keys = Object.keys(filterData);
		let filtering = [];
		keys.map((key) => {
			if (filterData[key] !== '') {
				if (filtering.length > 0) {
					filtering = [ ...filtering.filter((value) => value[key] === filterData[key]) ];
				} else {
					filtering = [ ...values.filter((value) => value[key] === filterData[key]) ];
				}
			}
			return filtering;
		});
		setPaginatedValues(() => [ ...filtering ]);
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
				<GenderDropdown onChange={(e) => filterGender(e.value)} genderValues={genderValues} />
				<CreditCardTypeDropdown
					onChange={(e) => filterCreditCardType(e.value)}
					creditCardValues={creditCardTypeValues}
				/>
				<PaymentOptionsDropdown onChange={(e) => filterPaymentMethod(e.value)} paymentValues={paymentValues} />
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
