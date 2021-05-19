canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

nasa_img=['mars 0.jpg', 'Mars 1.jpg','mars 2.jpg','Mars 3.jpg'];
random_no=Math.floor(Math.random()*4);
r_height=100;
r_width=90;

r_xpos = 10;
r_ypos = 10;

r_image = "rover.png";
b_image = nasa_img[random_no];

function add()
{
	bg = new Image();
	bg.onload = uploadBackground;
	bg.src= b_image;

	r = new Image();
	r.onload = uploadrover;
	r.src= r_image;
}

function uploadBackground()
{
	ctx.drawImage(bg, 0 , 0, canvas.width , canvas.height);
}
function uploadrover()
{
	ctx.drawImage(r, r_xpos , r_ypos, r_width , r_height);
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;

	if(keyPressed== '37')
	{
		console.log("left");
		left();
	}
	
	else if(keyPressed=='38')
	{
		up();
	}

	else if(keyPressed=='39')
	{
		right();
	}
	else if(keyPressed=='40')
	{
		down();
	}
}

function up()
{
	if(r_ypos>=0)
	{
      r_ypos=r_ypos-10;
      uploadBackground();
	  uploadrover();
	}
}

function left()
{
	if(r_xpos>=0)
	{
      r_xpos=r_xpos-10;
      uploadBackground();
	  uploadrover();
	}
}

function right()
{
	if(r_xpos<=700)
	{
      r_xpos=r_xpos+10;
      uploadBackground();
	  uploadrover();
	}
}

function down()
{
	if(r_ypos<=500)
	{
      r_ypos=r_ypos+10;
      uploadBackground();
	  uploadrover();
	}
}