import { Component, Input } from '@angular/core';
import { ICharacter } from '../interfaces/interfaces';

@Component({
  selector: 'cm-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  @Input() characters: ICharacter[];
  @Input() loadingCharacters: boolean;
}
