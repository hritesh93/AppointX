import React from "react";

export const ContactsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};