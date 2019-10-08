window.addEventListener("load", event => {
	console.log("loaded");
	main();
});




const main = event => {
	
	console.log("MAIN");
	
    //let component = new MyComponent("dummy");

    let image1 = new Image();
    let image2 = new Image();
    
    let canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height= 1000;
    document.body.appendChild(canvas);
    let context = canvas.getContext("2d");
    

    image1.onload = function() {
	context.drawImage(image1,0,0);
    }
    image1.src="img1.jpg";

    canvas.addEventListener("click",function (event) {
	let coordX = event.clientX;
	let coordY = event.clientY;
	image2.onload = function() {
	context.drawImage(image2,coordX,coordY);
    }
	image2.src="img2.jpg";
    });
    
}

