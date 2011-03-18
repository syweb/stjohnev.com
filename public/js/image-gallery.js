
// set the starting image.
var i = 0;			

// The array of div names which will hold the images.
var image_slide = new Array('image-1', 'image-2', 'image-3', 'image-4', 'image-5', 'image-6', 'image-7', 'image-8', 'image-9');

// The number of images in the array.
var NumOfImages = image_slide.length;

// The time to wait before moving to the next image. Set to 3 seconds by default.
var wait = 5000;

// The Fade Function
function SwapImage(x,y) {		
	$(image_slide[x]).appear({ duration: 1.5 });
	$(image_slide[y]).fade({duration: 1.5});
}

// the onload event handler that starts the fading.
function StartSlideShow() {
	play = setInterval('Play()',wait);
	$('PlayButton').hide();
	$('PauseButton').appear({ duration: 0});
								
}

function Play() {
	var imageShow, imageHide;

	imageShow = i+1;
	imageHide = i;
	
	if (imageShow == NumOfImages) {
		SwapImage(0,imageHide);	
		i = 0;					
	} else {
		SwapImage(imageShow,imageHide);			
		i++;
	}
}

function Stop () {
	clearInterval(play);				
	$('PlayButton').appear({ duration: 0});
	$('PauseButton').hide();
}

function GoNext() {
	clearInterval(play);
	$('PlayButton').appear({ duration: 0});
	$('PauseButton').hide();
	
	var imageShow, imageHide;

	imageShow = i+1;
	imageHide = i;
	
	if (imageShow == NumOfImages) {
		SwapImage(0,imageHide);	
		i = 0;					
	} else {
		SwapImage(imageShow,imageHide);			
		i++;
	}
}

function GoPrevious() {
	clearInterval(play);
	$('PlayButton').appear({ duration: 0});
	$('PauseButton').hide();

	var imageShow, imageHide;
				
	imageShow = i-1;
	imageHide = i;
	
	if (i == 0) {
		SwapImage(NumOfImages-1,imageHide);	
		i = NumOfImages-1;		
		
		//alert(NumOfImages-1 + ' and ' + imageHide + ' i=' + i)
					
	} else {
		SwapImage(imageShow,imageHide);			
		i--;
		
		//alert(imageShow + ' and ' + imageHide)
	}
}
