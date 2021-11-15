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
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 100vh;

		svg {
			width: 120px;
			height: 120px;
			fill: rgba(255, 255, 255, 0.3);
			animation: opacity 500ms ease-in-out forwards;
		}
		span {
			display: block;
			margin-top: 25px;
			color: rgba(255, 255, 255, 0.3);
			font-size: 28px;
			font-weight: bolder;
			animation: opacity 500ms ease-in-out forwards;
		}

		@keyframes opacity {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}

		@media (max-width: 500px) {
			svg {
				width: 80px;
				height: 80px;
			}
			span {
				font-size: 20px;
			}
		}
	}
`;

export default GlobalStyle;
