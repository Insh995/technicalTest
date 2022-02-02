function displayData() {
    fetch('https://randomuser.me/api/?results=3')
    .then((res) => res.json())
    .then((data) => { 
        var output = data.results 
        var profileData = ''

        for (var i = 0; i < output.length; i++) {
            profileData += 
            '<div class="profile-block col-md-4 col-sm-6 pb-4 p-2">' +
				'<div class="card card-shadow h-100">' + 
					'<img class="card-img-top" src="' + output[i].picture['medium'] + '"/>' + 
					'<div class="card-body">' + 
						'<p class="fw-bold mb-0">Name : </p>' + 
						'<p>' + output[i].name['title'] + ' ' + output[i].name['first'] + ' ' + output[i].name['last'] + ' </p>' + 
						'<p class="fw-bold mb-0">Address : </p>' + 
						'<p>' + output[i].location['street']['number'] + ' ' + output[i].location['street']['name'] + '<br>' + output[i].location['city'] + '<br>' + output[i].location['state'] + ' </p>' + 
						'<p class="fw-bold mb-0">Country : </p>' + 
						'<p>' + output[i].location['country'] + '</p>' + 
						'<p class="fw-bold mb-0">Phone : </p>' + 
						'<p>' + output[i].phone + '</p>' + 
					'</div>' + 
				'</div>' + 
			'</div>'
        }
        document.getElementById('card_details').innerHTML = profileData
    })
    .catch((error) => {
        console.log('Error : ${error}')
        document.getElementById('card_details').innerHTML = 'Error loading data'
    })
}

displayData();