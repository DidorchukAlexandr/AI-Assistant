const fields = {
  email: {
    label: "Email",
    name: "email",
    type: "email",
    required: true,
    placeholder: "Email",
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
