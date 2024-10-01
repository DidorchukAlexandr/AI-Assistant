const fields = {
  email: {
    label: "E-mail",
    name: "email",
    type: "email",
    required: true,
    placeholder: "E-mail",
  },
  password: {
    label: "Password",
    name: "password",
    type: "password",
    required: true,
    placeholder: "Password",
    minLength: 6,
  },
};

export default fields;
