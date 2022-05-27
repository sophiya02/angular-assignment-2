import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'table2-app',
  template: `
  <div>hello table2</div>
  <table mat-table  class="mat-elevation-z8">


  <!-- Position Column -->
  <ng-container matColumnDef="position">
    <th mat-header-cell > No. </th>
    <td mat-cell > element.position </td>
  </ng-container>

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell> Name </th>
    <td mat-cell > element.name </td>
  </ng-container>

  <!-- Weight Column -->
  <ng-container matColumnDef="weight">
    <th mat-header-cell> Weight </th>
    <td mat-cell > element.weight </td>
  </ng-container>

  <!-- Symbol Column -->
  <ng-container matColumnDef="symbol">
    <th mat-header-cell> Symbol </th>
    <td mat-cell > element.symbol </td>
  </ng-container>

  <tr mat-header-row ></tr>
  <tr mat-row></tr>
</table>

  `,
  styles: [
    `
    table{
      width: 50%;
    }
  `,
  ],
})
export class Table2Component {}
