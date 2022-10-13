import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedNetwork: string = 'MTN'
  networks: Array<any>

  constructor() {
    this.networks = [
      { value: 'MTN', image: '/assets/images/mtn.jpeg', bgColor: 'bg-[#feca05]' },
      { value: 'VOD', image: '/assets/images/vod.jpg', bgColor: 'bg-[#e61e28]' },
      { value: 'AIR', image: '/assets/images/airt.webp', bgColor: 'bg-white' },
    ]
  }

  ngOnInit(): void {
  }

  setActiveNetwork(activeNetwork: string): void {
    this.selectedNetwork = activeNetwork
  }

}
