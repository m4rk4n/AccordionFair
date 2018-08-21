import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { DataService } from './shared/dataService';


@Component({
  selector: 'entry',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent {
    constructor(private data: DataService) {
        setTheme("bs4");
        this.data.getBtcPrice()
            .subscribe(success => {
                if (success) {
                    this.btcPrice = this.data.btcPrice.toString();
                    this.btcPrice = this.btcPrice.substring(0, this.btcPrice.length-2);
                }
            });
    }

  btcPrice: string = "";
  title = 'Product List';
}
