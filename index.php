<?php
/**
 * Hostinger Bridge - Direciona o tráfego da raiz para dist/public
 */

$request = $_SERVER['REQUEST_URI'];
$request_path = parse_url($request, PHP_URL_PATH);

// Verifica se o arquivo existe na raiz (ex: teste.php)
$root_file = __DIR__ . $request_path;
if ($request_path !== '/' && is_file($root_file)) {
    $mime = mime_content_type($root_file);
    header("Content-Type: $mime");
    readfile($root_file);
    exit;
}

$public_path = __DIR__ . '/dist/public';

// Verifica se o arquivo solicitado existe na pasta dist/public (assets, imagens)
$file = $public_path . $request_path;
if ($request_path !== '/' && is_file($file)) {
    $mime = mime_content_type($file);
    if (str_ends_with($request_path, '.js')) $mime = 'application/javascript';
    if (str_ends_with($request_path, '.css')) $mime = 'text/css';
    if (str_ends_with($request_path, '.webp')) $mime = 'image/webp';
    if (str_ends_with($request_path, '.jpg') || str_ends_with($request_path, '.jpeg')) $mime = 'image/jpeg';
    if (str_ends_with($request_path, '.png')) $mime = 'image/png';
    if (str_ends_with($request_path, '.svg')) $mime = 'image/svg+xml';
    if (str_ends_with($request_path, '.mp4')) $mime = 'video/mp4';
    
    header("Content-Type: $mime");
    readfile($file);
    exit;
}

if (is_file($public_path . '/index.html')) {
    include($public_path . '/index.html');
} else {
    echo "Site em manutenção. (Build não encontrado)";
    http_response_code(404);
}
?>
