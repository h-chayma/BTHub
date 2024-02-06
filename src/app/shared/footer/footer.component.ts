import { Component } from '@angular/core';
import { BTHubService } from '../../service/bthub.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
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
