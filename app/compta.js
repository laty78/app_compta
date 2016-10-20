var app = angular.module('myApp', []);

app.controller('userCtrl', function ($scope, $http) {
	$http.get("Data/users.json").then(function (response) {
		$scope.myData = response.data.records;
	});
});


app.controller('depensesCtrl', function ($scope, $http) {
	$http.get("Data/depenses.json").then(function (response) {
		$scope.depenses = response.data.records;
	});
});

// Get the modal
/*var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}*/


function Controler($scope) {
	$scope.message = '';
	$scope.utilisateurs = [];
	$scope.user = {
		nom: '',
		prenom: '',
		role: 'Membre'
	};
	$scope.soumission = function (valid) {
		if (valid) {
			$scope.utilisateurs.push($scope.user);
			$scope.user = {
				nom: '',
				prenom: '',
				role: 'Membre'
			};
		} else {
			$scope.messageClass = 'alert-danger';
			$scope.message = 'Désolé mais il y a des données non valides !';
		}
	};
}