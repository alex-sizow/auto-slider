let slideImages = document.querySelectorAll(
	'.slides__item',
) as HTMLDivElement | any;

let next = document.querySelector(
	'.buttons__next',
) as HTMLSpanElement;
let prev = document.querySelector(
	'.buttons__prev',
) as HTMLSpanElement;

let dots = document.querySelectorAll('.dots__item');

let counter = 0;

next.addEventListener('click', slideNext);
export function slideNext() {
	slideImages[counter].style.animation =
		'next1 0.5s ease-in forwards';
	if (counter >= slideImages.length - 1) {
		counter = counter;
	} else {
		counter++;
	}
	slideImages[counter].style.animation =
		'next2 0.5s ease-in forwards';
	indicators();
}

prev.addEventListener('click', slidePrev);
export function slidePrev() {
	slideImages[counter].style.animation =
		'prev1 0.5s ease-in forwards';
	if (counter == 0) {
		counter = slideImages.length - 1;
	} else {
		counter--;
	}
	slideImages[counter].style.animation =
		'prev2 0.5s ease-in forwards';
	indicators();
}

// Auto slideing

function timer() {
	slideNext();
	indicators();
}

const deleteInterval = setInterval(timer, 2500);
timer();

const container = document.querySelector(
	'.slider-container',
) as HTMLDivElement;
container.addEventListener('mouseover', function () {
	clearInterval(deleteInterval);
});

function indicators() {
	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(
			' active',
			'',
		);
		dots[counter].className += ' active';
	}
}
