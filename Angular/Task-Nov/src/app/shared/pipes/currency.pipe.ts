import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyINR'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: string): number {
    const val=Number(value) * 83;
    return val
  }

}
