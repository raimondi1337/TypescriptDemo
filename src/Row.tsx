import React, { FunctionComponent } from 'react';

export interface IProps
{
    price: any;
    volume: any;
    total: any;
    type: any;
}

export const Row: FunctionComponent<IProps> = ({ price, volume, total,type }) => (
    <div style={{backgroundImage: 'linear-gradient(#262626, #222222)', display: 'flex', justifyContent:'space-between'}}>
        <div style={{width: '200px', color: type === 'bid' ? '#22ff22' : '#ff2222'}}>{Number(price).toFixed(2)}</div>
        <div style={{width: '200px', textAlign: 'right'}}>{volume}</div>
        <div style={{width: '200px', textAlign: 'right'}}>{total}</div>
    </div>
);