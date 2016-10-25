var app = angular.module('myApp', []);

app.controller('userCtrl', function ($scope, $http, $rootScope) {
	$http.get("Data/users.json").then(function (response) {
		$scope.users = response.data.records;
		$rootScope.aUsers = [];
		//Generating array aUsers with structure [id => username]
		for ($user in $scope.users) {
			$rootScope.aUsers[$scope.users[$user].Id] = $scope.users[$user].username;
		}
	});
});

app.controller('depensesCtrl', function ($scope, $http, $rootScope) {
	$http.get("Data/depenses.json").then(function (response) {
		$scope.depenses = response.data.records;
		//Variable qui permet de créer le premier tableau à explorer.
		$scope.aConcernes = [];
		//Tableau qui stock les nom un par un et qui est ensuite join
		$scope.aConcernesElement = [];
		//Tableau avec la liste des noms mais le mauvais index
		$scope.aConcernesTrue = [];
		//Le bon tableau à utiliser
		$scope.aConcernesFinal = [];
		for ($depense in $scope.depenses) {
			//On crée le tableau à explorer (le split est important car il permet de rendre ce tableau exploitable pour la boucle suivante)
			$scope.aConcernes[$depense] = $scope.depenses[$depense].Concernes.split(',');
		}

		//le $scope.aConcernes est un tableau qui contient des tableaux (2 niveaux, donc 2 boucles for)
		for ($i = 0; $i < $scope.aConcernes.length; $i++) {
			for ($x = 0; $x < $scope.aConcernes[$i].length; $x++) {
				//On transforme les ID en nom.
				$scope.aConcernesElement.push($rootScope.aUsers[$scope.aConcernes[$i][$x]]);
			}
			//On join les nom pour obtenir une ligne qu'on assigne dans un tableau unique
			$scope.aConcernesElement = $scope.aConcernesElement.join(", ");
			$scope.aConcernesTrue.push($scope.aConcernesElement);
			//On réinitialise la ligne pour faire une nouvelle
			$scope.aConcernesElement = [];
		}

		//Cette boucle est pour créer un tableau qui a pour clés les ID des dépenses et pour valeur les lignes créer plus tôt.
		for ($depense in $scope.depenses) {
			$scope.aConcernesFinal[$scope.depenses[$depense].Id] = $scope.aConcernesTrue[$depense];
		}
	});
});




app.controller('datCtrl', function ($scope) {
	$scope.today = new Date();
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


function userPart($scope) {
	$scope.message = '';
	$scope.utilisateurs = [];
	$scope.user = {
		participant: '',
		depense: '',
		couleur: ''
	};
	$scope.soumission = function (valid) {
		if (valid) {
			$scope.utilisateurs.push($scope.user);
			$scope.user = {
				participant: '',
				depense: '',
				couleur: ''
			};
		} else {
			$scope.messageClass = 'alert-danger';
			$scope.message = 'Désolé mais il y a des données non valides !';
		}
	};
}

/*var MyFirstApp = angular.module('MyFirstApp', []);MyFirstApp.controller('depensesCtrl', function($scope, $http, $rootScope) {    $http({
        method:'GET',
        url : 'elements/json/depense.json'
    }).then(function (response) {
        $scope.depenses = response.data.records;
    });
});MyFirstApp.controller('usersCtrl', function($scope, $http) {
    $http({
        method:'GET',
        url : 'elements/json/users.json'
    }).then(function (response) {
        $scope.users = response.data.records;
        console.log(response.data.records);
        $scope.aUsers = [];
        //Generating array aUsers with structure [id => username]
        for($user in $scope.users){
            $scope.aUsers[$scope.users[$user].Id] = $scope.users[$user].username;
        }
    });
});
3:08 <body ng-controller="usersCtrl">        <div ng-controller="depensesCtrl">
           <h1>Liste des utilisateurs</h1>
           <ul>
               <li ng-repeat="user in users">
                   {{user.username}}
               </li>
           </ul>            <h1>Liste des payeurs</h1>
           <ul>
               <li ng-repeat="depense in depenses">{{aUsers[depense.Payeur]}}</li>
               
           </ul>
        </div>*/