import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerserverContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(srvNameInput: HTMLInputElement) {
    // console.log(nameInput);
    // console.log(nameInput.value);
    console.log(srvNameInput.value + " " + this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({serverName: srvNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(srvNameInput: HTMLInputElement) {
    console.log(srvNameInput.value + " " + this.serverContentInput.nativeElement.value);
    this.blueprintCreated.emit({serverName: srvNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
