import "./button.component.scss";

export interface ButtonProps {
    label: string;
    secondary?: boolean
    className?: string
}

const Button = (props: ButtonProps): React.ReactElement => {
    const { label, secondary = false, className = "" } = props;
    return <button className={`btn ${secondary ? "secondary-btn": ""} ${className}`}>{label}</button>;
};

export default Button;
