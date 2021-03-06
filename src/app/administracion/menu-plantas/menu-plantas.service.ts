import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BASE_URL_SERVICE } from '../../constants';
import { User } from '../../models/user';

@Injectable()
export class MenuPlantasService {

  private URL = BASE_URL_SERVICE + '/CatalogoPlanta';

  constructor(private http: HttpClient) { }

  getAllPlanta(id_usuario_kiosko: number): Observable<any> {
    return this.http.get<any>(this.URL + '?action=getAllPlanta&id_usuario='+id_usuario_kiosko);
  }


}
