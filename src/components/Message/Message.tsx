import React from 'react';

import styleClasses from './Message.module.scss';

type MessageProps = {
    score: 'full' | 'consecutive' | 'inconsecutive' | '';
};

export const loserMessages = [
    'Not quite 😕'
];

export const winnerMessages: { [type: string]: string } = {
    full: 'You won $100 🎉',
    consecutive: 'You won $20 🍻',
    inconsecutive: 'You won $10 🍺'
};

const Message: React.FC<MessageProps> = ({ score }: MessageProps) => {
    let message;
    if (typeof winnerMessages[score] !== 'undefined') {
        message = winnerMessages[score];
    } else {
        message = loserMessages + ' ';
    }

    return <p className={styleClasses['message']}>{message}</p>;
};

export default Message;
