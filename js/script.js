// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20

const giveMovieTicketPrice = () => {
  const age = +prompt('Enter your age: ');

  if (age <= 12) {
    return `$10`;
  }

  if (age >= 13 && age <= 17) {
    return `$15`;
  }

  if (age >= 18) {
    return `$20`;
  }
};

const movieTicket = giveMovieTicketPrice();
console.log(movieTicket);

const square = (base, exp) => {
  if (exp === 0) {
    return 1;
  } else {
    return base * square(base, exp - 1);
  }
};

const result = square(4, 2);
console.log(result);
