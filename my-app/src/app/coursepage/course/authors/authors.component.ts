import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/domain/author';
import { AuthorsService } from './authors.service';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  all: Author[] = [];
  @Input()
  courseFormGroup: string = '';
  form: FormGroup = {} as FormGroup;

  constructor(private authorsService: AuthorsService,
    private rootFormGroup: FormGroupDirective
  ) { }
  
  public get authors() : FormControl {
    return this.form.get('authors') as FormControl;
  }

  ngOnInit(): void {
    this.authorsService.getAll().subscribe(data => {
      this.all = data;
    });
    this.form = this.rootFormGroup.form as FormGroup
  }
}
