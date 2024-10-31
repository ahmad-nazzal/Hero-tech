import React from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface CustomButtonProps extends ButtonProps {
  sizeVariant?: "sm" | "md" | "lg";
  text?: string;
  icon?: React.ReactNode | string | StaticImageData;
}

interface IconWrapperProps {
  icon: React.ReactNode | string | StaticImageData;
  sizeVariant?: "sm" | "md" | "lg";
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon, sizeVariant }) => {
  if (!icon) return null;

  // Adjust icon size based on button sizeVariant
  const iconSize = sizeVariant === "sm" ? "19px" : "26px"; // Smaller for 'sm'
  const marginLeft = sizeVariant === "sm" ? "8px" : "12px";

  const iconContainerStyle = {
    position: "relative" as const,
    width: iconSize,
    height: iconSize,
    marginLeft: marginLeft,
    display: "flex",
    alignItems: "center",
  };

  // Handle StaticImageData (imported images)
  if (typeof icon === "object" && "src" in icon) {
    return (
      <div style={iconContainerStyle}>
        <Image
          src={icon}
          alt="button icon"
          fill
          sizes={iconSize}
          style={{ objectFit: "contain" }}
        />
      </div>
    );
  }

  // Handle URL strings as paths
  if (typeof icon === "string") {
    return (
      <div style={iconContainerStyle}>
        <Image
          src={icon}
          alt="button icon"
          fill
          sizes={iconSize}
          style={{ objectFit: "contain" }}
        />
      </div>
    );
  }

  // If the icon is a React component
  return (
    <span
      style={{ marginLeft: marginLeft, display: "flex", alignItems: "center" }}
    >
      {icon}
    </span>
  );
};

const Button: React.FC<CustomButtonProps> = ({
  sizeVariant = "md",
  text,
  icon,
  children,
  ...rest
}) => {
  const sizeStyles = {
    sm: {
      width: "140px",
      height: "44px",
    },
    md: {
      width: "200px",
      height: "60px",
    },
    lg: {
      width: "310px",
      height: "80px",
    },
  };

  return (
    <ChakraButton
      borderRadius="10px"
      padding="0 16px"
      _hover={{ opacity: 0.9 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...sizeStyles[sizeVariant]}
      {...rest}
    >
      <IconWrapper icon={icon} sizeVariant={sizeVariant} />
      {text || children}
    </ChakraButton>
  );
};

export default Button;
