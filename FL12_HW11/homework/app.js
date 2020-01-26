const structure = [
  {
    folder: true,
    title: 'Films',
    children: [
      {
        title: 'Iron Man.avi'
      },
      {
        folder: true,
        title: 'Fantasy',
        children: [
          {
            title: 'The Lord of the Rings.avi'
          },
          {
            folder: true,
            title: 'New folder 1',
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Documents',
    children: [
      {
        folder: true,
        title: 'EPAM Homework answers',
        children: null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here
const folderTemplate = `<h3><i class='material-icons'>folder</i>$title</h3>
<div class='content'></div>`;

class Tree {
  constructor(data, rootNode) {
    data.forEach(e => {
      rootNode.appendChild(new FolderElement(e).getDomNode);
    });
  }
}

class FolderElement {
  constructor(data) {
    const isFolder = data.folder;

    this.node = isFolder
      ? this.createFolder(data.title)
      : this.createElement(data.title);
    
    if (isFolder) {
      this.node.querySelector('h3')
        .addEventListener('click', this.toggle.bind(this));
    }

    this.open = false;
    this.data = data;
    this.children = data.children;
  }

  createFolder(title) {
    let node = document.createElement('div');
    node.classList.add('folder');
    node.innerHTML = folderTemplate.replace('$title', title);
    this.contentNode = node.getElementsByClassName('content')[0];

    return node;
  }

  createElement(title) {
    let node = document.createElement('div');
    node.classList.add('elem');
    node.innerHTML = title;
    return node;
  }

  toggle(event) {
    event.stopPropagation();

    if (!this.data.folder) {
      return;
    }

    if (this.open) {
      this.open = false;
      this.contentNode.classList.add('hidden');
      return;
    }

    if (this.contentRendered) {
      this.contentNode.classList.remove('hidden');
      this.open = true;
      return;
    }

    if (this.data.folder && !this.children) {
      this.contentNode.innerHTML = 'Empty folder';
      this.open = true;
      this.contentRendered = true;
      return;
    }

    this.contentRendered = true;
    return new Tree(this.children, this.contentNode);
  }

  get getDomNode() {
    return this.node;
  }
}

let tree = new Tree(structure, rootNode);
