// const square = (x) => x * x;
// console.log(square(3));

const event = {
  name: "Birthday",
  guestList: ["Andrew", "John", "Jeff"],
  printGuestList: () => {
    console.log(`Guest list for ${event.name}`);
    event.guestList.forEach((guest) => {
      console.log(`${guest} is attending ${event.name}`);
    });
  },
};

event.printGuestList();
