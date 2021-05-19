import * as React from 'react';
import {AsksSection} from "./AsksSection";
import {BidsSection} from "./BidsSection";

export interface IProps
{
    asks: any;
    bids: any;
}

export class Chart extends React.Component<IProps, {}>
{

    constructor(props: IProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        return (
            <div style={{display: 'flex', flexDirection: 'column', fontSize: '16px', color: '#AAAAAA', alignItems: 'center', justifyContent: 'center'}}>
                    <AsksSection asks={this.props.asks} />
                    <BidsSection bids={this.props.bids} />
            </div>
        );
    }
}