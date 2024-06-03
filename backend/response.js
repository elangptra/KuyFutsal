const response = (statusCode, data, message, res) => {
  res.json(statusCode, [
    {
      payload: data,
      message: message,
      pagination: {
        prev: "",
        next: "",
        max: "",
      },
    },
  ]);
};

export default response;