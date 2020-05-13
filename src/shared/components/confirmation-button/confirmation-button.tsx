import React from "react";
import "./confirmation-button.css";
import { Link } from "react-router-dom";

export interface confirmationButtonProps {
  backgroundColor: string;
  buttonText: string;
  buttonTextColor: string;
  currentRoute: string;
}

export default function ConfirmationButton(props: confirmationButtonProps) {
  const { backgroundColor, buttonText, buttonTextColor, currentRoute } = props;
  return (
    <div className={backgroundColor}>
      <Link to={currentRoute}>
        <span id={buttonTextColor}>{buttonText}</span>
      </Link>
    </div>
  );
}
