-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-02-2024 a las 20:43:28
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `electrohouse`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cabeceracompras`
--

CREATE TABLE `cabeceracompras` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `cantidadTotal` int(11) DEFAULT NULL,
  `precioTotal` float DEFAULT NULL,
  `fechaCompra` datetime DEFAULT NULL,
  `cerrado` int(1) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cabeceracompras`
--

INSERT INTO `cabeceracompras` (`id`, `usuario_id`, `cantidadTotal`, `precioTotal`, `fechaCompra`, `cerrado`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 351693, '2024-02-09 19:38:27', 1, '2024-02-09 19:38:27', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallecompras`
--

CREATE TABLE `detallecompras` (
  `idCabeceraCompra` int(11) DEFAULT NULL,
  `producto_id` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precioUnitario` float DEFAULT NULL,
  `descuento` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detallecompras`
--

INSERT INTO `detallecompras` (`idCabeceraCompra`, `producto_id`, `cantidad`, `precioUnitario`, `descuento`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 390770, 10, '2024-02-09 19:38:27', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfiles`
--

CREATE TABLE `perfiles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `perfiles`
--

INSERT INTO `perfiles` (`id`, `nombre`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'ADMINISTRADOR', '2024-02-09 19:38:27', NULL, NULL),
(2, 'CLIENTE', '2024-02-09 19:38:27', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `especificaciones` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `precio` float DEFAULT NULL,
  `descuento` int(11) DEFAULT NULL,
  `verIndex_id` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `especificaciones`, `img`, `precio`, `descuento`, `verIndex_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Heladera Electrolux', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', 'heladera.jpg', 390770, 10, 1, '2024-02-09 19:38:27', NULL, NULL),
(2, 'Aire Split BGH', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', 'aire.jpg', 690770, 20, 1, '2024-02-09 19:38:27', NULL, NULL),
(3, 'Licuadora Liliana', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', 'licuadora.jpg', 69770, 10, 1, '2024-02-09 19:38:27', NULL, NULL),
(4, 'Plancha Phillips', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', 'plancha.jpg', 36750, 20, 1, '2024-02-09 19:38:27', NULL, NULL),
(5, 'Microondas BGH', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', 'micro.jpg', 115770, 5, 1, '2024-02-09 19:38:27', NULL, NULL),
(6, 'Estufa Gamma', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'estufa.jpg', 25530, 40, 2, '2024-02-09 19:38:27', NULL, NULL),
(7, 'Cafetera Express', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'cafetera.jpg', 116290, 40, 2, '2024-02-09 19:38:27', NULL, NULL),
(8, 'Lavarropa Drean', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'lavarropa.jpg', 389999, 40, 2, '2024-02-09 19:38:27', NULL, NULL),
(9, 'Aspiradora', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'aspiradora.jpg', 85490, 40, 2, '2024-02-09 19:38:27', NULL, NULL),
(10, 'Batidora', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'batidora.jpg', 77399, 40, 2, '2024-02-09 19:38:27', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('01-perfil.js'),
('02-verIndex.js'),
('03-usuario.js'),
('04-producto.js'),
('05-cabeceraCompra.js'),
('06-detalleCompra.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `perfil_id` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `img`, `usuario`, `password`, `perfil_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Constanza', 'Fontenla', 'mcf@gmail.com', 'img-1704155430324.jpg', 'mcf', '$2a$10$b3w5pTDubwMkJqP5k8AmhOIeun/KeGuUywJvjwVL88O5YgYHg0Id2', 1, '2024-02-09 19:38:27', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `verindex`
--

CREATE TABLE `verindex` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `verindex`
--

INSERT INTO `verindex` (`id`, `nombre`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'NUEVO', '2024-02-09 19:38:27', NULL, NULL),
(2, 'OFERTA', '2024-02-09 19:38:27', NULL, NULL),
(3, 'OUTLET', '2024-02-09 19:38:27', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cabeceracompras`
--
ALTER TABLE `cabeceracompras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `detallecompras`
--
ALTER TABLE `detallecompras`
  ADD KEY `idCabeceraCompra` (`idCabeceraCompra`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `verIndex_id` (`verIndex_id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD KEY `perfil_id` (`perfil_id`);

--
-- Indices de la tabla `verindex`
--
ALTER TABLE `verindex`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cabeceracompras`
--
ALTER TABLE `cabeceracompras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `verindex`
--
ALTER TABLE `verindex`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cabeceracompras`
--
ALTER TABLE `cabeceracompras`
  ADD CONSTRAINT `cabeceracompras_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `detallecompras`
--
ALTER TABLE `detallecompras`
  ADD CONSTRAINT `detallecompras_ibfk_1` FOREIGN KEY (`idCabeceraCompra`) REFERENCES `cabeceracompras` (`id`),
  ADD CONSTRAINT `detallecompras_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`verIndex_id`) REFERENCES `verindex` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`perfil_id`) REFERENCES `perfiles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
