$(document).ready(function () {
	"use strict";

	//
	$('#tulis-pesan').autosize();

	if (location.hash !== '') {
		var encType = location.hash.substr(1,1);

		if (encType === 'e') {

			var getHash = location.hash.substr(2);
		}
	}
})