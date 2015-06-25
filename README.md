# angular-flash-message
Angular Flash Message

Angular Flash message supports displaying flash message on your AngularJS app. Currently we didn't include styling since you have to do it on your own.

## Install
`bower install angular-flash-message`

## Usage
After adding `angular-flash-directive.js` to your project, add `angular-flash` as a dependency to your module. Once Angular flash is included you can now access or showing messages using $flash factory. Here is a simple example:

```javascript
angular.module('yourModule', ['angular-flash'])
.controller('YourController', function($scope, $flash) {
  $scope.save = function() {
    // … save the product
    $flash({message: 'This is a flah message !!!', type: 'warning'});
  };

  $scope.hideMessage = function(){
  	$flash.hide();
	}
});
```

You also need to insert Angular flash directive html code  on your AngularJS application:


```javascript
<angular-flash></angular-flash>
```

## Supported classes

  * Error
  * Warning
  * Success


## License
This is licensed under the feel-free-to-do-whatever-you-want-to-do license.