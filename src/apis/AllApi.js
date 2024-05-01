export const BASE_URL = "http://localhost:3000";

export const signupApi = (requestBody) => {
  console.log(JSON.stringify(requestBody));

  fetch(BASE_URL + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then(async (response) => {
      const output = await response.json();
      return output;
    })
    .catch((err) => {
      console.log("The error is ", err);
    });
};

export const loginApi = async (requestBody) => {

  const response = await fetch(BASE_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
  const output = await response.json();
  localStorage.setItem("user_login_token", output.token);

  return output;
};

export const addTask = (requestBody, token) => {
    fetch(BASE_URL + "/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(requestBody),
      })
        .then(async (response) => {
            console.log("reponse is ", response)
          const output = await response.json();
          localStorage.setItem("user_login_token", output.token);

          return output;

        })
        .catch((err) => {
          console.log("The error is ", err);
        });
}

export const getAllTask = async (token) => {
  const response = await fetch(BASE_URL + "/task", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authorization" : `Bearer ${token}`
    }
  })
    
  const output = await response.json();
  console.log(output)
  return output;

}