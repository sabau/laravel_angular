<!doctype html>
<html lang="en">
<head>
	<title>Karoly Administration</title>
	<!--css-->
	<link rel="stylesheet" href="/lib/bootstrap/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/lib/bootstrap/dist/css/bootstrap-theme.min.css"/>
    <link rel="stylesheet" href="/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff"/>
    <link rel="stylesheet" href="/lib/angular-motion/dist/angular-motion.min.css"/>
	<!--js-->
	<script src="/lib/jquery/dist/jquery.min.js"></script>

	<!--angular-->
	<script src="/lib/angular/angular.min.js"></script>
	<script src="/lib/angular-route/angular-route.min.js"></script>
    <script src="/lib/angular-animate/angular-animate.min.js"></script>
    <script src="/lib/angular-sanitize/angular-sanitize.min.js"></script>
    <script src="/lib/angular-strap/dist/angular-strap.min.js"></script>
    <script src="/lib/angular-strap/dist/angular-strap.tpl.min.js"></script>
    <script src="/lib/satellizer/satellizer.min.js"></script>

	<!--angular app-->
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

