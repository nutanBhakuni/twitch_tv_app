(function(){
	fetch('https://wind-bow.glitch.me/twitch-api/users/rocketleague').then(function(response){
		return response.json();
	}).then(function(data){
		console.log(data);
	}).catch(function(error){
		console.log(error);
	});
})();
