import {
	CardStyle,
	CardContainer,
	ContentStyle,
	GenderIcon,
	EmailIcon,
	PhoneIcon,
	CardIcon,
	PaymentIcon,
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
                            {result.FirstName}
                        </Text>
                        <Text>
                            {result.LastName}
                        </Text>
                    </ContentStyle>
                    <ContentStyle>
                        <Text><GenderIcon/></Text>
                        <Text>{result.Gender}</Text>
                    </ContentStyle>
                    <ContentStyle>
                        <Text><EmailIcon/> </Text>
                        <Text>{result.Email}</Text>
                    </ContentStyle>
                    <ContentStyle>
                        <Text><PhoneIcon/></Text>
                        <Text>{result.PhoneNumber}</Text>
                    </ContentStyle>
                    <ContentStyle>
                        <Text><CardIcon/></Text>
                        <Text>{result.CreditCardNumber}</Text>
                        <Text>{result.CreditCardType}</Text>
                    </ContentStyle>
                    <ContentStyle>
                        <PaymentIcon/>
                        <Text>{result.PaymentMethod}</Text>
                    </ContentStyle>
				</CardContainer>
			))}
		</CardStyle>
	);
};

export default Card;
