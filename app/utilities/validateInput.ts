function validate_input(user_input) {
  // Define a whitelist of acceptable characters (e.g., alphanumeric and basic punctuation)
  if (!user_input.match(/^[a-zA-Z0-9 ,!']*$/)) {
    return false;
  }

  // Limit input length
  if (user_input.length > 25) {
    return false;
  }

  return true;
}

function sanitize_input(user_input) {
  // Escape HTML special characters
  var sanitized = user_input
    .replace('&', '&amp;')
    .replace('<', '&lt;')
    .replace('>', '&gt;');

  return sanitized;
}

function handle_user_input(user_input) {
  if (!validate_input(user_input)) {
    return 'Invalid input. Please try again.';
  }
  var sanitized_input = sanitize_input(user_input);
  // Use the sanitized input in a safe context
  return sanitized_input;
}

// Example usage
var user_input = "<script>alert('hacked');</script>";
var response = handle_user_input(user_input);
console.log(response);
