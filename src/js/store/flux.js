const getState = ({ getStore, getActions, setStore }) => {
	return {
		actions: {
			register: (registerData, props) => {
				fetch("https://3000-b7502b17-1c67-4583-8012-9cd42c597a0a.ws-us02.gitpod.io/register", {
					method: "POST",
					body: JSON.stringify(registerData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						//console.log(data);
						props.history.push("/login");
					})
					.catch(error => alert("error", JSON.stringify(error)));
			},
			login: (userLoginData, props) => {
				fetch("https://3000-b7502b17-1c67-4583-8012-9cd42c597a0a.ws-us02.gitpod.io/login", {
					method: "POST",
					body: JSON.stringify(userLoginData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						setStore({ token: data.token, user: data.user });
						props.history.push("/");
					})
					.catch(error => {
						alert("Something Went Wrong, Try again");
						//console.log("Error:", error);
					});
			},
			getPlant: name => {
				fetch("https://trefle.io/api/plants?q=&token=NUl6YXBQa3RiVmlJQVVMZWZ2cWYxUT09" + name)
					.then(res => res.json())
					.then(data => {
						setStore({ plant: data });
						alert("Plant Received");
					});
			},
			sendMsg: sms => {
				fetch("https://3000-b7502b17-1c67-4583-8012-9cd42c597a0a.ws-us02.gitpod.io/sendmsg", {
					method: "POST",
					body: JSON.stringify({ message: sms }),
					headers: {
						"Content-Type": "application/json"
					}
				}).catch(err => console.log("sendMsg ERROR:", err));
			}
		},
		store: {
			progressbar: [
				{
					width: "30",
					image:
						"https://res.cloudinary.com/devryan/image/upload/v1573684950/projects/4geeks/sprout_1_xbzui8.png"
				},
				{
					width: "30",
					image:
						"https://res.cloudinary.com/devryan/image/upload/v1573684950/projects/4geeks/sprout_2_txzz1v.png"
				},
				{
					width: "30",
					image:
						"https://res.cloudinary.com/devryan/image/upload/v1573684950/projects/4geeks/sprout_3_ee7zdq.png"
				},
				{
					width: "30",
					image:
						"https://res.cloudinary.com/devryan/image/upload/v1573684950/projects/4geeks/sprout_4_fczf9b.png"
				},
				{
					width: "30",
					image:
						"https://res.cloudinary.com/devryan/image/upload/v1573684950/projects/4geeks/sprout_5_w1grf4.png"
				}
			],
			token: null,
			user: null,
			plants: [
				{
					slug: "apiales",
					common_name: "Cilantro",
					scientific_name: "Coriandrum sativum",
					link: "http://trefle.io/api/plants/123253",
					id: 123253,
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw568033ca/images/products/herbs/03409g_01_leisure.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196",
					temperature_minimum: "65",
					temperature_maximum: "70",
					ph_minimum: "6.5",
					ph_maximum: "7.5",
					mature_height: '18-24"',
					humidity: "50-100%",
					pairings: "salads, chicken, spicy dishes",
					days_to_maturity: "55-60",
					germination: "5-10 days",
					water:
						"Water regularly, being careful not to overwater. Allow growing medium to go almost dry between watering, then soak thoroughly."
				},
				{
					slug: "ocimum",
					common_name: "Basil",
					scientific_name: "Ocimum",
					link: "http://trefle.io/api/plants/159556",
					id: 159556,
					url:
						"https://upload.wikimedia.org/wikipedia/commons/a/ac/BasilikumGenovesergro%C3%9Fbl%C3%A4ttriger.jpg",
					temperature_minimum: "65",
					temperature_maximum: "70",
					ph_minimum: "5.5",
					ph_maximum: "6.5",
					mature_height: '12-20"',
					humidity: "50-100%",
					pairings: "pasta, tomatoes, bruschetta",
					days_to_maturity: "~68",
					germination: "5-10 days",
					water:
						"Water regularly, being careful not to overwater. Allow growing medium to go completely dry between watering, then soak thoroughly."
				},
				{
					slug: "brassica-oleracea",
					common_name: "Kale",
					scientific_name: "Brassica oleracea",
					link: "http://trefle.io/api/plants/112492",
					id: 112492,
					url:
						"https://upload.wikimedia.org/wikipedia/commons/6/63/Brassica_oleracea_convar._capitata_var._alba%2C_spitskool_%281%29.jpg",
					temperature_minimum: "40",
					temperature_maximum: "70",
					ph_minimum: "5.5",
					ph_maximum: "7.5",
					mature_height: '12-18"',
					humidity: "70-100%",
					pairings: "fish, lemon, french fries",
					days_to_maturity: "~50-75",
					germination: "5-7 days",
					water: "Keep kale well watered for sustained growth and to keep leaves from getting too tough."
				},
				{
					slug: "brassica-oleracea",
					common_name: "Broccoli",
					scientific_name: "Brassica oleracea",
					link: "http://trefle.io/api/plants/112492",
					id: 112492,
					url:
						"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Basket_of_broccoli_in_Singapore_market.jpg/800px-Basket_of_broccoli_in_Singapore_market.jpg",
					temperature_minimum: "60",
					temperature_maximum: "75",
					ph_minimum: "6",
					ph_maximum: "7.5",
					mature_height: '12-18"',
					humidity: "40-80%",
					pairings: "potatoes, steak, salad",
					days_to_maturity: "~50",
					germination: "4-7 days",
					water: "Bottom water or mist. Maintain even moisture and do not allow sowing medium to dry out."
				},
				{
					slug: "raphanus",
					common_name: "Radish",
					scientific_name: "Raphanus sativus",
					link: "http://trefle.io/api/plants/173976",
					id: 173976,
					url:
						"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Radish_3371103037_4ab07db0bf_o.jpg/800px-Radish_3371103037_4ab07db0bf_o.jpg",
					temperature_minimum: "65",
					temperature_maximum: "75",
					ph_minimum: "6.5",
					ph_maximum: "7",
					mature_height: '12-18"',
					humidity: "50-100%",
					pairings: "salads",
					days_to_maturity: "10-15 days",
					germination: "5-10 days",
					water: "Bottom water or mist. Maintain even moisture and do not allow sowing medium to dry out."
				},
				{
					slug: "clematis-verticillaris-var-cacuminis",
					common_name: "Carrot",
					scientific_name: "Daucus carota",
					link: "http://trefle.io/api/plants/127363",
					id: 127363,
					url:
						"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Carrots_at_a_farmers_market_in_the_Villages_Florida.png/800px-Carrots_at_a_farmers_market_in_the_Villages_Florida.png",
					temperature_minimum: "65",
					temperature_maximum: "75",
					ph_minimum: "6.5",
					ph_maximum: "7",
					mature_height: '12-18"',
					humidity: "50-100%",
					pairings: "salads",
					days_to_maturity: "10-25 days",
					germination: "5-10 days",
					water: "Bottom water or mist. Maintain even moisture and do not allow sowing medium to dry out."
				},
				{
					slug: "liliales",
					common_name: "Scallion",
					scientific_name: "Allium fistulosum",
					link: "http://trefle.io/api/plants/103631",
					id: 103631,
					url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Cong-Guizhou.jpg",
					temperature_minimum: "65",
					temperature_maximum: "75",
					ph_minimum: "6.5",
					ph_maximum: "7",
					mature_height: '12-18"',
					humidity: "50-100%",
					pairings: "asian style soups and salads, picadillo, fried rice, salsa",
					days_to_maturity: "16-25 days",
					germination: "5-10 days",
					water: "Bottom water or mist. Maintain even moisture and do not allow sowing medium to dry out."
				},
				{
					slug: "eruca-vesicaria-var-stenocarpa",
					common_name: "Arugula",
					scientific_name: "Eruca vesicaria var. stenocarpa",
					link: "http://trefle.io/api/plants/134934",
					id: 134934,
					url:
						"https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw0078b666/images/products/vegetables/00385_01_arugula.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196",
					temperature_minimum: "65",
					temperature_maximum: "75",
					ph_minimum: "6",
					ph_maximum: "7",
					mature_height: '12-18"',
					humidity: "50-100%",
					pairings: "salads",
					days_to_maturity: "40 days",
					germination: "5-10 days",
					water: "Bottom water or mist. Maintain even moisture and do not allow sowing medium to dry out."
				},
				{
					slug: "beta-vulgaris-var-cicla",
					common_name: "Beet",
					scientific_name: "Beta vulgaris",
					link: "http://trefle.io/api/plants/111288",
					id: 111288,
					url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Beets-Bundle.jpg",
					temperature_minimum: "65",
					temperature_maximum: "75",
					ph_minimum: "6",
					ph_maximum: "7",
					mature_height: '12-18"',
					humidity: "50-100%",
					pairings: "salads",
					days_to_maturity: "10-15 days",
					germination: "5-10 days",
					water: "Bottom water or mist. Maintain even moisture and do not allow sowing medium to dry out."
				}
			]
		}
	};
};

export default getState;
