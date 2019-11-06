const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			plants: [
				{
					slug: "vaccinium-vitis-idaea",
					scientific_name: "Vaccinium vitis-idaea",
					link: "http://trefle.io/api/plants/190891",
					id: 190891,
					complete_data: true,
					common_name: "lingonberry",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "verbesina-encelioides",
					scientific_name: "Verbesina encelioides",
					link: "http://trefle.io/api/plants/191266",
					id: 191266,
					complete_data: true,
					common_name: "golden crownbeard",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "botrychium-lanceolatum",
					scientific_name: "Botrychium lanceolatum",
					link: "http://trefle.io/api/plants/112085",
					id: 112085,
					complete_data: true,
					common_name: "lanceleaf grapefern",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "botrychium-lunaria",
					scientific_name: "Botrychium lunaria",
					link: "http://trefle.io/api/plants/112092",
					id: 112092,
					complete_data: true,
					common_name: "common moonwort",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "bouteloua-hirsuta",
					scientific_name: "Bouteloua hirsuta",
					link: "http://trefle.io/api/plants/112210",
					id: 112210,
					complete_data: true,
					common_name: "hairy grama",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "brassica-napus",
					scientific_name: "Brassica napus",
					link: "http://trefle.io/api/plants/112482",
					id: 112482,
					complete_data: true,
					common_name: "rape",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "brassica-juncea",
					scientific_name: "Brassica juncea",
					link: "http://trefle.io/api/plants/112475",
					id: 112475,
					complete_data: true,
					common_name: "brown mustard",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "bromus-kalmii",
					scientific_name: "Bromus kalmii",
					link: "http://trefle.io/api/plants/112908",
					id: 112908,
					complete_data: true,
					common_name: "arctic brome",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "briza-maxima",
					scientific_name: "Briza maxima",
					link: "http://trefle.io/api/plants/112717",
					id: 112717,
					complete_data: true,
					common_name: "big quakinggrass",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "bromus-arvensis",
					scientific_name: "Bromus arvensis",
					link: "http://trefle.io/api/plants/112796",
					id: 112796,
					complete_data: true,
					common_name: "field brome",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "bromus-ciliatus",
					scientific_name: "Bromus ciliatus",
					link: "http://trefle.io/api/plants/112835",
					id: 112835,
					complete_data: true,
					common_name: "fringed brome",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "danthonia-intermedia",
					scientific_name: "Danthonia intermedia",
					link: "http://trefle.io/api/plants/127275",
					id: 127275,
					complete_data: true,
					common_name: "timber oatgrass",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "bromus-inermis",
					scientific_name: "Bromus inermis",
					link: "http://trefle.io/api/plants/112884",
					id: 112884,
					complete_data: true,
					common_name: "smooth brome",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "bromelia-pinguin",
					scientific_name: "Bromelia pinguin",
					link: "http://trefle.io/api/plants/112781",
					id: 112781,
					complete_data: true,
					common_name: "pinguin",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "bromus-vulgaris",
					scientific_name: "Bromus vulgaris",
					link: "http://trefle.io/api/plants/113017",
					id: 113017,
					complete_data: true,
					common_name: "Columbia brome",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "calamagrostis-rubescens",
					scientific_name: "Calamagrostis rubescens",
					link: "http://trefle.io/api/plants/113890",
					id: 113890,
					complete_data: true,
					common_name: "pinegrass",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "bucida-buceras",
					scientific_name: "Bucida buceras",
					link: "http://trefle.io/api/plants/113405",
					id: 113405,
					complete_data: true,
					common_name: "gregorywood",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "calophyllum-antillanum",
					scientific_name: "Calophyllum antillanum",
					link: "http://trefle.io/api/plants/114395",
					id: 114395,
					complete_data: true,
					common_name: "Antilles calophyllum",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "calamagrostis-coarctata",
					scientific_name: "Calamagrostis coarctata",
					link: "http://trefle.io/api/plants/113841",
					id: 113841,
					complete_data: true,
					common_name: "Nuttall's reedgrass",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "cajanus-cajan",
					scientific_name: "Cajanus cajan",
					link: "http://trefle.io/api/plants/113766",
					id: 113766,
					complete_data: true,
					common_name: "pigeonpea",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "callitriche-palustris",
					scientific_name: "Callitriche palustris",
					link: "http://trefle.io/api/plants/114228",
					id: 114228,
					complete_data: true,
					common_name: "vernal water-starwort",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "callitriche-heterophylla",
					scientific_name: "Callitriche heterophylla",
					link: "http://trefle.io/api/plants/114214",
					id: 114214,
					complete_data: true,
					common_name: "twoheaded water-starwort",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "calophyllum-inophyllum",
					scientific_name: "Calophyllum inophyllum",
					link: "http://trefle.io/api/plants/114400",
					id: 114400,
					complete_data: true,
					common_name: "Alexandrian laurel",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "caltha-palustris",
					scientific_name: "Caltha palustris",
					link: "http://trefle.io/api/plants/114644",
					id: 114644,
					complete_data: true,
					common_name: "yellow marsh marigold",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "caesalpinia-gilliesii",
					scientific_name: "Caesalpinia gilliesii",
					link: "http://trefle.io/api/plants/113739",
					id: 113739,
					complete_data: true,
					common_name: "bird-of-paradise shrub",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "cabomba-caroliniana",
					scientific_name: "Cabomba caroliniana",
					link: "http://trefle.io/api/plants/113702",
					id: 113702,
					complete_data: true,
					common_name: "Carolina fanwort",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "calochortus-macrocarpus",
					scientific_name: "Calochortus macrocarpus",
					link: "http://trefle.io/api/plants/114322",
					id: 114322,
					complete_data: true,
					common_name: "sagebrush mariposa lily",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "calamovilfa-longifolia",
					scientific_name: "Calamovilfa longifolia",
					link: "http://trefle.io/api/plants/113970",
					id: 113970,
					complete_data: true,
					common_name: "prairie sandreed",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				},
				{
					slug: "callirhoe-involucrata",
					scientific_name: "Callirhoe involucrata",
					link: "http://trefle.io/api/plants/114143",
					id: 114143,
					complete_data: true,
					common_name: "purple poppymallow",
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
				}
			]
		},
		actions: {
			register: () => {
				fetch("/register", {
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
			login: () => {
				fetch("", {
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
			getPlant: name => {
				fetch("https://trefle.io/api/plants?q=&token=NUl6YXBQa3RiVmlJQVVMZWZ2cWYxUT09" + name)
					.then(res => res.json())
					.then(data => {
						setStore({ plant: data });
						alert("Plant Received");
					});
			}
		}
	};
};

export default getState;
