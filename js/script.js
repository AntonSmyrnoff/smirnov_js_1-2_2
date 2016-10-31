
  var names = [];
    for (var i = 0; i < 5; i++) {
      names[i] = prompt('Имя №' + (i+1) + ' из списка')
    }
  var user = prompt('Введите имя пользователя');

  function userCheck (login) 
  {
    
    var result = 0;
    for (var i = 0; i < 5; i++) 
      {
    	if (login == names[i]) 
    	{
    	  result = names[i];
    	}

      }

      return result
  }  

  if (userCheck(user) == 0) {alert ('Ошибка. Данного пользователя не существует')}
  	else {alert ('Вы успешно вошли, ' + userCheck(user))}
  	


      



