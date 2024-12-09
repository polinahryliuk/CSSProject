document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const recipeId = document.getElementById('titleInput').value;
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '55c43d64ebmsh053777ce6bdcb3ap1a14cejsnd927789d6759', 
            'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com' 
        }
    };
    fetch(`https://the-vegan-recipes-db.p.rapidapi.com/${recipeId}`, options)
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data);
            const recipeCard = `
            <div class="card">
                <h1 class="title">${data.title}</h1>
                <img src="${data.image}" alt="img" class="images">
                <p class="description">${data.description}</p>
                <p class="level">Difficulty: ${data.difficulty}</p>
                <p class="portion">Portion: ${data.portion}</p>
                <p class="time">Time: ${data.time}</p>
            </div>
        `;
        document.getElementById('cards').innerHTML = recipeCard;
        })
        .catch(error => {
            console.error;
        });
});