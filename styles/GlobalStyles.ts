import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font: inherit;
		color: inherit;
		outline: 0;
	}
	html, body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 14px;
	}
	a {
		text-decoration: none;
	}
	ul {
		list-style: none;
	}
	button {
		background: none;
		border: none;
	}
`;

export default GlobalStyle;