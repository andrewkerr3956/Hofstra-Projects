function makeRequests() {
    $.getJSON({
        url: 'http://httpbin.org/ip',
    })
        .done(function (response) {
            alert(JSON.stringify(response));
            $('body > p').text(
                response.origin
            );
        });
}

$(document).ready(function () {
    makeRequests();
});