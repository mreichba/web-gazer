function burgerClick() {
  let links = document.getElementById('links');
  if (links.className === 'links') {
    links.className += ' null';
  } else {
    links.className = 'links';
  }

}

document.addEventListener('DOMContentLoaded', burgerClick);