import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../app.component";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', searchField: string = 'title'): Post[] {
    if(!search) {
      return posts
    }

    return posts.filter((po: any) => {
      return po[searchField].toLowerCase().includes(search.toLowerCase())
    })
  }

}
