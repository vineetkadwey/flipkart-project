import {Injectable} from '@angular/core';


function _Window(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowRefService{

  get nativeWindow(): any {
    return _Window();
  }

}
