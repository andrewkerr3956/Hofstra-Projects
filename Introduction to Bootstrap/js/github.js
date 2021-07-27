const callback = function (result) {
    $('.js-github-container').append(
        result.map(item => `<li>${item.name}</li>`).join('')
    );
}
$.get('https://api.github.com/users/facebook/repos').done(callback);
