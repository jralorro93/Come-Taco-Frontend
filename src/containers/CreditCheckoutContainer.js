import React, { Component } from 'react';
import {Elements} from 'react-stripe-elements';
import CreditForm from '../components/CreditForm'

class CreditCheckoutContainer extends Component {
    render() {
        return (
            <Elements>
                <CreditForm />
            </Elements>
        )
    }
}
export default CreditCheckoutContainer