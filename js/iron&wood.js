const cargar = (idDiv, idHtml) => {
    $.ajax({
        method: "POST",
        url: idHtml
    }).done( (html) => {
        $(`#${idDiv}`).html(html);
    }).always(function( msg ) {
        $(`#${idDiv}`).html(msg);
    });
};