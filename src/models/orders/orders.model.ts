import {KeyCarModel} from './keyCar.model';
import {MasterCallModel} from './masterCall.model';

export interface OrdersModel {
  keyCar: KeyCarModel[];
  masterCalls: MasterCallModel[];
}
