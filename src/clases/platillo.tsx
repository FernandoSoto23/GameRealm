

export class Platillo{
    public Filtro : number;
    public Titulo : string; 
    public Precio : number;
    public Imagen : string;
    public Descripcion : string;
    
    constructor(filtro : number,titulo : string,precio : number,imagen:string,descripcion:string){
        this.Filtro = filtro;
        this.Titulo = titulo;
        this.Precio = precio;
        this.Imagen = imagen;
        this.Descripcion = descripcion;
    }
}