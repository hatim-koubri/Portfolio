import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  showArrow?: boolean;
  className?: string;
};

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AnchorButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = NativeButtonProps | AnchorButtonProps;

function isAnchorButtonProps(props: ButtonProps): props is AnchorButtonProps {
  return typeof props.href === "string";
}

const variants = {
  primary:
    "border-transparent bg-accent text-accent-foreground shadow-[0_12px_32px_color-mix(in_srgb,var(--accent)_24%,transparent)] hover:brightness-110",
  secondary:
    "border-border bg-card text-foreground hover:bg-muted",
  ghost:
    "border-transparent bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
};

const sizes = {
  sm: "h-9 gap-2 px-3 text-sm",
  md: "h-10 gap-2.5 px-4 text-sm",
  lg: "h-12 gap-3 px-5 text-base",
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    icon,
    showArrow = false,
    className,
  } = props;
  const classes = cn(
    "inline-flex items-center justify-center rounded-md border font-medium tracking-normal transition duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {showArrow ? <ArrowRight className="size-4" /> : null}
    </>
  );

  if (isAnchorButtonProps(props)) {
    const {
      href,
      children: _children,
      variant: _variant,
      size: _size,
      icon: _icon,
      showArrow: _showArrow,
      className: _className,
      ...anchorProps
    } = props;

    void _children;
    void _variant;
    void _size;
    void _icon;
    void _showArrow;
    void _className;

    return (
      <a className={classes} href={href} {...anchorProps}>
        {content}
      </a>
    );
  }

  const buttonPropsSource: NativeButtonProps = props;
  const {
    children: _children,
    variant: _variant,
    size: _size,
    icon: _icon,
    showArrow: _showArrow,
    className: _className,
    type = "button",
    ...buttonProps
  } = buttonPropsSource;

  void _children;
  void _variant;
  void _size;
  void _icon;
  void _showArrow;
  void _className;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {content}
    </button>
  );
}
