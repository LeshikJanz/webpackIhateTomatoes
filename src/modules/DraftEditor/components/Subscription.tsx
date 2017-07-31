import * as React from 'react'

const Subscription = () => {


  return (
    <div class="profile btn-group" dropdown placement="bottom">
      <div dropdownToggle class="btn btn-primary drop-button">
        <img class="user-img" src={ user.avatar }>
        <div>
          <div class="user-name">{{ user && user.firstName}} {{ user && user.lastName}}</div>
        </div>
      </div>
      <div>
        <img class="user-img" src="assets/img/help.png">
      </div>
      <ul *dropdownMenu class="dropdown-menu" role="menu">
      <li *ngFor="let option of options" role="menuitem" (click)="onTypeChanged(option)">
        {{ option.action}}
      </li>
      </ul>
    </div>
  )
}
