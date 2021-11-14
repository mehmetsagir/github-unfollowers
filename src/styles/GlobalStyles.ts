import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
		--color-bg: #0E1117;
		--color-primary: #151922;
		--color-primary-hover: #191e26;
		--color-text: #f1f1f1;
		--color-text-secondary: #8b949e;
		--size: 1050px;
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
		background: var(--color-bg);
		color: var(--color-text);
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
	.btn {
		background: var(--color-primary);
    color: var(--color-text);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
    border-radius: 5px;
    cursor: pointer;
		white-space: nowrap;
    transition: 200ms;

    &:hover {
      background: var(--color-primary-hover);
    }
	}
	.layout-loader {
		width: var(--size);
		margin: 0 auto;
		display: flex;
		padding: 0 25px;

		.content {
			margin-left: 40px;
			padding: 30px 8px;
			flex: 1;
		}

		@media (max-width: 1050px) {
			width: 100%;
			flex-direction: column;
			padding: 0;
			.content {
				margin-left: 0;
				padding: 30px 0;
			}
		}
	}
`;

export default GlobalStyle;
