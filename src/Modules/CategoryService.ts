import { injectable } from 'inversify';
import { Observable } from 'rxjs';

@injectable()
export default class CategoryService {
  constructor() {
       //  code
  }

  getlist() {
    const myObservable = Observable.create((observer: any) => {
      observer.next([{ id: 1, name: "Công Nghệ" }, { id: 2, name : "Lập Trình" }]);
    });
    return myObservable
  }
  
}