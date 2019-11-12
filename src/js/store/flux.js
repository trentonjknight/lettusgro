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
						console.log(data);
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
		},
		store: {
			progressbar: [
				{
					// style:"{{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}",
					width: "30",
					image:
						"https://uc921030d65ec74710e3f2a1e85d.previews.dropboxusercontent.com/p/thumb/AAnj6wYHkoQp3o1irOfbOaG7h8jqnTBm5woiM_Srb6YmaxON8Vlx2luoZpeeCndjOLqpEoHZz9A4KGfhcHbAMZjF7JanBaZpG2h8EhZ5z1Czharsk5crd12O8pgQ0OyBQvnExckwLTDrHJpXZi2Cp3JRKG_IWiSNbFkSyXeSfyg15iSWDMIuayYB4pzpFT2qeprRI3_3VuBAcMUhGNWWAOBNAoOEHZo073Gg1WFj5jcrhcx_1TdwTNG2J3YTZ0cM6nrrhU6gHhep93SKMAxP4FpJKewISA3YYrjeqHbQSF5fbW7c-wnzQYFwUspqKybDS0IlHhR-HL-Ujt5gVGzU98WWb0cdpJDsYL8LaGEeA7ZLJyB6-fSyM4CnqylhghQ8itaaxFzLV1VRg1kVwOp9xywh/p.png?fv_content=true&size_mode=5"
				},
				{
					// style:"{{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}",
					width: "30",
					image:
						"https://uc4db61253f067891a8cad0d0798.previews.dropboxusercontent.com/p/thumb/AAkzktEV3ENgHcit4Bo5XcEuzrrEQSeu792skGevkEYkBhn8X24vBS9bg4QorJwxvXMAT9lFFLNl8JJKNPYr9VzADgcnU1dWRBqamoHCpG7h98EAS9k1ovNunNrIP3zcZPlKSx63BeOD9sQXH9quDHnsRsY6oLJ68ha7kDn4oY67R6KZJr3VzXg7ac_ohVZlL2nedyb1l16s4WD5Kkcg0zK5h_qNndCrM3ZAYQnFI74sWmIdfk_DsuGICROuaZBBbOO9P80cRBte-iCu9MZyiVmnqLcjt0LHp6n5SyrwNE1UHHKnwaqdE9XSTuTqi6EO87xA6B4d2OmEIAIS_jnItzPWFIhiblW7DXV_30UL7rvLjkzwdRqKCsN_TTJm8A1dsnuEADdS-SBq68JjbchP539P/p.png?fv_content=true&size_mode=5"
				},
				{
					// style:"{{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}",
					width: "30",
					image:
						"https://uc92d80f346daf78a880827c6a3b.previews.dropboxusercontent.com/p/thumb/AAkT-LrNwhLrhdr58KoM59USisslktzY0Qs5ryRFh4P6XF8HZkocW0QuW1mDM8TS8zQQXvJGfW9qnLTWWzdKVHWzLBQ4HmMYwSyrapGCndWH2SFdgtIRGGtxRQ5DdTkzGpPdVDh7DoryY68GZESJKPljvp5-cYoDuJ-f_sCFrtK-S-u_yTheAQ50jLy0FS2HoDlRBA9vPLmweS-A4xzxzMkclKEokcqBWoq1dSIbkJfeb16r-xccfcdzwRO7E1ppMe-s_GnZVJlxzSgQzGvUmYYqYZG-jOgGY4FMvUXfhh0EZdwutUU0dMOXA6AZGFX1ZsZ_7qGxe8SCz6qPzSY8gaHRA48uG3rd3rQOQKymH3RjooHrURYgDMTTzZO5Vs01SA_TAQWgcExK4MnOOBgMYvyS/p.png?fv_content=true&size_mode=5"
				},
				{
					// style:"{{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}",
					width: "30",
					image:
						"https://uccbcd077a29ad91dc3746983e7c.previews.dropboxusercontent.com/p/thumb/AAmvCJovh47LzS_DdZscbCbAhzGioY-nFU6_8D5knJ522bVGzOa5ml3dKyNt84p4EI2tdMtxPJthl7nS0n2J1s_ei5KA76d5nq1uEOD8btfY7_qWWqxjlBJFz8v8HrvhYPeetSEb_2gEVrjCzQc1bpqBvtQA2ABDJz3A76ppudPyZo8z7cTnPEZMJoVpCplDgUofyW6EjXTp8ImsGU1KoTrziLFA9deSBdQ7TlTp_7AbLucBDw8kc5Zt9RnsWiPZ8xLUUjHp-veZChTXnVwv_3DHMcZTV3j7M3eqP7uB26V9Kyb7LoWv4OnMdJf_u3PtQYpTUaLlTMx4fGaIB7NZIs2qVuwaRy8-jnHMhR1Cxl7VeXllboPTsJTuys0Y2eSF2xWTpYLpGInNEejY94R5xmqf/p.png?fv_content=true&size_mode=5"
				},
				{
					// style:"{{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}",
					width: "30",
					image:
						"https://ucf6ada6c16e6384635a14ccdadf.previews.dropboxusercontent.com/p/thumb/AAnzFiEHw1OsSEYznkaDIcL_zZzJKdaADkFHign1DA8n5KiNmkWn_lftIA5bMXRN2IW2HEWlngl3lxN4LLass4Hu09zHqKQR0w0bALOJFAMmgeZv16YSymwNlhOu1KGNdW20Cj-FpVCFEX5_8BN_GOGIYFwpI30qxRLzpxXnWA0z0FvEzFfiP_GUaaNKpKaPxs7W3x62u9xkNHSGANvrqMIVY-pKFjwAaGCKZwnTWJrOkyzF9g-s791igqbesaXstZoh09oVG5jzuFvCnardEH3cUmmZKRuSVA7Of5eWf8PLFpNPYJmobcbm5gQc6i2PeFKqowujEIavzLnRqy5iIqc-EP1kLx-hVjvARjGLoyDUQ2ws33oUW9ZHj8NJ19aUKUycK43GmzIKXfVw4ZmOPY9R/p.png?fv_content=true&size_mode=5"
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
						"Water regularly, being careful not to overwater. Allow soil to go almost dry between watering, then soak thoroughly."
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
						"Water regularly, being careful not to overwater. Allow soil to go completely dry between watering, then soak thoroughly."
				},
				{
					slug: "brassica-oleracea",
					common_name: "Kale (cabbage)",
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
					slug: "",
					common_name: "Amaranth",
					scientific_name: "",
					link: "http://trefle.io/api/plants/112492",
					id: 112492,
					url:
						"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Basket_of_broccoli_in_Singapore_market.jpg/800px-Basket_of_broccoli_in_Singapore_market.jpg",
					temperature_minimum: "65",
					temperature_maximum: "75",
					ph_minimum: "",
					ph_maximum: "",
					mature_height: '12-18"',
					humidity: "",
					pairings: "",
					days_to_maturity: "16-25",
					germination: "",
					water: ""
				}
			]
		}
	};
};

export default getState;
