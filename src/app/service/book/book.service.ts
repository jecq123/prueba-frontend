import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/model/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private usersUrl: string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:80/api/books';
   }

  getAll(): Observable<Book[]> {
     return this.http.get<Book[]>(this.usersUrl+"/all");
  }

  public save(book: Book) {
    return this.http.post<Book>(this.usersUrl+"/new", book);
  }

  getByAuthor(author:String): Observable<Book[]> {
    return this.http.get<Book[]>(this.usersUrl+"/author/"+author);
 }
  getByPublisher(publisher:String): Observable<Book[]> {
  return this.http.get<Book[]>(this.usersUrl+"/publisher/"+publisher);
  }

  deleteByIsbn(isbn:number){
    return this.http.delete<Book>(this.usersUrl+"/isbn/"+isbn);
  }

}
