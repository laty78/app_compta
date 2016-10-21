var modal = document.getElementById('id01');
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


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