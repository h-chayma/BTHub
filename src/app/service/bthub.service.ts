import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, DocumentSnapshot, DocumentData, doc, getDoc, collectionGroup, query, where, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BTHubService {

  constructor(private firestore: Firestore) { }

  getSections() {
    let sections = collection(this.firestore, 'sections');
    return collectionData(sections, { idField: 'id' });
  }

  async getSectionById(sectionId: string): Promise<DocumentSnapshot<DocumentData, DocumentData>> {
    const itemDoc = doc(this.firestore, 'sections', sectionId);
    return getDoc(itemDoc);
  }

  async getMatieresBySectionId(sectionId: string): Promise<any[]> {
    try {
      const matieresCollection = collection(this.firestore, `sections/${sectionId}/matieres`);
      const querySnapshot = await getDocs(matieresCollection);

      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching matieres list:', error);
      throw error;
    }
  }

  async getMatiereById(sectionId: string, matiereId: string): Promise<DocumentSnapshot<DocumentData, DocumentData>> {
    const itemDoc = doc(this.firestore, `sections/${sectionId}/matieres/${matiereId}`);
    return getDoc(itemDoc);
  }

  async getEpreuvesByMatiereId(sectionId: string, matiereId: string): Promise<any[]> {
    try {
      const epreuvesCollection = collection(this.firestore, `sections/${sectionId}/matieres/${matiereId}/epreuves`);
      const querySnapshot = await getDocs(epreuvesCollection);

      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching epreuves list:', error);
      throw error;
    }
  }

}


