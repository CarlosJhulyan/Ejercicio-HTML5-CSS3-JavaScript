$(document).ready(function() {
    
    var posts = [{
            title: "Prueba de titulo 1",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor pharetra, sagittis turpis a, vehicula augue. Maecenas tempus arcu massa, eget tempor velit faucibus id. Fusce vitae tellus et metus tincidunt malesuada ac vel eratNullam egestas pulvinar arcu, a semper ante maximus a. Morbi condimentum dictum mattis. Pellentesque <b>volutpat est nisi, a elementum </b> mauris lacinia non. Ut sagittis neque sapien, vitae vulputate nunc volutpat eget. Nam fermentum lectus et finibus fermentum. Duis id felis at magna vehicula vehicula. Pellentesque accumsan a nisi id faucibus. Nunc eu libero eget elit sollicitudi rhoncus sit amet vitae nisl. Nam eget est egestas, mattis turpis a, tristique leo. Duis tempus sed nulla ac fermentum. Sed et scelerisque dolor, eu congue est. Donec bibendum facilisis nisl, non egestas tortor pretium sed. Maecenas tellus mauris, convallis non molestie eu, fringilla acest."
        },
        {
            title: "Prueba de titulo 2",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor pharetra, sagittis turpis a, vehicula augue. Maecenas tempus arcu massa, eget tempor velit faucibus id. Fusce vitae tellus et metus tincidunt malesuada ac vel eratNullam egestas pulvinar arcu, a semper ante maximus a. Morbi condimentum dictum mattis. Pellentesque <b>volutpat est nisi, a elementum </b> mauris lacinia non. Ut sagittis neque sapien, vitae vulputate nunc volutpat eget. Nam fermentum lectus et finibus fermentum. Duis id felis at magna vehicula vehicula. Pellentesque accumsan a nisi id faucibus. Nunc eu libero eget elit sollicitudi rhoncus sit amet vitae nisl. Nam eget est egestas, mattis turpis a, tristique leo. Duis tempus sed nulla ac fermentum. Sed et scelerisque dolor, eu congue est. Donec bibendum facilisis nisl, non egestas tortor pretium sed. Maecenas tellus mauris, convallis non molestie eu, fringilla acest."
        },
        {
            title: "Prueba de titulo 3",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor pharetra, sagittis turpis a, vehicula augue. Maecenas tempus arcu massa, eget tempor velit faucibus id. Fusce vitae tellus et metus tincidunt malesuada ac vel eratNullam egestas pulvinar arcu, a semper ante maximus a. Morbi condimentum dictum mattis. Pellentesque <b>volutpat est nisi, a elementum </b> mauris lacinia non. Ut sagittis neque sapien, vitae vulputate nunc volutpat eget. Nam fermentum lectus et finibus fermentum. Duis id felis at magna vehicula vehicula. Pellentesque accumsan a nisi id faucibus. Nunc eu libero eget elit sollicitudi rhoncus sit amet vitae nisl. Nam eget est egestas, mattis turpis a, tristique leo. Duis tempus sed nulla ac fermentum. Sed et scelerisque dolor, eu congue est. Donec bibendum facilisis nisl, non egestas tortor pretium sed. Maecenas tellus mauris, convallis non molestie eu, fringilla acest."
        },
        {
            title: "Prueba de titulo 4",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor pharetra, sagittis turpis a, vehicula augue. Maecenas tempus arcu massa, eget tempor velit faucibus id. Fusce vitae tellus et metus tincidunt malesuada ac vel eratNullam egestas pulvinar arcu, a semper ante maximus a. Morbi condimentum dictum mattis. Pellentesque <b>volutpat est nisi, a elementum </b> mauris lacinia non. Ut sagittis neque sapien, vitae vulputate nunc volutpat eget. Nam fermentum lectus et finibus fermentum. Duis id felis at magna vehicula vehicula. Pellentesque accumsan a nisi id faucibus. Nunc eu libero eget elit sollicitudi rhoncus sit amet vitae nisl. Nam eget est egestas, mattis turpis a, tristique leo. Duis tempus sed nulla ac fermentum. Sed et scelerisque dolor, eu congue est. Donec bibendum facilisis nisl, non egestas tortor pretium sed. Maecenas tellus mauris, convallis non molestie eu, fringilla acest."
        },
        {
            title: "Prueba de titulo 5",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor pharetra, sagittis turpis a, vehicula augue. Maecenas tempus arcu massa, eget tempor velit faucibus id. Fusce vitae tellus et metus tincidunt malesuada ac vel eratNullam egestas pulvinar arcu, a semper ante maximus a. Morbi condimentum dictum mattis. Pellentesque <b>volutpat est nisi, a elementum </b> mauris lacinia non. Ut sagittis neque sapien, vitae vulputate nunc volutpat eget. Nam fermentum lectus et finibus fermentum. Duis id felis at magna vehicula vehicula. Pellentesque accumsan a nisi id faucibus. Nunc eu libero eget elit sollicitudi rhoncus sit amet vitae nisl. Nam eget est egestas, mattis turpis a, tristique leo. Duis tempus sed nulla ac fermentum. Sed et scelerisque dolor, eu congue est. Donec bibendum facilisis nisl, non egestas tortor pretium sed. Maecenas tellus mauris, convallis non molestie eu, fringilla acest."
        }
    ];

    posts.forEach((element, i) => {
        var post = `
        <article class="post">
            <h3>${element.title}</h3>
            <span class="fecha-publicado">${element.date}</span>
            <span class="comentarios">92 Comentarios</span>
            <p>${element.content}</p>
            <a href="#">Leer más...</a>
        </article>
        `;
        $('#posts').append(post);
    });

    //SELECTOR DE TEMAS
    var theme = $('#theme');

    $('#to-red').click(function() {
        theme.attr("href", "css/themes/red.css");
        $('.to-theme').css("color", "white");
        $(this).css("background", "white");
        $(this).css("color", "black");
        $('#to-blue').css("background", "blue");
        $('#to-green').css("background", "green");
    });
    $('#to-blue').click(function() {
        theme.attr("href", "css/themes/blue.css");
        $('.to-theme').css("color", "white");
        $(this).css("background", "white");
        $(this).css("color", "black");
        $('#to-red').css("background", "red");
        $('#to-green').css("background", "green");
    });
    $('#to-green').click(function() {
        theme.attr("href", "css/themes/green.css");
        $('.to-theme').css("color", "white");
        $(this).css("background", "white");
        $(this).css("color", "black");
        $('#to-red').css("background", "red");
        $('#to-blue').css("background", "blue");
    });

    //SCROLL ARRIBA DE LA WEB
    $("#subir").hide();
    $('.subir').click(function(e) {
        e.preventDefault() //Para que 'a' no redirija a otro link
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

    setInterval(() => {
        if ($('html, body').scrollTop()>=300) {
            $("#subir").fadeIn();
        }
        if ($('html, body').scrollTop() >= 0 && $('html, body').scrollTop() < 300){
            $("#subir").fadeOut();
        }
    }, 300);
    //LOGIN FALSO
    $('#formulario').submit(function() {
        var form_name = $('#name').val();
        var form_pass = $('#password').val();
        var form_email = $('#email').val();
        var user = form_name + form_email + form_pass;
        localStorage.setItem("usuario_registrado", user);
    });

    var user = localStorage.getItem("usuario_registrado");
    var about = $('#about p');
    if (user != null || user != "undefined" || user != "") {
        about.html("Bienvenido, " + user.substr(0, 14) + "<br/>Haz entrado con el correo: " + user.substr(14, 25));
        about.append('<br/><br/><a href="#" id="logout">Cerrar sesión</a>');
        $('#name').attr("disabled", "disabled");
        $('#password').attr("disabled", "disabled");
        $('#email').attr("disabled", "disabled");
        $('#ingresar').attr("disabled", "disabled");

        $('#logout').click(function (e) { 
            e.preventDefault();
            localStorage.clear();
            location.reload();
        });
    }

});