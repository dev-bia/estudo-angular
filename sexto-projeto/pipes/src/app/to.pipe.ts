import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'to'
})
export class ToPipe implements PipeTransform {

  /**
   * Pegar um array qualquer e retornar a quantidade de elementos que está dentro dele.
   * 
   * Value é responsável por pegar esse valor que será transformado.
   * 
   * O parâmetro "value" no método Transfrom é obrigatório, mas caso queria passar outros parâmetros, é possível.
   */

  transform(value: any[]): number {
    return value.length;
  }

}
