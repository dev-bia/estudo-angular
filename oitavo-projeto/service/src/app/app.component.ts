import { Component } from '@angular/core';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service';

  //fazendo injeção de de dependências dentro da classe

  constructor(
    public cService: ClientesService
  )
  {}

  ngOnInit() : void{
    const clientes = this.cService.listarClientes()
    console.log(clientes)
  }
}
