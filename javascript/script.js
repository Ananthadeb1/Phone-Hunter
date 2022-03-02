const searchFood = () => {
  const searchfield = document.getElementById('search-field')
  const searchText = searchfield.value;
  // console.log(searchText)
  searchfield.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  fetch(url)
      .then(res => res.json())
      .then(result => dispaySearchResult(result.data))
}
const dispaySearchResult = data => {
  const searchresult = document.getElementById('search-result')
  data.forEach(phone => {
      // console.log(meal);
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
      <div onclick="loadDetail('${phone.slug}')" class="card">
              <img src="${phone.image}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  // <p class="card-text">phone details
                  <br>(see more)...</p>
              </div>
          </div>
      `
      searchresult.appendChild(div);

  });
}
const loadDetail = phoneID => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneID}`
  fetch(url)
      .then(res => res.json())
      .then(data => displyDetail((data)));

}
const displyDetail = phone => {
  const mealDetails = document.getElementById('meal-details');
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text"></p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
    <img src="${phone.image}" class="card-img-bottom" alt="...">
  </div>
  `
  mealDetails.appendChild(div);
}