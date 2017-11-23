
import {Component} from '@angular/core';

export class TvChannel {
  id: number;
  name: string;
  programName: string;
}

@Component({
  selector: 'app-root',
  styles:[`  section {width: 34em; 
                      margin: 2em; 
                      padding: 1em; 
                      border: 1px dotted orange;}
         `],

  template: `
            <section>
                 <h2>{{title}}: {{chan.name}}</h2> 

                 <aside> Showing {{chan.programName}}</aside> 
                 <p>See on channel: {{chan.id}} - TataSky </p>
                <div>
                      <label>Current Program: </label>
                      <input [(ngModel)]="chan.programName" placeholder="My fav prog">
                </div>
            </section>
            
             `
})


export class AppComponent {
  private title = 'Popular TV Channel';

  private chan: TvChannel = {
    id: 602,
    name: 'Republic' ,
    programName: "News"
  };
}