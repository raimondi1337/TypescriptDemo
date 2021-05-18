import * as React from 'react';
import { App } from './App';

export interface IMainProps
{
    app: App;
}

export class Main extends React.Component<IMainProps, {}>
{
    socket = new WebSocket('wss://www.cryptofacilities.com/ws/v1');
    count = 0;

    constructor(props: IMainProps)
    {
        super(props);
    }

    componentDidMount() {
        this.socket.onopen = () => {
            console.log('connected')
            this.socket.send('{"event":"subscribe","feed":"book_ui_1","product_ids":["PI_XBTUSD"]}');
        }

        this.socket.onmessage = evt => {
            this.count++;
            if (this.count >= 5) { this.socket.close(1000); }
            const message = JSON.parse(evt.data)
            this.setState({dataFromServer: message})
            console.log(message)
        }

        this.socket.onclose = () => {
            console.log('disconnected')
        }

    }

    public render(): JSX.Element
    {
        return (
            <>
                Main app
            </>
        );
    }
}