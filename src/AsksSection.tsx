import * as React from 'react';
import { Row } from './Row';

export interface IProps
{
    asks: any;
}

export class AsksSection extends React.Component<IProps, {}>
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
            <div style={{maxHeight: '300px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                {this.props.asks &&
                    Object.entries(this.props.asks).map(([p, v]) => <Row key={p} price={p} volume={v} total={0} type={'ask'} />)
                }
            </div>
        );
    }
}