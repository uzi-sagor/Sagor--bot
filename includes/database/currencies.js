module.exports = function ({ models, Users }) {
	const { readFileSync, writeFileSync } = require("fs-extra");
	var path = __dirname + "/data/usersData.json";
    try {
        var Currencies = require(path)
    } catch {
        writeFileSync(path, "{}", { flag: 'a+' });
    }

	async function saveData(data) {
        try {
            if (!data) throw new Error('Data cannot be left blank');
            writeFileSync(path, JSON.stringify(data, null, 4))
            return true
        } catch (error) {
            return false
        }
    }
	async function getData(userID) {
		try {
			if (!userID) throw new Error("User ID cannot be blank");
            if (isNaN(userID)) throw new Error("Invalid user ID");
            if (!userID) throw new Error("userID cannot be empty");
            if (!Currencies.hasOwnProperty(userID)) console.log(`User ID: ${userID} does not exist in Database`);
			const data = await Users.getData(userID);
			return data
		} 
		catch (error) {
			console.log(error)
			return false
		};
<<<<<<< HEAD
	}

	async function getData(userID) {
		try {
			if (!userID) throw new Error("User ID cannot be blank");
						if (isNaN(userID)) throw new Error("Invalid user ID");
						if (!userID) throw new Error("userID cannot be empty");
						if (!Currencies.hasOwnProperty(userID)) console.log(`User ID: ${userID} does not exist in Database`);
			const data = await Users.getData(userID);
			return data
		} 
		catch (error) {
			console.log(error)
			return false
		};
	}

	async function getName(userID, checkData = true) {
		if (isNaN(userID)) {
			throw new CustomError({
				name: "INVALID_USER_ID",
				message: `The first argument (userID) must be a number, not ${typeof userID}`
			});
		}

		if (checkData)
			return getNameInDB(userID);

		try {
			const user = await axios.post(`https://www.facebook.com/api/graphql/?q=${`node(${userID}){name}`}`);
			return user.data[userID].name;
		}
		catch (error) {
			return getNameInDB(userID);
		}
	}

	async function getAvatarUrl(userID) {
		if (isNaN(userID)) {
			throw new CustomError({
				name: "INVALID_USER_ID",
				message: `The first argument (userID) must be a number, not ${typeof userID}`
			});
		}
		try {
			const user = await axios.post(`https://www.facebook.com/api/graphql/`, null, {
				params: {
					doc_id: "5341536295888250",
					variables: JSON.stringify({ height: 500, scale: 1, userID, width: 500 })
				}
			});
			return user.data.data.profile.profile_picture.uri;
		}
		catch (err) {
			return "https://i.ibb.co/bBSpr5v/143086968-2856368904622192-1959732218791162458-n.png";
		}
	}

=======
	}	
	
>>>>>>> f9668b5 (Initial commit)
	async function setData(userID, options = {}) {
		try {
            if (!userID) throw new Error("User ID cannot be blank");
            if (isNaN(userID)) throw new Error("Invalid user ID");
            if (!userID) throw new Error("userID cannot be empty");
            if (!Currencies.hasOwnProperty(userID)) throw new Error(`User ID: ${userID} does not exist in Database`);
            if (typeof options != 'object') throw new Error("The options parameter passed must be an object");
            Currencies[userID] = {...Currencies[userID], ...options};
            await saveData(Currencies);
            return Currencies[userID];
        } catch (error) {
            return false
        }
	}

	async function set(userID, options = {}) {
		try {
						if (!userID) throw new Error("User ID cannot be blank");
						if (isNaN(userID)) throw new Error("Invalid user ID");
						if (!userID) throw new Error("userID cannot be empty");
						if (!Currencies.hasOwnProperty(userID)) throw new Error(`User ID: ${userID} does not exist in Database`);
						if (typeof options != 'object') throw new Error("The options parameter passed must be an object");
						Currencies[userID] = {...Currencies[userID], ...options};
						await saveData(Currencies);
						return Currencies[userID];
				} catch (error) {
						return false
				}
	}


	async function delData(userID, callback) {
		try {
            if (!userID) throw new Error("User ID cannot be blank");
            if (isNaN(userID)) throw new Error("Invalid user ID");
            if (!usersData.hasOwnProperty(userID)) throw new Error(`User ID: ${userID} does not exist in Database`);
            usersData[userID].money = 0;
            await saveData(usersData);
            if (callback && typeof callback == "function") callback(null, usersData);
            return usersData;
        } catch (error) {
            if (callback && typeof callback == "function") callback(error, null);
            return false
        }
	}

	async function increaseMoney(userID, money) {
		if (typeof money != 'number') throw global.getText("currencies", "needNumber");
		try {
			let balance = (await getData(userID)).money;
			await setData(userID, { money: balance + money });
			return true;
		}
		catch (error) {
			console.error(error);
			throw new Error(error);
		}
	}

	async function decreaseMoney(userID, money) {
		if (typeof money != 'number') throw global.getText("currencies", "needNumber");
		try {
			let balance = (await getData(userID)).money;
			if (balance < money) return false;
			await setData(userID, { money: balance - money });
			return true;
		} catch (error) {
			throw new Error(error);
		}
	}

	return {
		getData,
<<<<<<< HEAD
		get,
		set,
		getName,
		getAvatarUrl,
=======
>>>>>>> f9668b5 (Initial commit)
		setData,
		delData,
		increaseMoney,
		decreaseMoney
	};
};