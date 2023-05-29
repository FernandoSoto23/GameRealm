

export class Platillo{
    public TipoMenu : number;
    public Codigo : string;
    public Titulo : string; 
    public Precio : number;
    public Imagen : string;
    public Descripcion : string;
    
    constructor(filtro : number, codigo : string,titulo : string,precio : number,imagen:string,descripcion:string){
        this.TipoMenu = filtro;
        this.Codigo = codigo;
        this.Titulo = titulo;
        this.Precio = precio;
        this.Imagen = imagen;
        this.Descripcion = descripcion;
    }
}