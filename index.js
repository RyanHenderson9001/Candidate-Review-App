
let url='';
function getDogImage(searchTerm) {
  fetch(makeRepoSearch(searchTerm))
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}
function makeRepoSearch(searchTerm){
  const githubLink = 'https://api.github.com/users/';
  const repos ='/repos';
  url = `${githubLink}${searchTerm}${repos}`;
  console.log(url);
  return `${url}`;
}
function displayResults(responseJson) {
  console.log(responseJson);
  $('.query').html(templateResults(responseJson));
  $('.results').removeClass('hidden');
}
//display all repos name and url
function templateResults(repo){
  let html = '';
  for(let i=0;i<repo.length;i++){
    html +=`${i}.Repository name:${repo[i].name} 
    Repository url:${repo[i].html_url}`;
  }
  return html;
}
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    getDogImage(searchTerm);
    $('#js-search-term').val('');
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});