import * as React from 'react';
import {Row} from "./Row";

export interface IProps
{
    bids: any;
}

export class BidsSection extends React.Component<IProps, {}>
{

    constructor(props: IProps)
    {
        super(props);
    }

    componentDidMount() {
    }

    public render(): JSX.Element
    {
        return (
            <div style={{maxHeight: '300px', overflow: 'hidden', display: 'flex', flexDirection: 'column-reverse'}}>
                {this.props.bids &&
                    Object.entries(this.props.bids).map(([p, v]) => <Row key={p} price={p} volume={v} total={0} type={'bid'} />)
                }
            </div>
        );
    }
}