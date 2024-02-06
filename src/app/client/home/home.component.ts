import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BTHubService } from '../../service/bthub.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  sections: any[] = [];

  constructor(private service: BTHubService) { }

  refreshSections() {
    this.service.getSections().subscribe((res) => {
      this.sections = res
    })
  }

  ngOnInit() {
    this.refreshSections();
  }
}
