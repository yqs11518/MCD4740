function showForm(){
	document.getElementById('qs_form').style.display = 'block';
}

function hideForm(){
	document.getElementById('qs_form').style.display = 'none';
}

document.getElementById('click_qs_btn').addEventListener('click', function () {
  showForm();
});

document.getElementById('close_form').addEventListener('click', function () {
  hideForm();
});