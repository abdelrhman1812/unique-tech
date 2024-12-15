const ErrorMessage = ({ errorMsg }: { errorMsg: string }) => {
  return <span className="text-red-600">{errorMsg}</span>;
};

export default ErrorMessage;
