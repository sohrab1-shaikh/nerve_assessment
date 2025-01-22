import { Component, OnInit } from '@angular/core';
import { Strategy } from '../../../services/mock_data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(

  ) {
    console.log("HomeComponent ");
  }

  selectedView = 'Bullish';
  views = ['Bullish', 'Bearish', 'RangeBound', 'Volatile'];

  dateArray = ['24-Apr-2024', '02-May-2024', '09-May-2024', '31-May-2024', '21-Jun-2024'];
  selectedDate = this.dateArray[0];

  ngOnInit(): void {
    // console.log('Strategy==========',Strategy);
  }

  tabChange() {
    alert('tabChange')
  }

  onSelected() {
    alert("onSelected")
  }

  test() {
    alert(1)
  }
}
