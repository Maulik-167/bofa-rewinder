import { Component, ElementRef, ViewChild } from '@angular/core';
import { PreviewComponent } from '../preview/preview.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { TemplateService } from '../template.service';


@Component({
  selector: 'app-create-template',
  standalone: false,
  templateUrl: './create-template.component.html',
  styleUrl: './create-template.component.scss'
})
export class CreateTemplateComponent {
  bsModalRef?: BsModalRef;
  @ViewChild('searchInput') searchInput!: ElementRef;
  selectedClient: any;
  isChooseLanguage = false;
  filteredClients: Array<{ id: number, name: string }> = [];
  clients = [
    { id: 1, name: 'Eataly', country: 'United States', industry: 'Food & Beverage' },
    { id: 2, name: 'Jane Smith', country: 'Aus', industry: 'Ind2' },
    { id: 3, name: 'Michael Johnson', country: 'Canada', industry: 'Ind3' }
  ];

  tagesInfo = [
    {
      title: "Total Client Meetings Held",
      count: '156 Meetings',
      tagName: 'Connections'
    },
    {
      title: "A/c Openings (International)",
      count: '14 Accounts',
      tagName: 'Growth'
    },
    {
      title: "Events Invited To",
      count: '23 Events',
      tagName: 'Spotlight'
    },
    {
      title: "Annual Total Transactions",
      count: '12,482 Transactions',
      tagName: 'Operations'
    }    
  ];

  tagesInfo2 = [
    {
      title: "Total Payment Volume",
      count: '$78.3 Million',
      tagName: 'Payments'
    },
    {
      title: "Pipelines Open",
      count: '57 Business Pipelines',
      tagName: 'Deals'
    },
    {
      title: "Pipelines Closed",
      count: '31 Pipelines Closed',
      tagName: 'Deals'
    },
    {
      title: "Total Service Calls Answered",
      count: '1287 Service Calls',
      tagName: 'Engagement'
    }    
  ];



  constructor(private modalService: BsModalService, private router: Router, private templateService : TemplateService) {

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


  chooseLanguage() {
    this.router.navigateByUrl('/create-template');
    this.templateService.selectedPage = 'choose-language';
  }

}
