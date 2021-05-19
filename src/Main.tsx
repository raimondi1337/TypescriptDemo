import * as React from 'react';
import { App } from './App';
import { Chart } from './Chart';
import { fromPairs, reject, equals, mergeRight } from 'ramda';

export interface IProps
{
    app: App;
}

export interface IState
{
    asks: any;
    bids: any;
}

export class Main extends React.Component<IProps, IState>
{
    socket = new WebSocket('wss://www.cryptofacilities.com/ws/v1');
    count = 0;

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            asks: {},
            bids: {},
        };
    }

    componentDidMount() {
        this.socket.onopen = () => {
            console.log('connected')
            this.socket.send('{"event":"subscribe","feed":"book_ui_1","product_ids":["PI_XBTUSD"]}');
        }

        this.socket.onmessage = evt => {
            this.count++;
            if (this.count >= 1000) { this.socket.close(1000); }
            const message = JSON.parse(evt.data)

            if (message.numLevels) {
                this.setState({
                    asks: fromPairs(message.asks),
                    bids: fromPairs(message.bids)
                });
            } else {
                if(message.asks && message.asks.length > 0) {
                    let newAsks = mergeRight(this.state.asks, fromPairs(message.asks));
                    // @ts-ignore
                    let filteredAsks = reject(equals(0))(newAsks);
                    this.setState( { asks: filteredAsks });
                }

                if(message.bids && message.bids.length > 0) {
                    let newBids = mergeRight(this.state.bids, fromPairs(message.bids));
                    // @ts-ignore
                    let filteredBids = reject(equals(0))(newBids);
                    this.setState( {bids: filteredBids});
                }
            }
        }

        this.socket.onclose = () => {
            console.log('disconnected')
        }

    }

    public render(): JSX.Element
    {
        return (
            <Chart asks={this.state.asks} bids={this.state.bids} />
        );
    }
}