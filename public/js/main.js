let nextButton = document.getElementById('next');
nextButton.addEventListener('click', ()=>{getAPI()});

const displayResults = (photos, next_page) => {
  if (!photos) return 'No Data!';
  let html = '';
  photos.forEach((photo) => {
    html += `
    <div class="photos">
      <a href="${photo.src.large}" target="_blank"><img id="image" src="${photo.src.tiny}" /></a>
      <a href="${photo.photographer_url}" target="_blank">${photo.photographer}</a>
    </div>
    `;
  });
  document.getElementById('next').setAttribute('data', next_page);
  document.getElementById('results').innerHTML = html;
};

const getAPI = () => {
  const token = '563492ad6f917000010000016f06e2565d114060b4760bee31fd4d4e';
  let api = nextButton.getAttribute('data');
  fetch(api, {
    headers: {
      Authorization: token
    }
  })
  .then((res) => res.json())
  .then((data) => {
    const { photos, next_page } = data;
    displayResults(photos, next_page);
  })
};
