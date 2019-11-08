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
				}
			]
		}
	};
};

export default getState;
