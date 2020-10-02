import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/shared/dto/Categorias';

@Component({
  selector: 'app-dialog-categorias',
  templateUrl: './dialog-categorias.component.html',
  styleUrls: ['./dialog-categorias.component.css']
})
export class DialogCategoriasComponent implements OnInit {

  categorias: Categoria[]= [];
  categoriasSelec = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: Categoria[], private catService: CategoriaService) { }

  ngOnInit(): void {
    this.catService.readAll().subscribe(res=>{
      this.categorias = res;
    });
  }
  check(cat, e){
    /* this.categoriasSelec.splice(this.categoriasSelec.indexOf(cat),1); */
    if(e.checked){
      this.data.push(cat);
    }
    else{
      this.data.splice(this.categoriasSelec.indexOf(cat),1);
    }

    console.log(this.data);

  }

}
