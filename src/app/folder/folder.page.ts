import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UuidService } from '../core/utils/uuid/uuid.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private uuid: UuidService
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getUuid(): void {
    console.log(this.uuid.getUuid());
  }
  navigateToCreationPage() {
    this.router.navigate(['qr-creation']);
  }
  navigateToLoginPage() {
    this.router.navigate(['login']);
  }
}
