import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ThemeService } from './theme.service'

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeComponent {

  constructor(public service: ThemeService) {
  }
}
