const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			plants: []
		},
		actions: {
			register: () => {fetch("https://3000-fb2d927c-ff50-44cd-93cf-eee2ce918a32.ws-us02.gitpod.io/register", {
				method: "POST",
				body: userRegisterData,
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(res => res.json())
				.then(res => {
					alert("REGISTER SUCCESSFUL");
					//console.log(res);
					history.push("/login");
				})
				.catch(error => {
					//console.log("Error:", error);
					alert("error", JSON.stringify(error));
				});

            },
			login: () => {fetch("", {
			method: "POST",
			body: userLoginData,
			cors: "no-cors",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
				let token = response.token;
				let email = response.email;
				let fname = response.fname;
				let lname = response.lname;
				if (!token && !email && !fname && !lname) {
					alert("Invalid Input, Please Try Again");
				} else {
					alert("LOGIN SUCCESSFUL");
					localStorage.setItem("token", token);
					localStorage.setItem("email", email);
					localStorage.setItem("firstname", fname);
					localStorage.setItem("lastname", lname);

					history.push("/");
				}
			})
			.catch(error => {
				alert("Something Went Wrong, Try again");
				console.log("Error:", error);
			});

            },
            getPlant: (name) => {
                fetch("https://trefle.io/api/plants?q=&token=NUl6YXBQa3RiVmlJQVVMZWZ2cWYxUT09" + name)
                .then(res => res.json())
                .then(data => {
                    setStore({plant: data})
					alert("Plant Received");
				})
            }
		}
	};
};

export default getState;
