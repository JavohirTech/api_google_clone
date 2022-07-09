let searching = document.getElementById('searching');
let qidircha = document.getElementById('qidircha');
let main = document.getElementById('main');
let main_container = document.getElementById('main_container');

searching.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    window.location.href = './qidiruv.html'
    console.log(window.location.href);
    console.log(searching.value);
    const options = {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Key': 'fa0e9a1af1msh1fd4bb1f83079ecp129504jsn0f8369740676',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
      }
    };
    fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${searching.value}`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response.results)
        response
          .results
          .forEach(item => {
            const html = `<div
id="main_con_mini">             <a href="#"
id="mini_url">${item.cite.domain}</a>             <h3 id="mini_title"><a
href="${item.link}">${item.title}</a></h3>             <p
id="mini_description">${item.description}</p>         </div>`
            main_container.innerHTML += html
          })
      })
      .catch(err => console.error(err));
  }
})

qidircha.addEventListener('click', () => {

  console.log(searching.value);
  const options = {
    method: 'GET',
    headers: {
      'X-User-Agent': 'desktop',
      'X-Proxy-Location': 'EU',
      'X-RapidAPI-Key': 'fa0e9a1af1msh1fd4bb1f83079ecp129504jsn0f8369740676',
      'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
    }
  };

  fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${searching.value}`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response.results)
      response
        .results
        .forEach(item => {
          const html = `<div id="main_con_mini">
                <a href="#" id="mini_url">${item.cite.domain}</a>
                <h3 id="mini_title"><a href="${item.link}">${item.title}</a></h3>
                <p id="mini_description">${item.description}</p>
            </div>`
          main_container.innerHTML += html
        })
    })
    .catch(err => console.error(err));
})
