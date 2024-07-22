import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PopupModalComponent } from '../../shared/components/popup-modal/popup-modal.component';
import { PasswordModule } from 'primeng/password';

interface Role {
  name: string;
  tagColor: string;
  iconColor: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,PopupModalComponent,PasswordModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  roles: Role[] = [
    {
      name: 'Al Rasheed',
      tagColor: '#AF52DE33',
      iconColor: '#AF52DE',
    },
    {
      name: 'Switch',
      tagColor: '#BDE6F7',
      iconColor: '#1C7091',
    },
    {
      name: 'Admin',
      tagColor: '#D6F1E9',
      iconColor: '#157D5E',
    },
  ];
  showForgetPasswordForm: boolean = false;
  setShowForgetPasswordForm(val:boolean):void {
    this.showForgetPasswordForm = val
  }
}
