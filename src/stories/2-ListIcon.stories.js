import React from 'react';
import { ItemComponent } from '../components/ReceiptComponent/ItemComponent'
import { withKnobs, number, text } from "@storybook/addon-knobs";

export default {
  title: 'Single list items',
  decorators: [withKnobs]
};

export const item = () => (
    <ItemComponent quantity={number("Quantity", 8)} item={text("Item", "Cashew Nuts", 0)} price={number("Price", 10.0)} discount={text("Discount", "1/2 Special Discount", 0)} discountamount={number("Discount Amount", -5.0)} description={text("Description", "0.962 kg @ $3.90/kg", 0)}/>
);