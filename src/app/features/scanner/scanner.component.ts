import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  allowedFormats = [ BarcodeFormat.QR_CODE];
  details: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  scanSuccess(result: any): void {
    console.log(result)
    this.details = result
  }

  scanFailure(): void {
    alert('error occured scanning QR code')
  }

  scanComplete(res: any): void {}

}
