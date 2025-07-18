import { Tooltip } from "react-tooltip";
import "./tooltip.scss";

export const SBTooltip = ({
  id,
  variant = "primary", // "primary", "white", "warning", "danger"
  place = "bottom",
  message,
  className,
}) => {
  return (
    <Tooltip
      globalCloseEvents={{
        clickOutsideAnchor: true,
        scroll: true,
        escape: true,
        resize: true,
      }}
      anchorSelect={`#${id}`}
      openEvents={{
        click: true,
        focus: true,
        mouseenter: true,
        mousedown: true,
        mouseover: true,
      }}
      place={place}
      className={[
        "storybook-tooltip",
        `storybook-v-${variant}`,
        className,
      ].join(" ")}
      content={message}
    />
  );
};
