
  var names = [];
  for (var i = 0; i < 5; i++) {
     names[i] = prompt('Имя №' + (i+1) + ' из списка')
  }

  var user = prompt('Введите имя пользователя');
  if (userCheck(user, names) == 0) {alert ('Ошибка. Данного пользователя не существует')}
  else {alert ('Вы успешно вошли, ' + userCheck(user, names))}

  function userCheck(login, arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
    	if (login == arr[i]) {
    	  result = arr[i];
    	}
    }
  return result
  }  

  if (userCheck(user, names) == 0) {alert ('Ошибка. Данного пользователя не существует')}
  	else {alert ('Вы успешно вошли, ' + userCheck(user, names))}
  	


      



