const url = 'https://jsonplaceholder.typicode.com/users';
const rootNode = document.getElementById('root');
const catUrl = 'https://api.thecatapi.com/v1/images/search';

async function getUserList () {
    const request = await fetch(url)
    const data = await request.json();
    const users = data;

    for(let user of users) {
       const userDate = document.createElement('form');
       userDate.className = 'userDate';
       const labelId = getUserId(user);
       const labelName = getUserName(user);
       const labelUserName = getUserUserName(user);
       const labelUserEmail = addEmailField(user);
       const labelUserAddress = getUserAddress(user);
       const labelUserPhone = getUserPhone(user);
       const labelUserWebSite = getUserWebsite(user);
       const labelUserCompany = getUserCompany(user);
       const btn = document.createElement('button');
       btn.innerText = 'Submit';

       userDate.addEventListener('submit', (e) => {
        e.preventDefault();
        const updatedUser = {...user};
        [...userDate.elements].forEach(el => {
            if(el.tagName !== 'INPUT' || el.disabled || !el.name) return;
            updatedUser[el.name] = el.value;
        });
        userDate.classList.add('loading');
    

        fetch(`${url}/${user.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedUser)
        })
        .then(function () {
            userDate.classList.remove('loading');
        })
       })
       const editBtn = document.createElement('button');
       editBtn.innerText = 'Delete';
       editBtn.className = 'edit-btn';
       btn.className = 'btn';

       editBtn.addEventListener('click', (evt) => onDelete(userDate, user, evt))
 
       async function randomCat() {
        const request = await fetch(catUrl);
        const data = await request.json();
        return data[0].url;
       }
       const catImg = new Image();
       catImg.src = await randomCat();
       catImg.className = 'cat';

       const inputSpinner = document.createElement('div');
       inputSpinner.className = 'lds-ring'
       inputSpinner.innerHTML = '<div></div><div></div><div></div'

       userDate.append(catImg,labelId,labelName,labelUserName,labelUserEmail,
        labelUserAddress,labelUserPhone,labelUserWebSite,labelUserCompany,
        editBtn,btn,
        inputSpinner);
       rootNode.append(userDate);
    }
}
getUserList();



function onDelete(userDate, user, evt) {
    const formEl = evt.target.closest('.userDate');
    userDate.classList.add('loading');
    fetch(`${url}/${user.id}`, {
        method: "DELETE"
    })
    .then(() => {
        formEl.remove();
    })
}

function addEmailField(user) {
    const labelUserEmail = document.createElement('div')
    labelUserEmail.className = 'label-email';
    labelUserEmail.innerText = 'Email: ';
    const userEmail = document.createElement('input');
    userEmail.name = 'email';
    userEmail.className = 'input';
    userEmail.value = user.email;
    labelUserEmail.append(userEmail);

    return labelUserEmail;
}

function getUserCompany (user) {
    const labelUserCompany = document.createElement('div');
    labelUserCompany.className = 'label-company';
    labelUserCompany.innerText = 'Company: ';
    const userCompany = document.createElement('input');
    userCompany.className = 'input';
    userCompany.disabled = true;
    userCompany.value = user.company.name;
    labelUserCompany.append(userCompany);

    return labelUserCompany;
}

function getUserWebsite (user) {
    const labelUserWebSite = document.createElement('div');
    labelUserWebSite.className = 'label-website';
    labelUserWebSite.innerText = 'Website: ';
    const userWebsite = document.createElement('input');
    userWebsite.className = 'input';
    userWebsite.disabled = true;
    userWebsite.value = user.website;
    labelUserWebSite.append(userWebsite);

    return labelUserWebSite;
}

function getUserPhone (user) {
    const labelUserPhone = document.createElement('div');
    labelUserPhone.className = 'label-phone';
    labelUserPhone.innerText = 'Phone: ';
    const userPhone = document.createElement('input');
    userPhone.className = 'input';
    userPhone.disabled = true;
    userPhone.value= user.phone;
    labelUserPhone.append(userPhone);

    return labelUserPhone;
}

function getUserAddress (user) {
    const labelUserAddress = document.createElement('div');
    labelUserAddress.className = 'label-address';
    labelUserAddress.innerText = 'Address: ';
    const userAddres = document.createElement('input');
    userAddres.className = 'input';
    userAddres.name = 'userAddress';
    userAddres.disabled = true;
    userAddres.value = `${user.address.street}, ${user.address.suite}`;
    labelUserAddress.append(userAddres);

    return labelUserAddress;
}

function getUserUserName (user) {
    const labelUserName = document.createElement('div');
    labelUserName.className = 'label-username'
    labelUserName.innerText = 'UserName: '
    const userName = document.createElement('input');
    userName.className = 'input';
    userName.name = 'username';
    userName.value = user.username;
    labelUserName.append(userName);

    return labelUserName;
}

function getUserName (user) {
    const labelName = document.createElement('div');
    labelName.className = 'label-name'
    const name = document.createElement('input');
    name.className = 'input';
    name.value = user.name;
    name.name = 'name';
    labelName.innerText = 'Name: ';
    labelName.append(name);

    return labelName;
}

function getUserId (user) {
    const labelId = document.createElement('div');
    labelId.className = 'label-id';
    const userId = document.createElement('input');
    userId.className = 'input'
    userId.value = user.id
    userId.name = 'id';
    userId.disabled = true;
    labelId.innerText = 'Id: ';
    labelId.append(userId);

    return labelId;
}