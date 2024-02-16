import React from "react";
import "./button.component.scss";

export interface MyCompProps {
    label: string;
    secondary?: boolean
}

const Button = (props: MyCompProps): React.ReactElement => {
    const { label, secondary = false } = props;
    return <button className={`btn ${secondary ? "secondary-btn": ""}`}>{label}</button>;
};

export default Button;
