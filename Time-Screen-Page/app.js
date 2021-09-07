const time=document.querySelector("#time");
const greeting=document.querySelector("#greeting");
const name=document.querySelector("#name");
const focus=document.querySelector("#focus");

//output
const showAmPm='true';


//Set Time
function showTime() {
	let today= new Date();
	let hour=today.getHours();
	let mins=today.getMinutes();
	let sec=today.getSeconds();

	//set AM or PM
	const amPm = hour >= 12 ? 'PM' : 'AM';

	//12 hr format
	hour= hour % 12 || 12;

	time.innerHTML=`${hour}<span>:</span>${addZero(mins)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

	setTimeout(showTime,1000);
}

// add zero for min and sec
function addZero(n){
	return(parseInt(n,10) < 10 ? '0': '') + n;
}

// to set background
function addBackground(){
	let today = new Date();
	let hour=today.getHours();

	if(hour < 12){
		//morning
		document.body.style.background="url('./images/Morning.jpg')";
		greeting.textContent='Good Morning';

	}else if(hour < 18){
		//afternoon
		document.body.style.backgroundImage="url('./images/Afternoon.jpg)";
		greeting.textContent='Good Afternoon';
	}else{
		//night
		document.body.style.background="url('./images/Night.jpg')";
		greeting.textContent='Good Night';
		document.body.style.color='white';
	}
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
addBackground();
