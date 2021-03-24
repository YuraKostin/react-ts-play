import React from "react";

type Props = {
    msg: Array<string>,
    a?: number,
};

export const HelloWorld: React.FC<Props> = (props) => {
    return <span>{props.msg.join('-')}</span>
};