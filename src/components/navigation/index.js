import { NavigationStyle, LeftArrow, LeftArrowStyle, RightArrow, RightArrowStyle } from './style';

const Navigation = ({onClickLeftArrow, onClickRightArrow}) => {
	return (
		<NavigationStyle>
			<LeftArrowStyle onClick={onClickLeftArrow}>
				<LeftArrow />
			</LeftArrowStyle>
			<RightArrowStyle onClick={onClickRightArrow}>
				<RightArrow/>
			</RightArrowStyle>
		</NavigationStyle>
	);
};

export default Navigation;
