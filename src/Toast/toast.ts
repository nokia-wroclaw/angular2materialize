import {Injectable} from 'angular2/core';
import * as _ from 'lodash';
import {Materialize} from '../materialize';

@Injectable()
export class BdToast {

  public static open(content: string, duration: number = 4000, isRounded: boolean = false, onClose: Function = _.noop) {
    Materialize.toast(content, duration, isRounded ? 'rounded' : '', onClose);
  }
}
