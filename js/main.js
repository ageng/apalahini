$(document).ready(function () {
	"use strict";

	//
	$('#tulis-pesan').autosize();

	if (location.hash !== '') {
		var encType = location.hash.substr(1,1);

		if (encType === 'e') {

			var getHash = location.hash.substr(2);
            $('#write-text').val(Base64.decode(getHash));
            $('#share-url').val(location.href);
            $('#share').show();
            $('#write-text').trigger('autosize');
		} else if (encType === 'b') {

            var getHash = location.hash.substr(2);
            $('#write-text').val("Pesan ini dienkripsi. Massukan key untuk dekrip pesan ini.");

            $('#key-required').show();
            $('#decrypt-button').show();
            $('#save-button').hide();
            $('#add-key-button').hide();
        }
	}

    $('#save-button').click(function (e) {
        var text = $('#write-text').val(),
            encoded = Base64.encode(text);
        key = $('#key-gen').val();

        if (text === '') {
            $('alert').show().text("").delay(3000).fadeOut('slow');
            e.preventDefault();
        } else if (key.length === 0) {

            location.hash = 'e' + encoded;
            $('#share-url').val(location.href);
            $('#share').slideDown('fast');
        } else {

            var bf = new Blowfish({
                key: key,
            });
            var encrypted = bf.encrypted(text);

            location.hash = 'b' + encrypted;
            $('#share-url').val('location.href');
            $('#share').slideDown('fast');
        }
    });


})