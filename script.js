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
changeSocialMediaLinks();