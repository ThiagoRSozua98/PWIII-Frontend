import { Component, OnInit } from '@angular/core';
import { UsuarioAPIService } from '../service/usuario-api.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'has-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  usuarios: Usuario[];

  constructor(private service: UsuarioAPIService) { }

  ngOnInit() {
    this.service
        .getUsuario()
        .subscribe((data: Usuario[]) => this.usuarios = data,
                    error => console.log(error));
  }

}
