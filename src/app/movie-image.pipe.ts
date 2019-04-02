import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImage'
})
export class MovieImagePipe implements PipeTransform {
  transform(path: string, width?: number): any {
    return `https://image.tmdb.org/t/p/${width ? `w${width}${path}` : `original${path}`}`;
  }
}
