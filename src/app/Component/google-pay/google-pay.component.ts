import { Component, NgZone, OnInit } from '@angular/core';
import { WindowRefService} from '../../Service/window-ref.service';
import{render}from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-google-pay',
  templateUrl: './google-pay.component.html',
  styleUrls: ['./google-pay.component.css'],
})
export class GooglePayComponent implements OnInit {
  buttonColor = 'black';
  buttonType = 'buy';
  isCustomSize = false;
  buttonWidth = 240;
  buttonHeight = 40;
  isTop = window === window.top;

  paymentRequest : google.payments.api.PaymentDataRequest= {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '0.10',
      currencyCode: 'INR',
      countryCode: 'US',
    },
    callbackIntents:['PAYMENT_AUTHORIZATION']
  };

  onLoadPaymentData =(event: Event): void =>{
    // console.log('load payment data', event.detail);
    const eventDetail= event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetail.detail);
  }
  onPaymentDataAuthorized:google.payments.api.PaymentAuthorizedHandler=(
    paymentData
  )=>{
    console.log('payment authorized',paymentData);
    return{
      transactionState:'SUCCESS'
    }
  }
  onError=(event:ErrorEvent):void=>{
console.error('error',event.error);
  }
constructor( private auth:WindowRefService){

  
render(
  {
      id: "#myPaypalButtons",
      currency: "INR",
      value: "1",
      onApprove: (details) => {
  alert("Transaction Successful")
      }
    }
  );
}
  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Google Pay",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "vineet kadwey",
        "email": "vineet.brinfotech@gmail.com",
        "contact": "9644144505"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
  rzpl:any;
Pay(){
  this.options.amount="200"
this.rzpl= new this.auth.nativeWindow.Razorpay(this.options);
this.rzpl.open();
}





  ngOnInit(): void {}
}
