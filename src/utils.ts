/** Helper function to check if an unknown error is an ErrnoException with a specific code */
export function isError(
  error: unknown,
  code?: string
): error is ErrnoException {
  if (code) {
    return error instanceof Error && "code" in error && error.code === code;
  }

  return error instanceof Error && "code" in error;
}
