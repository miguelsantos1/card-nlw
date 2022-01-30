const linksSocialMedia = {
  github: 'miguelsantos1',
  youtube: 'UC_zIplc9EgMNz4xNJyACw8Q',
  twitter: 'miguelo03164369',
  instagram: 'mgy1kk',
  facebook: ''
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url).then(response => response.json()) //Getting information of github and changing for json
  .then(data => { 
    userPhotoGithub.src = data.avatar_url 
    userNameGithub.textContent = data.name
    userLinkGithub.href = data.html_url
    userLoginGithub.textContent = data.login
    userBioGithub.textContent = data.bio
  }) 
}

// Calling functions
changeSocialMediaLinks();
getGithubProfileInfos();
