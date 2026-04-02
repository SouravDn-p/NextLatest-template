"use client";

import { Eye, EyeOff } from "lucide-react";
import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  showPasswordToggle?: boolean;
  validationError?: string;
  isValid?: boolean;
  className?: string;
  containerClassName?: string;
  iconContainerClassName?: string;
  inputContainerClassName?: string;
  validationIcon?: React.ReactNode;
  validationContainerClassName?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    icon,
    iconPosition = "left",
    showPasswordToggle = false,
    validationError,
    isValid,
    className = "",
    containerClassName = "",
    iconContainerClassName = "",
    inputContainerClassName = "",
    validationIcon,
    validationContainerClassName = "",
    type,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Expose input ref to parent components
  useImperativeHandle(ref, () => inputRef.current!);

  const isPasswordInput = type === "password";
  const actualType = isPasswordInput && showPassword ? "text" : type;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Determine input border color based on validation state
  const borderColor = validationError
    ? "border-red-500"
    : isValid === false
      ? "border-red-500"
      : isValid === true
        ? "border-green-500"
        : isFocused
          ? "border-primary"
          : "border-border";

  return (
    <div className={`flex flex-col space-y-2 ${containerClassName}`}>
      {label && (
        <label
          htmlFor={rest.id}
          className="block text-sm font-medium text-foreground mb-1"
        >
          {label}
        </label>
      )}

      <div className={`relative flex items-center ${inputContainerClassName}`}>
        {/* Left icon */}
        {icon && iconPosition === "left" && (
          <div
            className={`absolute left-3 z-10 pointer-events-none flex items-center justify-center ${iconContainerClassName}`}
          >
            <span className="text-muted-foreground">{icon}</span>
          </div>
        )}

        <input
          {...rest}
          ref={inputRef}
          type={actualType}
          className={`
            w-full px-4 py-3 bg-background ${iconPosition === "left" ? "pl-10" : ""} ${iconPosition === "right" ? "pr-10" : ""}
            border ${borderColor} rounded-md shadow-sm
            focus:outline-none focus:ring-2 focus:ring-primary/30
            transition-all duration-300
            ${isFocused ? "ring-2 ring-primary/30 " : ""}
            ${validationError ? "ring-2 ring-red-500/30" : ""}
            ${className}
          `}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {/* Right icon or password toggle */}
        {(icon && iconPosition === "right") ||
        (isPasswordInput && showPasswordToggle) ? (
          <div
            className={`absolute right-3 z-10 flex items-center justify-center ${iconContainerClassName}`}
          >
            {isPasswordInput && showPasswordToggle ? (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-muted-foreground hover:text-foreground focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  // Eye slash icon
                  <EyeOff className="cursor-pointer" size={20} />
                ) : (
                  // Eye icon
                  <Eye className="cursor-pointer" size={20} />
                )}
              </button>
            ) : (
              <span className="text-muted-foreground">{icon}</span>
            )}
          </div>
        ) : null}

        {/* Validation indicator */}
        {isValid !== undefined && validationIcon && (
          <div
            className={`absolute ${iconPosition === "right" ? "right-10" : "right-3"} z-10 flex items-center justify-center ${validationContainerClassName}`}
          >
            {isValid ? (
              <span className="text-green-500">{validationIcon}</span>
            ) : (
              <span className="text-red-500">{validationIcon}</span>
            )}
          </div>
        )}
      </div>

      {/* Error message */}
      {validationError && (
        <p className="text-sm text-red-500 mt-1">{validationError}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
