import {LikeComponent} from './like.component'

let component = new LikeComponent(10, true);

// component.likesCount = 2;
// component.isSelected = false;
component.onClick();
console.log(`likesCount :${component.likesCount}, isSelected: ${component.isSelected}`);