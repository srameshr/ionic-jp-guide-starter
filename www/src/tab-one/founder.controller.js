(function() {
	"use strict";

	angular
		.module("app.tabOne")
		.controller("FounderCtrl", FounderCtrl);

	function FounderCtrl($state) {
		var vm = this;
		vm.founderDetails = founderDetails;

		vm.founders = [
			{
				id: 1,
				name: 'Brian Chesky'
			},
			{
				id: 2,
				name: 'Ben Silbermann'
			}
		];

		function founderDetails(founderId) {
			$state.go("tabs.tab-one-child", {'id':founderId})
		}
	}
})();