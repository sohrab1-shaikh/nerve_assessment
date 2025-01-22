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

  dateArray: any = [];
  selectedDate = this.dateArray[0];
  strategyArray: any = [];

  arrList:any = [];

  ngOnInit(): void {
   
    this.tabChange(this.selectedView);
 
    if (this.dateArray.length > 0) {
      this.selectedDate = this.dateArray[0];
      this.onDateSelected(this.selectedDate);
    }
  }
  

  tabChange(tabName: string) {
    this.selectedView = tabName;
    console.log(tabName);
    this.dateArray = [];

    Strategy.forEach((element: any) => {
      if (element.View == tabName) {
        console.log();
        this.dateArray = Object.keys(element.Value);
      }
    });
  }

  onDateSelected(date: any) {

    console.log('onSelected= ', date);

    var result = Strategy.filter((obj: any) => {
      return obj.View == this.selectedView
    })

    console.log(result[0].Value[date]);

    const countMap: Record<string, number> = {};
    result[0].Value[date].forEach((element:any)=>{
      countMap[element] = (countMap[element] || 0) + 1;

    });

    console.log(this.arrList);
    this.arrList = Object.entries(countMap).map(([key, count]) => ({ key, count }));
 
    
  }

  test() {
    alert(1)
  }
}
