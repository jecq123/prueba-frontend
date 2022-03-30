import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Book } from '../model/book';
import { BookService } from '../service/book/book.service';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {

  books!: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe({
      next: (data: Book[]) =>{
        this.books=data
      },
    error: error=>{
      Swal.fire({
        icon: 'error',
        text: error.error.message
      })
    }
  });
  }

  findByAuthor(author: String){
    if(author!=""){
      this.bookService.getByAuthor(author).subscribe({
        next:(data:Book[])=>{
          this.books=data
        },
        error: error=>{
          Swal.fire({
            icon: 'error',
            text: error.error.message
          })
        }
      })
    }
  }

  findByPublisher(publisher:String){
    if(publisher!=""){
      this.bookService.getByPublisher(publisher).subscribe({
        next:(data:Book[])=>{
          this.books=data
        },
        error: error=>{
          Swal.fire({
            icon: 'error',
            text: error.error.message
          })
        }
      })
    }
  }

  deleteByIsbn(book:Book){
    if(book!=null){
      
      this.bookService.deleteByIsbn(book.isbn).subscribe({
        next: data=>{
          this.books.splice(this.books.indexOf(book),1)
          Swal.fire({
            icon: 'success',
            text: "Se ha eliminado el libro con exito"
          })
        },
        error: error=>{
          Swal.fire({
            icon: 'error',
            text: error.error.message
          })
        }
      
      })
    }
  }

}
