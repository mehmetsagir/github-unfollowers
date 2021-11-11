import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
		--bg-color: #0E1117;
		--primary-color: #151922;
		--primary-hover-color: #191e26;
		--text-color: #f1f1f1;
	}
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
		height: 100%;
	}
	#__next {
		height: 100%;
	} 
	body {
		background: var(--bg-color);
		color: var(--text-color);
		height: 100%;
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
