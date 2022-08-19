pwd = document.getElementById('pwd');
pwd_confirm = document.getElementById('pwd-confirm');

const password_match_function = () => {
  if(pwd.value == pwd_confirm.value) {
    pwd.setCustomValidity('');
    pwd_confirm.setCustomValidity('');
    document.querySelector('.pwd-mismatch-error').style.display = 'none';
  }
  else {
    pwd.setCustomValidity('Password doesnt match');
    pwd_confirm.setCustomValidity('Password doesnt match');
    document.querySelector('.pwd-mismatch-error').style.display = 'block';
  }
}

pwd.addEventListener('input', password_match_function);
pwd_confirm.addEventListener('input', password_match_function);


