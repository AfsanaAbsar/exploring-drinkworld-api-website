const searchDrink = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    //clear input
    searchInput.value = "";

    if (searchText == "") {
        console.log('mmmm');
    }

    else {
        //load api

        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => showDrinkResult(data.drinks))
    }
}


const showDrinkResult = drinks => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = "";
    drinks.forEach(drink => {
        console.log(drink);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
      <div class="card h-100 bg-light">
         <img src="${drink.strDrinkThumb}" class="card-img-top img-fluid p-5" alt="...">
           <div class="card-body text-center">
             <h3 class="card-title title">${drink.strDrink}</h3>
            <h6 >${drink.strAlcoholic}</h6>
            <h5 class="title">Ingredients:</h5>
            <p>${drink.strIngredient1}</p>
            <p>${drink.strIngredient2}</p>
            <p>${drink.strIngredient3}</p>
            <h5 class="title">Instructions:</h5>
            <p>${drink.strInstructions}</p>
            
           </div>
      </div>
   `

        searchResult.appendChild(div)

    });
}