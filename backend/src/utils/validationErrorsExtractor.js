export default function(errors) {
  const extractedErrors = {};
  errors.array().map(err => {

    if (extractedErrors.hasOwnProperty(err.path)) {
      return; // pick first error only
    }
    return extractedErrors[err.path] = err.msg;
  });

  return extractedErrors;
}
