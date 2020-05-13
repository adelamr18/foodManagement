import React from "react";
import { Form } from "react-bootstrap";
import "./login-form.css";
import { confirmationButtonStyles } from "../../constants/defines";
import ConfirmationButton from "../confirmation-button/confirmation-button";

export interface loginFormProps {
  firstLabel: string;
  secondLabel: string;
  firstPlaceholderText: string;
  secondPlaceholderText: string;
  firstButtonText: string;
  secondButtonText: string;
  navigateToFirstButtonRoute: string;
  navigateToSecondButtonRoute: string;
}

export default function LoginForm(props: loginFormProps) {
  const {
    firstLabel,
    secondLabel,
    firstPlaceholderText,
    secondPlaceholderText,
    firstButtonText,
    secondButtonText,
    navigateToFirstButtonRoute,
    navigateToSecondButtonRoute
  } = props;

  return (
    <div className="login-form-container-inner">
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>{firstLabel}</Form.Label>
          <Form.Control type="email" placeholder={firstPlaceholderText} />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>{secondLabel}</Form.Label>
          <Form.Control type="password" placeholder={secondPlaceholderText} />
        </Form.Group>
        <div className="login-buttons-container">
          <div id="first-confirmation-button">
            <ConfirmationButton
              buttonText={firstButtonText}
              backgroundColor={confirmationButtonStyles.redButton}
              buttonTextColor={confirmationButtonStyles.whiteButtonText}
              currentRoute={navigateToFirstButtonRoute}
            />
          </div>
          <div id="second-confirmation-button">
            <ConfirmationButton
              buttonText={secondButtonText}
              backgroundColor={confirmationButtonStyles.whiteButton}
              buttonTextColor={confirmationButtonStyles.redButtonText}
              currentRoute={navigateToSecondButtonRoute}
            />
          </div>
        </div>
      </Form>
    </div>
  );
}
