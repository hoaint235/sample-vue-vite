export const isRequired = (
  val: any,
  errorMessage: string = "Field is required"
) => (val && val.length > 0) || errorMessage;

export const formatEmail = (
  val: any,
  errorMessage: string = "Please enter correct format email"
) => (val && val.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) || errorMessage;
