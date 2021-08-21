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
    new MenuItem('Perfil', 'profile', 'profile', 'person'),
    new MenuItem('Productos', 'mathematics', 'mathematics class material', 'shopping_cart'),
    new MenuItem('Solicitudes', 'physics', 'physics class material', 'article'),
    new MenuItem('Sucursales', 'physics', 'physics class material', 'location_on'),
    new MenuItem('Cerrar Sesión', 'physics', 'physics class material', 'close')

];