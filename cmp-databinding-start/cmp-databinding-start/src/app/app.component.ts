import { Component, ViewChild, ElementRef, AfterViewInit, AfterContentInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterContentInit, OnInit {
  serverElements = [{type: 'server', name: 'Test server', content: 'sample content'}];
  @ViewChild('contentPara') contentPara: ElementRef;

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onFirstElementChange() {
    this.serverElements[0].name = 'new name';
  }

  onDestroyClicked(): void {
    this.serverElements.splice(0, 1);
  }

  ngAfterViewInit(): void {
    console.log('Content para in app.html ngAfterViewInit ' + this.contentPara.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
  }

  ngOnInit(): void {

  }
}
