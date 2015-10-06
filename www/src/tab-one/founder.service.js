(function() {
	"use strict";

	angular
		.module("app.tabOne")
		.service("founderService", founderService);

	function founderService(dataService, path, $q) {
		return {
			getCompany: getCompany
		};

		function success(resp) {
			return resp.data;
		}

		function failure(err) {
			return $q.reject(err);
		}

		function getCompany(id) {
			console.log(id)
			return dataService.get(path + id + '.json')
				.then(success).catch(failure);
		}
	}

})();