import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  ,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  readonly baseUrlProduct = 'https://localhost:44323/api/product';

  constructor(private http : HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>(this.baseUrlProduct + '/getall')
  }

  addProductCategory(val : any , fileToUpload: File):Observable<any>
  {

    const formData: FormData = new FormData();
    //formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('Image', fileToUpload);
    formData.append('Value', JSON.stringify(val));
    return this.http.post<any>(this.baseUrlProduct + '/create' , formData);
  }

  deleteProduct(id : any):Observable<any>
  {
    return this.http.delete<any>(this.baseUrlProduct + '/delete/' + `${id}`);
  }

  getImage():Observable<any>
  {
    return this.http.get<any>(this.baseUrlProduct + '/GetImage');
  }

  updateProduct(val : any , fileToUpload : File):Observable<any>
  {
    const formData: FormData = new FormData();
    //formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('Image', fileToUpload);
    formData.append('Value', JSON.stringify(val));
    return this.http.put<any>(this.baseUrlProduct + '/update' , formData);
  }



}




