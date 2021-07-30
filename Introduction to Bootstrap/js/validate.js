$(document).ready( () => {
    $('.needs-validation').submit( event => {
        if (! event.target.checkValidity() ) {
            event.preventDefault();
            event.stopPropagation();          
        }
        $(event.target).addClass('was-validated');
    });
});