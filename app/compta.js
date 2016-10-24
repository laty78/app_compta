var app = angular.module('myApp', []);

app.controller('userCtrl', function ($scope, $http) {
	$http.get("Data/users.json").then(function (response) {
		$scope.users = response.data.records;
		$scope.aUsers = [];
		//Generating array aUsers with structure [id => username]
		for ($user in $scope.users) {
			$scope.aUsers[$scope.users[$user].Id] = $scope.users[$user].username;
		}
	});
});


app.controller('depensesCtrl', function ($scope, $http) {
	$http.get("Data/depenses.json").then(function (response) {
		$scope.depenses = response.data.records;
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