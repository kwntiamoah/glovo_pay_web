import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ScannerService } from 'src/app/services/scanner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedNetwork: string = 'MTN'
  driver_id: string = ''
  networks: Array<any>
  isLoading: boolean = false
  paymentForm: FormGroup = new FormGroup({})

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private scanner: ScannerService) {
    this.networks = [
      { value: 'MTN', image: '/assets/images/mtn.jpeg', bgColor: 'bg-[#feca05]' },
      { value: 'VOD', image: '/assets/images/vod.jpg', bgColor: 'bg-[#e61e28]' },
      { value: 'AIR', image: '/assets/images/airt.webp', bgColor: 'bg-white' },
    ]

    this.paymentForm = this.fb.group({
      mobile: ["", [Validators.required]],
      amount: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.driver_id = params['driver_id']
      console.log(this.driver_id)
    });
  }

  // getter fxns
  get mobile() { return this.paymentForm.get('mobile') }
  get amount() { return this.paymentForm.get('amount') }

  setActiveNetwork(activeNetwork: string): void {
    this.selectedNetwork = activeNetwork
  }

  makePayment(): void {

    this.isLoading = true

    const payload = {
      amount: this.amount?.value,
      network: this.selectedNetwork,
      pan: this.mobile?.value,
      driver_id: this.driver_id
    }

    this.scanner.scanToPay(payload)
      .subscribe({
        next: res => {
          console.log(res)
          this.paymentForm.reset()
          this.isLoading = false
        },
        error: error => {
          console.log(error)
          this.isLoading = false
          this.paymentForm.reset()
        }
      })
  }

}
