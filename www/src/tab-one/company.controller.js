(function() {
	"use strict";

	angular
		.module("app.tabOne")
		.controller("CompanyCtrl", CompanyCtrl);

	function CompanyCtrl(company) {
		var vm = this;
		vm.company = company[0]['name'];
		
	}
})();	