
import {Component} from '@angular/core';


//====this defn needs to be at the start itself==================
export class Channel {
    id: number;
    name: string;
}

// ===== the decorator & its class go together as one unit =================

@Component({
  selector: 'app-root',
  template: `
      <h2 id="hdr">{{title}}</h2>
      <h5>My TV Channels</h5>
      <section>
        <ul class="favs">
          <li *ngFor=" let channel of channels"
                [class.selected]="channel === selectedChannel"
                 (click)="onSelect(channel)">

            <span class="badge">{{channel.id}}</span> {{channel.name}}
          </li>
        </ul>
      </section>

    <aside *ngIf="selectedChannel">
      <h4>{{selectedChannel.name}} Description:</h4>
      <div><label>id: </label>{{selectedChannel.id}}</div>

      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedChannel.name" placeholder="name"/>
      </div>
    </aside>
  `,
  styles: [`
    .selected {
      background-color: orange !important;
      color: white;
    }
    #hdr{color: darkmagenta;}
    section, aside{margin-right: 5em; float: left;}
    aside{border: 1px solid blue; padding: 1.2em;}

    .favs {
      margin: 2em ;
      list-style-type: none;
      padding: 0;
      width: 15em;
      border: 1px dotted orange ;
    }
    .favs li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: lightseagreen;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .favs li.selected:hover {
      background-color: darkorange !important;
      color: white;
    }
    .favs li:hover {
      color: #607D8B;
      background-color: cyan;
      left: .1em;
    }
    .favs .text {
      position: relative;
      top: -3px;
    }
    .favs .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
  title = "Tata Sky: Popular TV Channels";
  channels = CHANNELS;
  selectedChannel: Channel;
  onSelect(channel: Channel) { this.selectedChannel = channel; }
}

const CHANNELS: Channel[] = [
  { "id": 11, "name": "Zee News" },
  { "id": 12, "name": "Zee Business" },
  { "id": 13, "name": "Sony" },
  { "id": 14, "name": "ETV" },
  { "id": 15, "name": "Colors" },
  { "id": 16, "name": "ET Now" },
  { "id": 17, "name": "Bloomberg" },
  { "id": 18, "name": "Republic" },
  { "id": 19, "name": "Zee" },
  { "id": 20, "name": "Nat Geo" }
];
