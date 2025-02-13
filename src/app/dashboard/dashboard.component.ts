import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { PreviewComponent } from '../preview/preview.component';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  bsModalRef?: BsModalRef;
  @ViewChild('searchInput') searchInput!: ElementRef;
  selectedClient: any;
  filteredClients: Array<{ id: number, name: string }> = [];
  clients = [
    { id: 1, name: 'John Doe', country: 'US', industry: 'Ind1' },
    { id: 2, name: 'Jane Smith', country: 'Aus', industry: 'Ind2' },
    { id: 3, name: 'Michael Johnson', country: 'Canada', industry: 'Ind3' }
  ];

  constructor(private modalService: BsModalService) {

  }

  openModalWithComponent() {
    const initialState: ModalOptions = {
      initialState: {
        list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
        title: 'Preview',
      }
    };
    this.bsModalRef = this.modalService.show(PreviewComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  onSearch() {
    if (this.searchInput.nativeElement.value && this.searchInput.nativeElement.value.length >= 3) {
      this.filteredClients = this.clients.filter(client =>
        client.name.toLowerCase().includes(this.searchInput.nativeElement.value.toLowerCase())
      );
    } else {
      this.selectedClient = null;
    }
  }

  onClientSelect(client: any) {
    this.selectedClient = client;// Optionally set the search box to the selected client name
    this.filteredClients = [];
  }
}
