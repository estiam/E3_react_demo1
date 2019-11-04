import React from 'react';

const person = {
  firstName: 'Bruce',
  lastName: 'Wayne',
}

const MySecondComponent = () => {

  person.firstName = "Thomas";

  setTimeout(() => {
    person.firstName = "Martha";
    alert("DUN NUN NUN NUN NUN NUN NUN NUN NUN NUN NUN NUN NUN NUN NUN NUN NUN BATMAN !")
  }, 5000);

  return (
    <div>
      <div>This is my second component</div>
      <div>My name is {person.firstName} {person.lastName}</div>
    </div>
  );
}

export default MySecondComponent;