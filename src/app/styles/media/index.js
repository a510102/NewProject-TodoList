import { css } from 'styled-components';

const size = {
	small: 765,
	medium: 1366,
	large: 1960
};

const media = (Object.keys(size)).reduce(
	(acc, label) => {
		acc[label] = (first, ...interpolations) => css`
			@media (min-width: ${size[label]}px) {
				${css(first, ...interpolations)}
			}
		`;
		return acc
	},
	{}
);

/* Example
const SomeDiv = styled.div`
  display: flex;
  ....
  ${media.medium`
    display: block
  `}
`;
*/

export default media;