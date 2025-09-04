"use client";
import { HtmlHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";
import { PiSpinner } from "react-icons/pi";

export type FormButtonProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export default function FormButton({
  loading = false,
  className,
  children,
  ...props
}: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <div>
      <button className={className} {...props} disabled={loading || pending}>
        {loading || pending ? (
          <PiSpinner className="animate-spin" />
        ) : (
          <>{children}</>
        )}
      </button>
    </div>
  );
}
