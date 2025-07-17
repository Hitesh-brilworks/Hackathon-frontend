import "./button.scss";

export const Button = ({
  variant = "primary", // "primary" | "white" | "danger" | "outline-primary" | "outline-gray" | "outline-danger" | "outline-warning" | "icon" | "more-menu-item"
  size = "medium", // "small" | "medium" | "large"
  backgroundColor,
  label,
  icon,
  className,
  hideLabel = false,
  hideButton = false,
  ...props
}) => {
  if (hideButton) {
    return "";
  }
  const buttonLabel = hideLabel ? "" : label;
  return (
    <button
      type="button"
      className={[
        "storybook-button gap-2 outline-none overflow-hidden whitespace-nowrap",
        `storybook-button--${size}`,
        `storybook-button--${variant}`,
        className,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {icon}
      {buttonLabel}
    </button>
  );
};
