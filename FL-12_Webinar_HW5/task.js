const url = 'https://jsonplaceholder.typicode.com/users';
const rootNode = document.getElementById('root');

async function getUserList () {
    const request = await fetch(url)
    const data = await request.json();
    const users = data;
    console.log(data)
    users.forEach(user => {
        // const domEl = document.createElement('form');
        // domEl.className = 'main';
        // const domLabel = document.createElement('div');
        // domLabel.className = 'main__label';
        // if(user.id) {
        //     const userId = document.createElement('input');
        //     userId.value = user.id;
        //     domLabel.innerText = 'Id: ';
        //     domLabel.append(userId);
        // }
        // if(user.name) {
        //     const name = document.createElement('input');
        //     name.value = user.name;
        //     domLabel.innerText = 'Name: ';
        //     domLabel.append(name);
            
        // }
        // domEl.append(domLabel);
        // rootNode.append(domEl);
       const userDate = document.createElement('form');
       userDate.className = 'userDate';

       const labelId = document.createElement('div');
       const userId = document.createElement('input');
       userId.className = 'input'
       userId.value = user.id
       labelId.innerText = 'Id: ';
       labelId.append(userId);
    
       const labelName = document.createElement('div');
       labelName.className = 'label-name'
       const name = document.createElement('input');
       name.className = 'input';
       name.value = user.name;
       labelName.innerText = 'Name: ';
       labelName.append(name);
    
       const labelUserName = document.createElement('div');
       labelUserName.className = 'label-username'
       labelUserName.innerText = 'UserName: '
       const userName = document.createElement('input');
       userName.className = 'input';
       userName.value = user.username;
       labelUserName.append(userName);

       const labelUserEmail = document.createElement('div')
       labelUserEmail.className = 'label-email';
       labelUserEmail.innerText = 'Email: ';
       const userEmail = document.createElement('input');
       userEmail.className = 'input';
       userEmail.value = user.email;
       labelUserEmail.append(userEmail);

       const labelUserAddress = document.createElement('div');
       labelUserAddress.className = 'label-address';
       labelUserAddress.innerText = 'Address: ';
       const userAddres = document.createElement('input');
       userAddres.className = 'input';
       userAddres.value = `${user.address.street}, ${user.address.suite}`;
       labelUserAddress.append(userAddres);

       const labelUserPhone = document.createElement('div');
       labelUserPhone.className = 'label-phone';
       labelUserPhone.innerText = 'Phone: ';
       const userPhone = document.createElement('input');
       userPhone.className = 'input';
       userPhone.value= user.phone;
       labelUserPhone.append(userPhone);

       const labelUserWebSite = document.createElement('div');
       labelUserWebSite.className = 'label-website';
       labelUserWebSite.innerText = 'Website: ';
       const userWebsite = document.createElement('input');
       userWebsite.className = 'input';
       userWebsite.value = user.website;
       labelUserWebSite.append(userWebsite);

       const labelUserCompany = document.createElement('div');
       labelUserCompany.className = 'label-company';
       labelUserCompany.innerText = 'Company: ';
       const userCompany = document.createElement('input');
       userCompany.className = 'input';
       userCompany.value = user.company.name;
       labelUserCompany.append(userCompany);

       const btn = document.createElement('button');
       btn.innerText = 'Submit';
       const editBtn = document.createElement('button');
       editBtn.innerText = 'Edit';
       editBtn.className = 'edit-btn';
       btn.className = 'btn';
       userDate.append(labelId,labelName,labelUserName,labelUserEmail,labelUserAddress,labelUserPhone,labelUserWebSite,labelUserCompany,editBtn,btn);
       rootNode.append(userDate);
    })
}
getUserList();

