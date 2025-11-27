
interface ErrorMessageProps<T> {
  error: T;
}

const ErrorMessage = <T extends { message?: string }>({
  error,
}: ErrorMessageProps<T>) => {
  return (
    <div>
      <h1>Something went wrong...!</h1>
      <pre>{error.message}</pre>
    </div>
  );
};

export default ErrorMessage;
