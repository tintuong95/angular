import { Component } from "@angular/core";

@Component({
  selector: "card",
  template: `
    <nz-card nzHoverable style="width:240px" [nzCover]="coverTemplate">
      <nz-card-meta
        nzTitle="BMI-Calculator"
        nzDescription="https://repl.it/@speed785/BMI-Calculator"
      ></nz-card-meta>
    </nz-card>
    <ng-template #coverTemplate>
      <img
        alt="example"
        src="https://pbs.twimg.com/profile_images/1180247674949271552/A3b7l-9B.jpg"
      />
    </ng-template>
  `
})
export class CardComponent {}
