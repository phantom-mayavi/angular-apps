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

  onAddServer(srvName: string, srvContent: string) {
    // console.log(nameInput);
    // console.log(nameInput.value);
    console.log(srvName + " " + srvContent);
    this.serverCreated.emit({serverName: srvName, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(srvName: string, srvContent: string) {
    this.blueprintCreated.emit({serverName: srvName, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
