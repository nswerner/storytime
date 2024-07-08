'use client';

const Button = ({
  disabled,
  text,
  onKeyDown,
  onClick,
}: {
  className?: string;
  disabled: boolean;
  text: string;
  onKeyDown?: (
    event: React.KeyboardEvent<
      HTMLInputElement | HTMLButtonElement | HTMLSelectElement
    >
  ) => void;
  onClick: () => void;
}) => {
  return (
    <button
      className={`${
        disabled ? 'opacity-50' : 'button-glow'
      } block m-auto border border-white border-1 rounded w-1/2 py-1 box-sizing`}
      disabled={disabled}
      type="submit"
      onKeyDown={onKeyDown}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
