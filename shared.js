var backdrop = document.querySelector('.backdrop');
var modal=document.querySelector('.modal');
var buttons=document.querySelectorAll('.plan button');
var nobutton=document.querySelector('.modal__action--negative')
var mobilenav=document.querySelector('.mobile-nav')
var togglebutton=document.querySelector('.toggle-button')
var ctabutton=document.querySelector('.main-nav__item--cta')
for(var i=0;i<buttons.length;i++)
	{
		buttons[i].addEventListener('click',function(){
		modal.classList.add('open');
		backdrop.classList.add('open');
		});
	}

console.log(backdrop);
backdrop.addEventListener('click',function(){
	mobilenav.classList.remove('open');
	closemodal();
});
if(nobutton){
	nobutton.addEventListener('click',closemodal);
}


function closemodal(){
	if(modal){
		modal.classList.remove('open');
	}
	backdrop.classList.remove('open');
}

togglebutton.addEventListener('click',function(){
	backdrop.classList.add('open');
	mobilenav.classList.add('open');

})

