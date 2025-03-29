import { Button } from './ui/button';
import ClipLoader from 'react-spinners/ClipLoader';
export default function SubmitButton({
  isLoading,
  text,
  className,
  size,
  onClick,
  color,
}: {
  onClick?: () => void;
  isLoading: boolean;
  text: string;
  className?: string;
  size?: 'lg';
  color?: string;
}) {
  return (
    <Button
      onClick={onClick}
      size={size ? size : 'sm'}
      disabled={isLoading}
      type='submit'
      className={className}>
      {isLoading ? (
        <>
          <ClipLoader
            color={color ? color : '#ffffff'}
            size={20}
            aria-label='Loading Spinner'
          />
          <span>Please wait...</span>
        </>
      ) : (
        text
      )}
    </Button>
  );
}
