export default function joinWithComa(number) {
  const reversed = number.toString().split("").reverse();

  for (let i = 3; i < reversed.length; i += 4) {
    reversed.splice(i, 0, `,`);
  }

  return reversed.reverse().join("");
}
