import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string ['/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/']): string {
    return value.replace();
  }

}
