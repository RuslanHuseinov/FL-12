let m_min_length = 5 ;
let p_min_length = 6;
let mail_password , mail_value , verification , verification_2 , new_mail_password;
let user_mail = prompt('Enter email');
if (!user_mail){
    alert('Canceled');
} else if ( user_mail.length < m_min_length ) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if( user_mail === 'user@gmail.com'){
    mail_password = prompt('enter password');
    mail_value = 'user';
    verification = true;
}else if( user_mail ==='admin@gmail.com' ){
    mail_password = prompt('enter password');
    mail_value = 'admin';
    verification = true;
}else{
    alert('I don’t know you');
}
if (verification){
    if ( !mail_password ){
        alert('Canceled');
    }else if ( mail_value === 'user' && mail_password === 'UserPass' 
    || mail_value === 'admin' && mail_password === 'AdminPass' ){
        alert('correct password');
        verification_2 = true;
    }else{
        alert('Wrong password');
    }
}
if (verification_2){
    let change_password = confirm('Do you want to change your password?');
    if ( !change_password ){
        alert('You have failed the change');
    }else{
        mail_password = prompt('enter password');
         if ( mail_value === 'user' && mail_password === 'UserPass' 
         || mail_value === 'admin' && mail_password === 'AdminPass' ){
            new_mail_password = prompt('enter new password');
            if ( !new_mail_password ){
                alert('Canceled');
            }else if( new_mail_password.length < p_min_length ){
                alert('It\'s too short password. Sorry');
            }else{
            let new_mail_password_2 = prompt('enter new password again');
            alert(new_mail_password === new_mail_password_2 ?
                'You have successfully changed your password.' : 'You wrote the wrong password.');
            }
        }
    }
}
