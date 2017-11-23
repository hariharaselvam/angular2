



import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
  template: '<div>Most popular JS lib: {{lib}}.<br><br> <button (click)="whichLib()">Vote</button></div>'
})


export class AppComponent {
 public lib = "jQuery" ;

  //whichLib() { console.log('Voted - lib: ', this.lib)};
    public whichLib = () => { console.log('Voted - library: ', this.lib)};
}