export function userExists(arr, username) {
  return arr.some((el) => el.name.toLowerCase() === username.toLowerCase());
}
