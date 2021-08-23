export class MenuItem {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = ''
    ) {}
}

export const menuList = [
    new MenuItem('Inicio', 'login', 'home', 'home'),
    new MenuItem('Perfil', 'perfil', 'perfil', 'person'),
    new MenuItem('Productos', 'productos', ' productos', 'shopping_cart'),
    new MenuItem('Solicitudes', 'solicitudes', 'solicitudes', 'article'),
    new MenuItem('Sucursales', 'sucursales', 'sucursales', 'location_on'),
    new MenuItem('Cerrar Sesión', 'logoff', 'logoff', 'close')

];