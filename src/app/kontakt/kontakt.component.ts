import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder){}

  public ngOnInit() {
    this.formBuilder();
    // @ts-ignore
    document.getElementById('elementLeft').innerHTML = "Zostało 250 znaków";
  }

  public onSubmit(): void {
    let name = this.form?.get('name')?.value;
    let email = this.form?.get('email')?.value;
    let subject = this.form?.get('subject')?.value;
    let content = this.form?.get('content')?.value;
    alert('Wiadomość zostaje wysłana. Od: ' + name + ', email: ' + email + ' temat: ' + subject + ' treść: ' + content);
  }

  public textareaLengthCheck(): void {
    let textArea = this.form.get('content')?.value?.length;
    let charactersLeft = 250 - textArea;
    let count = document.getElementById('elementLeft');
    // @ts-ignore
    count.innerHTML = 'Zostało ' + charactersLeft + ' znaków.';

  }

  private formBuilder(): void {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      subject: [''],
      content: ['']
    })
  }
}
