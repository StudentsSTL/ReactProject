// import React, { Component } from 'react';
import {useState} from "react"
import './css/App.css';
import './css/example5.css';
import './css/base.css';
import './css/modal.css';
import './css/receipt.css';

function NewForm() {

  const [open, setOpen] = useState(true);

  return (
    <div className="form">
      <button id="myBtn" onClick={()=> {setOpen(true)}}>Open modal</button>
  
  {open &&
      <div className="modal" id="myModal">
        <section className="container-lg modal-content" id="deposit-section">
        <div className="deposit-header">
        <div className="deposit-title"><b>Deposit</b><span className="close"><svg onClick={()=>{setOpen(false)}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
					</svg></span></div>
        </div>
        <div className="cell example example5" id="example-5">
<form>
<div id="example5-paymentRequest"></div>

<fieldset><legend className="payment-request-available" data-tid="elements_examples.form.enter_card_manually">Or enter card details</legend>
<div className="status-error">
   <p>Error 404</p>
</div>
<div className="row">
<div className="field"><label data-tid="elements_examples.form.name_label" for="example5-amount">Enter amount</label> <input autocomplete="amount" className="input" data-tid="elements_examples.form.name_placeholder" id="example5-amount" style={{paddingTop: "8.4px", paddingBottom: "7.4px"}} placeholder="" required=""/></div>
</div>
<div id="amount-error-stripe">
   Minimum amount is €0.50
</div>

<div className="row">
<div className="field"><label data-tid="elements_examples.form.phone_label" for="example5-phone">Enter your phone number</label> <input autocomplete="tel" className="input" data-tid="elements_examples.form.phone_placeholder" id="example5-phone" style={{paddingTop: "8.4px", paddingBottom: "7.4px"}} placeholder="" required="" type="text" /></div>
</div>

<div className="row">
<div className="field">
<fieldset  style={{width:"100%"}} className="field-status">

<div className="field-data">
<label data-tid="elements_examples.form.email_label" for="example5-name">Name</label> 
<div style={{position: "relative"}}><svg className="icon1 input-icon" fill="none" height="32" id="i-user" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"> <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z"></path> </svg> <input autocomplete="name" className="input" data-tid="elements_examples.form.email_placeholder" id="example5-name" required="" style={{paddinLeft:"2.3em", paddingTop: "8.4px", paddingBottom: "7.4px"}} type="text" placeholder=""/></div>
</div>

<div className="field-data-1" style={{padding:"5px"}}></div>

<div className="field-data">
<label data-tid="elements_examples.form.email_label" for="example5-email">Email</label> 
<div style={{position: "relative"}}><svg className="icon2 input-icon" fill="none" height="32" id="i-user" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"> <path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6"></path> </svg> <input autocomplete="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"  className="input" data-tid="elements_examples.form.email_placeholder" id="example5-email" placeholder="" required="" style={{paddingTop: "8.4px", paddingBottom: "7.4px", paddingLeft:"2.3em"}} type="text" /></div>
</div>

</fieldset>
</div>
</div>

<div className="row" style={{borderBottom:"1px solid #e5e5e5", paddingBottom:"7px"}}>
<div className="field"><label data-tid="elements_examples.form.card_label" for="example5-card">Credit or debit card</label>

<div className="input" id="example5-card" style={{paddingTop: "8.4px", paddingBottom: "7.4px"}}></div>
</div>
</div>
<button data-tid="elements_examples.form.pay_button" type="submit">Pay €</button></fieldset>

<div className="error" role="alert"></div>
</form>
</div>
        </section>
        </div>
}
    </div>
 );
}


export default NewForm;
