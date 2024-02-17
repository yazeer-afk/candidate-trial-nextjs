import "./button.component.scss";

export interface ButtonProps {
    label: string;
    secondary?: boolean
}

const Button = (props: ButtonProps): React.ReactElement => {
    const { label, secondary = false } = props;
    return <button className={`btn ${secondary ? "secondary-btn": ""}`}>{label}</button>;
};

export default Button;
