const displayResults = (data) => {
  if (!data) return 'No Data!';
  // const { results } = data;
  // const [ profile ] = results;
  // const { title, first, last } = profile.name;
  document.getElementById('results').innerHTML = `${data}`;
  // document.getElementById('image').setAttribute('src', profile.picture.large);
  // clearNotice();

  // displayExtraUserInfo(profile);
};

const getAPI = () => {
  console.log('Now in Get API');
  const api = 'https://api.pexels.com/v1/search?query=example+query&per_page=15&page=1';
  fetch(api)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    displayResults(data);
  })

};

const startApp = () => {
  console.log('Now in Start App');
  getAPI();
};

startApp();
