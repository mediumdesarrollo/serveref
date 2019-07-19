module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'POST /login': 'Usuario.login',
  '/token': 'Usuario.token',
  'DELETE /logout': 'Usuario.logout',
  'get /categoria/count': 'Categoria.count',
  'get /cotizacion/count': 'Cotizacion.count',
  'get /cotizacionproducto/count': 'CotizacionProducto.count',
  'get /cotizacionproducto/vista': 'CotizacionProducto.vista',
  'get /ordenproducto/vista': 'OrdenProducto.vista',
  'get /asignacion/vista': 'Asignacion.vista',
  'get /asignacion/vistalist': 'Asignacion.vistalist',
  'get /asignacion/vistalistcliente': 'Asignacion.vistalistcliente',
  'get /asignacion/iniciartarea': 'Asignacion.iniciartarea',
  'get /asignacion/finalizartarea': 'Asignacion.finalizartarea',
  'get /asignacion/pausartarea': 'Asignacion.pausartarea',
  'get /asignacion/reanudartarea': 'Asignacion.reanudartarea',
  'get /asignacion/saludar': 'Asignacion.saludar',
  'get /asignacion/espera': 'Asignacion.espera',
  'get /asignacion/produccion': 'Asignacion.produccion',
  'get /asignacion/finalizadas': 'Asignacion.finalizadas',
  'get /asignacion/aprobartarea': 'Asignacion.aprobartarea',

  'get /carrito/vista': 'Carrito.vista',

  'get /foto/count': 'Foto.count',
  'get /marca/count': 'Marca.count',
  'get /marcaproducto/count': 'MarcaProducto.count',
  'get /modelo/count': 'modelo.count',
  'get /ordenproducto/count': 'OrdenProducto.count',
  'get /ordentrabajo/count': 'OrdenTrabajo.count',
  'get /persona/count': 'Persona.count',
  'get /producto/count': 'Producto.count',
  'get /tipo/count': 'Tipo.count',
  'get /unidad/count': 'Unidad.count',
  'get /vehiculo/count': 'Vehiculo.count',
  'get /motivo/count': 'Motivo.count',
  'get /counts': 'Home.count',
  'post /ordenTrabajo/generarCarrito': 'OrdenTrabajo.generarCarrito',

};
