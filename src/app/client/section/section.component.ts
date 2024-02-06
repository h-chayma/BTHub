import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BTHubService } from '../../service/bthub.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  sectionId: string = '';
  sectionDetails: any;
  matieres: any;
  
  constructor(
    private route: ActivatedRoute,
    private bthubService: BTHubService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.sectionId = params['id'];
      this.getSectionDetails();
      this.getMatieres();
    });
  }

  async getSectionDetails(): Promise<void> {
    try {
      this.sectionDetails = await this.bthubService.getSectionById(this.sectionId);
    } catch (error) {
      console.error('Error fetching item details:', error);
    }
  }

  async getMatieres(): Promise<void> {
    try {
      this.matieres = await this.bthubService.getMatieresBySectionId(this.sectionId);
    } catch (error) {
      console.error('Error fetching matieres list:', error);
    }
  }
}