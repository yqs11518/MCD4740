function showForm(){
	document.getElementById('qs_form').style.display = 'block';
}

function hideForm(){
	document.getElementById('qs_form').style.display = 'none';
}


const form = document.getElementById('form_container');
const ent = document.getElementsByClassName('warning_enter');
const sub = document.getElementById('submit_btn');
const right = document.getElementsByClassName('rightContainer');
const inpu = document.getElementsByClassName('inpu_check');
const close = document.getElementById('close_btn');

const cls = document.getElementById("Class");
const tea = document.getElementById("Teacher");
const cor = document.getElementById("Course");

document.getElementById('click_qs_btn').addEventListener('click', function () {;
	form.reset();
	for(var i=0; i < ent.length; i++){
			ent[i].style.display = 'none';
	}
	for(var i = 0; i < right.length; i++){
		right[i].classList.remove('rightLess');
		right[i].classList.add('rightMore');
	}
  showForm();
});


close.addEventListener('click', function () {
	hideForm();
});
// cls.style.display = "block";
// tea.style.display = 'block';
// cor.style.display = 'block';
cls.focus();
tea.focus();
cor.focus();


// change the enter required display or not and change the position to avoid big change
sub.addEventListener('click', function () {
	var num = 0;
	for(var i=0; i < ent.length; i++){
		if(inpu[i].value.trim() === ""){
			ent[i].style.display = 'inline-block';
			
		}
		else{
			num ++;
			ent[i].style.display = 'none';
		}
		
	}
	if (num == ent.length){
		hideForm();
		/*form.addEventListener("submit", function(event){
			event.preventDefault();
		});*/
	}

	for(var i = 0; i < right.length; i++){
		const value_input = right[i].querySelector("input");
		if (value_input.value.trim() === ""){
			right[i].classList.remove('rightMore');
			right[i].classList.add('rightLess');
		}
		else{
			right[i].classList.remove('rightLess');
			right[i].classList.add('rightMore');
		}
	}
});