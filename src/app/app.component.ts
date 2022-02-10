import { Component } from '@angular/core';
import { QUOTES } from './models/database';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  quotes: Quotation[] = QUOTES;
  //pole quotation reprezentuje pojedynczy cytat
  quotation: Quotation = { author: '', sentence: '', votes: 0 };

  // przełącza pole klasy true / false
  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

    // dodaje cytat na początek listy i resetuje pole quotation
  addQuotation() {
    this.quotes.unshift(this.quotation);
    this.quotation = { author: '', sentence: '', votes: 0 };
  }

  // metoda obsługuje głosowanie na konkretny cytat
  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }

  bestQuotes() {
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes() {
    return this.quotes.filter(q => q.votes < 0);
  }
}
