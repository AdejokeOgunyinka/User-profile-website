import { SearchStyle, SearchIcon, InputStyle } from './style';

const Search = ({onChange}) => {
	return (
		<SearchStyle>
			<SearchIcon />
			<InputStyle placeholder="Find user..." onChange={onChange}/>
		</SearchStyle>
	);
};

export default Search;
