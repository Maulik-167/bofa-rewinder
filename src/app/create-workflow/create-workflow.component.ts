import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TemplateService } from '../template.service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-create-workflow',
  standalone: false,
  templateUrl: './create-workflow.component.html',
  styleUrl: './create-workflow.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CreateWorkflowComponent implements OnInit {
  selectedIndex = 0;
  formGroup: FormGroup;
  public loadContent: boolean = false;
  buttonText = 'Next';
  isThemeSelection = false;
  iframeUrl: any;
  file = {};
  themeInfo = [
    {
      id: 1,
      imageURL: '../../assets/chat0.svg'
    },
    {
      id: 2,
      imageURL: '../../assets/chat1.svg'
    },
    {
      id: 3,
      imageURL: '../../assets/chat2.svg'
    }]

  @ViewChild('multiSelect') multiSelect: any;

  public data: any = [];
  public settings = {};

  constructor(private templateService: TemplateService, protected sanitizer: DomSanitizer, private fb: FormBuilder) {
    this.templateService.selectedPage === 'theme';
    this.formGroup = this.fb.group({
      userName: new FormControl(this.data, Validators.required),
    });
  }


  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};


  ngOnInit() {
    this.file = {
      lastModified: 1742379951497,
      name: "Rewinder.mov", size: 17736274, type: "video/quicktime", webkitRelativePath: ""
    }
    this.dropdownList = [
      { item_id: 1, item_text: 'aparna.dey@eataly.com' },
      { item_id: 2, item_text: 'anand.selvaraj@eataly.com' },
      { item_id: 3, item_text: 'jessica.smith@eataly.com' },
      { item_id: 4, item_text: 'maulik.gohel@eataly.com' },
      { item_id: 5, item_text: 'ayushi.keshari@eataly.com' }
    ];
    this.selectedItems = [
      { item_id: 1, item_text: 'aparna.dey@eataly.com' },
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      itemsShowLimit: 3,
    };

    this.loadContent = true;
    
  }





  get f() {
    return this.formGroup.controls;
  }

  gotoNext() {
    this.iframeUrl = '';
    if (this.buttonText === 'Theme') {
      this.isThemeSelection = true;
      this.selectedIndex = 8;
      this.buttonText = 'Preview'
      this.templateService.selectedPage = 'theme';
    }
    else if (this.buttonText === 'Preview') {
      this.isThemeSelection = true;
      this.selectedIndex = 9;
      this.buttonText = 'Send'
      this.templateService.selectedPage = 'send';
    }
    else {
      this.buttonText = this.selectedIndex === 6 ? 'Theme' : this.buttonText;
      if (this.selectedIndex !== 7) {
        this.selectedIndex += 1;
      }
    }
  }

  gotoPrev() {
    if (this.selectedIndex !== 0) {
      this.selectedIndex -= 1;
    }
    this.buttonText = 'Next';
  }

  getBase64(file: any) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }


  videoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:4200/assets/Rewinder.mov");
  }


  handleFileInput(files: any) {
    const fileToUpload = files.item(0);
  }
}
