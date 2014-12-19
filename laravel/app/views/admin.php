<!doctype html>
<html lang="en">
<head>
	<title>Karoly Administration</title>
	<!--css-->
	<link rel="stylesheet" href="/lib/bootstrap.min.css"/>

	<!--js-->
	<script src="/lib/jquery.min.js"></script>

	<!--angular-->
	<script src="/lib/angular.js"></script>
	<script src="/lib/angular-route.js"></script>
    <script src="/lib/angular-flash.js"></script>

	<!--angular ap[p-->
	<script src="/js/app.js"></script>
	<!--angular controllers-->
	<script src="/js/controllers/loginController.js"></script>
	<script src="/js/controllers/postController.js"></script>

	<!--angular services-->
	<script src="/js/services/authService.js"></script>
	<script src="/js/services/crudService.js"></script>

</head>
<body ng-app="karolyApp">
<div id="wrapper">
	<div class="container" id="view" ng-view>

	</div>
</div>
</body>
</html>

<?php
/**
 * Created by IntelliJ IDEA.
 * User: sabau
 * Date: 12/10/14
 * Time: 4:05 PM
 */
?>

