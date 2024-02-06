import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BTHubService } from '../../service/bthub.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrl: './matiere.component.css'
})
export class MatiereComponent {
  sectionId: string = '';
  matiereId: string = '';
  matiereDetails: any;
  sectionDetails: any;
  epreuves: any;


  constructor(
    private route: ActivatedRoute,
    private bthubService: BTHubService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.sectionId = params['id'];
      this.matiereId = params['matiereId'];
      this.getMatiereDetails();
      this.getSectionDetails();
      this.getEpreuves();
    });
  }

  async getSectionDetails(): Promise<void> {
    try {
      this.sectionDetails = await this.bthubService.getSectionById(this.sectionId);
    } catch (error) {
      console.error('Error fetching item details:', error);
    }
  }

  async getMatiereDetails(): Promise<void> {
    try {
      this.matiereDetails = await this.bthubService.getMatiereById(this.sectionId, this.matiereId);
    } catch (error) {
      console.error('Error fetching item details:', error);
    }
  }

  async getEpreuves(): Promise<void> {
    try {
      this.epreuves = await this.bthubService.getEpreuvesByMatiereId(this.sectionId, this.matiereId);
      this.sortEpreuvesList();  // Sort the list after fetching
    } catch (error) {
      console.error('Error fetching epreuves list:', error);
    }
  }

  sortEpreuvesList(): void {
    this.epreuves.sort((a: { annee: string; }, b: { annee: string; }) => {
      const yearA = typeof a.annee === 'string' ? parseInt(a.annee, 10) : a.annee;
      const yearB = typeof b.annee === 'string' ? parseInt(b.annee, 10) : b.annee;

      return yearB - yearA;
    });
  }
}
