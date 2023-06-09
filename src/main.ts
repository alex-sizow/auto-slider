import './style.scss';
const options: any = {
	delay: 2500,

	root: '#slider',

	width: 750,

	height: 400,

	slides: [
		{
			color: '#c62828',
			text: 'RED',
		},
		{
			color: '#ad1457',
			text: 'PINK',
		},
		{
			color: '#6a1b9a',
			text: 'PURPLE',
		},
		{
			color: '#4527a0',
			text: 'DEEP_PURPLE',
		},
		{
			color: '#283593',
			text: 'INDIGO',
		},
		{
			color: '#1565c0',
			text: 'BLUE',
		},
		{
			color: '#0277bd',
			text: 'LIGHT_BLUE',
		},
		{
			color: '#00838f',
			text: 'CYAN',
		},
		{
			color: '#00695c',
			text: 'TEAL',
		},
		{
			color: '#2e7d32',
			text: 'GREEN',
		},
		{
			color: '#558b2f',
			text: 'LIGHT_GREEN',
		},
		{
			color: '#827717',
			text: 'LIME',
		},
		{
			color: '#ef6c00',
			text: 'ORANGE',
		},
		{
			color: '#d84315',
			text: 'DEEP_ORANGE',
		},
		{
			color: '#4e342e',
			text: 'BROWN',
		},
	],
};

let counter = '';
for (let i = 0; i < options.slides.length; i++) {
	counter += `<div
					class="slides__item"
					style="background-color: ${options.slides[i].color}"><div class="slides__item_text">${options.slides[i].text}</div></div>`;
}

const element =
	document.querySelector<HTMLDivElement>('#slides');

element!.style.width = `${options.width}px`;
element!.style.height = `${options.height}px`;

element!.innerHTML = `
  ${counter}
`;
