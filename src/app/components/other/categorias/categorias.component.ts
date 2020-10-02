import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/shared/dto/Categorias';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  list: Categoria[];
  isManaging : boolean = false;

  constructor(private categoryService: CategoriaService) { }

  ngOnInit(): void {
    this.categoryService.readAll().subscribe(
      (resp) => {
        this.list = resp;
        this.list = this.list.filter(x => x.categoria != 'scategoria');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  agregar(){
    Swal.fire({
      title: 'Ingresa un nombre para agregar una nueva categoría',
      icon: 'info',
      showCancelButton: true,
      input: 'text',
      confirmButtonText: 'Crear categoría',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return '¡Debes ingresar un nombre!'
        }
      }
    }).then(
      (result) => {
        if(result.value){          
          let newCategoria: Categoria = {
            categoria: result.value
          }    
          this.categoryService.add(newCategoria).subscribe(
            (res) => {
              this.list.push(res);
              Swal.fire('¡Categoria creada!','','success');
            },
            (error) => {
              console.log(error);
              Swal.fire('La categoría no ha podido ser creada. ¿Estás conectado a internet?','','error');
            }
          );
        }
      }
    );
  }

  eliminar(cat){
    Swal.fire({
      title: '¿Deseas eliminar la Categoría?',
      text: 'Eliminar "'+ cat.categoria +'"',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí. Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.list.splice(this.list.indexOf(cat), 1);
        this.categoryService.delete(cat).subscribe(res=>{
          Swal.fire('¡Categoria Eliminada!','','success');
        });
      } 
    })
  }
  gestionar(){ // muestra u oculta botones de eliminar en lista de categorias
     this.isManaging = !this.isManaging;
  }

}
