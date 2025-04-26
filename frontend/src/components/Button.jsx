import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${({ $isIcon }) => ($isIcon ? "0.75rem" : "0.75rem 1.25rem")};
  border-radius: ${({ theme }) => theme.radii.small};
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  white-space: nowrap;

  ${({ $variant, theme }) =>
    $variant === "primary" &&
    `
    background-color: ${theme.colors.primary};
    color: white;

    &:hover {
      background-color: ${theme.colors.primaryDark};
    }
  `}

  ${({ $variant, theme }) =>
    $variant === "success" &&
    `
    background-color: ${theme.colors.success};
    color: white;

    &:hover {
      background-color: ${theme.colors.successDark};
    }
  `}

  ${({ $variant, theme }) =>
    $variant === "ghost" &&
    `
    background-color: transparent;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};

    &:hover {
      background-color: rgba(99, 102, 241, 0.1);
    }
  `}

  ${({ $isIcon }) =>
    $isIcon &&
    `
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

const Button = ({
  children,
  variant = "primary",
  icon,
  isIcon = false,
  ...props
}) => {
  return (
    <StyledButton $variant={variant} $isIcon={isIcon} {...props}>
      {icon}
      {!isIcon && children}
    </StyledButton>
  );
};

export default Button;
