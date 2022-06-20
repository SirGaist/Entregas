<?php
$cone = new mysqli("localhost", "root", "", "sistem_fares");
if ($cone->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $cone->connect_errno . ") " . $cone->connect_error;
}
if ($_POST) {
    $codigo = $_POST['codigo'];
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];
    $Sexo = $_POST['Sexo'];
    $Observaciones = $_POST['Observaciones'];
    $sql = "INSERT INTO registro (codigo, nombre, direccion, telefono, Sexo, Observaciones) VALUES ('$codigo', '$nombre', '$direccion', '$telefono', '$Sexo', '$Observaciones')";
    if ($cone->query($sql) === TRUE) {
        echo "Registros Ingresados Correctamente";
    } else {
        echo "Error: " . $sql . "<br>" . $cone->error;
    }
}