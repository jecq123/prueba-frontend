import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Book } from '../model/book';
import { BookService } from '../service/book/book.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  myForm!: FormGroup;
  book!: Book;
  constructor(private fb: FormBuilder,private bookService: BookService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      author: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      genre: ['', [Validators.required]]
    });
  }
  
  onSubmit(form: FormGroup) {

    this.book=this.myForm.value;
    this.bookService.save(this.book).subscribe(data =>{
      Swal.fire({
        icon: 'success',
        text: "El libro fue añadido con exito"
      })
    })
  }

}
