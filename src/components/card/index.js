import {
	CardStyle,
	CardContainer,
	ContentStyle,
	GenderIcon,
	EmailIcon,
	PhoneIcon,
	// CardIcon,
	// PaymentIcon,
	Text
} from './style';

const Card = ({ children, paginatedValues }) => {
	return (
		<CardStyle>
			{paginatedValues.map((result) => (
				<CardContainer key={result.UserName}>
					{' '}
					{children}
                    <ContentStyle>
                        <Text>
                            {result.name.title}
                        </Text>
                        <Text>
                            {result.name.first}
                        </Text>
                        <Text>
                            {result.name.last}
                        </Text>
                    </ContentStyle>
                    <ContentStyle>
                        <Text><GenderIcon/></Text>
                        <Text>{result.gender}</Text>
                    </ContentStyle>
                    <ContentStyle>
                        <Text><EmailIcon/> </Text>
                        <Text>{result.email}</Text>
                    </ContentStyle>
                    <ContentStyle>
                        <Text><PhoneIcon/></Text>
                        <Text>{result.phone}</Text>
                    </ContentStyle>
                    {/* <ContentStyle>
                        <Text><CardIcon/></Text>
                        <Text>{result.CreditCardNumber}</Text>
                        <Text>{result.CreditCardType}</Text>
                    </ContentStyle>
                    <ContentStyle>
                        <PaymentIcon/>
                        <Text>{result.PaymentMethod}</Text>
                    </ContentStyle> */}
				</CardContainer>
			))}
		</CardStyle>
	);
};

export default Card;
