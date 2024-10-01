const fields = {
  name: {
    label: "Name",
    name: "name",
    type: "text",
    required: true,
    placeholder: "Name",
    autoComplete: "off",
    minLength: 2,
  },
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
