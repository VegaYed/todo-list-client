import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria, CategoryList } from 'src/app/shared/dto/Categorias';

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
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
