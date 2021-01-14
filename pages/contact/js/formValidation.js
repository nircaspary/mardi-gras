$("#form").validate({
  rules: {
    email: { required: true, email: true },
    firstName: { required: true },
    lastName: { required: true },
  },
});
