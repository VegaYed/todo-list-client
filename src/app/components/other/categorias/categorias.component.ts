import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria, CategoryList } from 'src/app/shared/dto/Categorias';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  list: Categoria[];
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
    let newCategoria: Categoria = {
      categoria: 'Nueva'
    }
    this.categoryService.add(newCategoria).subscribe(res=>{
      this.list.push(res);
    })
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
          Swal.fire('Categoria Eliminada!','','success');
        });
      } 
    })
  }
   
  

}
