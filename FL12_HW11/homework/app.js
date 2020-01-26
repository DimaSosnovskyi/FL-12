const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function renderTree (struct,parent) {
  const childrenList = document.createElement('ul');
  childrenList.className = 'children';
  struct.forEach(function (el) {
    const childEl = document.createElement('li');
    const domEl = document.createElement('div');
    if(!el.folder) {
      domEl.className = 'file';
      domEl.innerText = el.title;
    } else {
      domEl.className = 'folder';
      const titleEl = document.createElement('span');
      titleEl.innerText = el.title;
      titleEl.className = 'folder-title';
      domEl.append(titleEl);
      if (el.children) {
        renderTree(el.children, domEl);
      } else {
        const labelEl = document.createElement('p');
        labelEl.className = 'folder-label';
        labelEl.innerText = 'folder is empty';
        domEl.append(labelEl);
      }
    }
    childEl.append(domEl);
    childrenList.append(childEl);
  });
  parent.append(childrenList);
}
renderTree(structure,rootNode);
let renderTitle = document.querySelectorAll('.folder-title');
let getFile = document.querySelectorAll('.file');
let getLabel = document.querySelectorAll('.folder-label');
for(let i = 0; i < renderTitle.length; i++) {
    renderTitle[i].addEventListener('click',function () {
    getFile[i].style.display = 'block';
    getLabel[i].style.display = 'block';
  })
  getFile[i].addEventListener('click',function() {
    getFile[i].style.display = 'none';
  })
  getLabel[i].addEventListener('click',function () {
    getLabel[i].style.display = 'none';
  })
}

   
