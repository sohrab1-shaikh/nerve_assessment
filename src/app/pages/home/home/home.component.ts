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
    // console.log('Strategy==========',Strategy);
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

    this.arrList = [];
    result[0].Value[date].forEach((element:any)=>{
      this.arrList.push({key: element, count:1});

    });

    console.log(this.arrList);
 
    // let dupli = Object.entries(result[0].Value[date])
    //   .filter((key, value) => value > 1)
    //   .map(([key, value]) => ({ item: key, c: value }));

    //   console.log(dupli);
  }

  test() {
    alert(1)
  }
}
