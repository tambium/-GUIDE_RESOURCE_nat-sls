var fetch = require("isomorphic-unfetch");

exports.handler = async () => {
  var r = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  var j = await r.json();

  return {
    statusCode: 200,
    body: JSON.stringify(j),
  };
};
