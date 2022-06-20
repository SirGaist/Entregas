<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro Datos</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
<header class="cabecera">
    <h1>Formulario</h1>
</header>

    <section class="secformulario">
        <h2>Registro</h2>
        <form action="agregardatos.php" method="post" autocomplete="off">
            <div>
                <label for="codigo">Codigo:</label>
                <input type="text" name="codigo" id="codigo" placeholder="su codigo">        
            </div>
            <div>
                <label for="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nombre" placeholder="su nombre">
            </div>
            <div>
                <label for="direccion">Direccion:</label>
                <input type="text" name="direccion" id="direccion" placeholder="su direccion">
            </div>
            <div>
                <label for="telefono">Teléfono:</label>
                <input type="text" name="telefono" id="telefono" placeholder="su telefono">
            </div>
            <div>
                <label for="Sexo">Sexo:</label>
                <input type="text" name="Sexo" id="Sexo" placeholder="su Sexo">
            </div>
            <div>
                <label for="Observaciones">Observaciones:</label>
                <input type="text" name="Observaciones" id="Observaciones" placeholder="su Observaciones">
            </div>
                <input type="submit" value="Agregar">
        </form action="agregardatos.php" method="POST" autocomplete="Off"> 
    </section>
</body>
</html>
