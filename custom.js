

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com',
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
        }
    };
    
    fetch('https://trueway-places.p.rapidapi.com/FindPlaceByText?text=Buddha%20chillout%20rooftop%20bar%20Lumbini&language=en', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


