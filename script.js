* {
	box-sizing: border-box;
}

@font-face {
	font-family: Rob;
	src: url("./RobotoMono.ttf") format('truetype');
    	font-weight: normal;
    	font-style: normal;
}

body, html {

	font-family: Rob, serif;
	background-color: #ccc;
}

.bdy {
	display: flex;
	flex-direction: column;
	text-align: center;
	color: #198cff;
}

#headline {
	font-size: 72px;
}

#element-view {
	display: flex;
	justify-content: center;
	font-size: 40px;
}


hr {
	width: 50%;
	text-align: center;
}

.countdown {
	display: flex;
	flex-direction: row;
	font-size: 60px;
	margin: 10px;

	justify-content: space-evenly;
}

.circles {
	display: flex;
	justify-content: space-around;
	padding: 0 0 100px 0;
}

.cd-el {
	position: absolute;
	transform: translateY(110px);
	font-size: 2rem;
}

.circle-rel {
	position: relative;
	display: flex;
	justify-content: center;
}

.wrapper {
	width: 100px;
	height: 100px;
	position: absolute;
	clip: rect(0px, 100px, 100px, 50px);
}

.circle {
	width: 100px;
	height: 100px;

	border: 5px solid #198cff;
	border-radius: 50px;

	position: absolute;
	clip: rect(0px, 50px, 100px, 0px);
}
