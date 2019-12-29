let email = prompt('Enter the email');
let emails = [
    'user@gmail.com',
    'admin@gmail.com'
]
let password;
let passwords = [
    'UserPass',
    'AdminPass'
];
let wrongPassword;
let newPassword;
let newPasswordSecond;


for ( let i = 0; i < emails.length; i++) {
    if (email === "" || email === null) {
        alert('Cancaled')
        break;
    } else if (email.length <= 5) {
        alert('I dont know any emails having name length less than 5 symbols');
        break;
    } else if (email === emails[i]) {
        password = prompt('Enter a password');
        if (password === '' || password === null) {
            alert('canceled');
            break;
        } else if (password !== passwords[i]) {
            alert('Wrong password');
            wrongPassword = confirm('Do you want to change your password');
            if (wrongPassword === false) {
                alert('You have failed the chance');
            } else if (wrongPassword === true) {
                password = prompt('Enter your old password');
                if (password === '' || password === null) {
                    alert('Canceled');
                    break;
                } else if (password !== passwords[i]) {
                    alert('Wrong password');
                } else {
                    newPassword = prompt('Enter the new password');
                    if (newPassword === '' || newPassword === null) {
                        alert('Canceled');
                        break;
                    } else if (newPassword.length <= 6) {
                        alert('Its too short password sorry');
                        break;
                    } else {
                        newPasswordSecond = prompt('Enter new password again');
                        if (newPasswordSecond !== newPassword) {
                            alert('you wrote the wrong password');
                        } else if(newPasswordSecond === newPassword) {
                            alert('You have succsessfully changed your');
                            break;
                        }
                    }
                }
            }
        }
    } else {
        if (email !== emails[i+1]) {
            alert('I dont know you');
            break;
        }
    }
}