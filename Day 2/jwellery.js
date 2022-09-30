function mostExpensive(jewelrys) {

    let higestPrize = 0;

    let jew = "";

    for (let key in jewelrys) {

        value = jewelrys[key];

        if (higestPrize < value)

            higestPrize = value;

        jew = key;

    }
 return jew;

}

console.log(mostExpensive({

    "Diamond Earrings": 980,

    "Gold Watch": 250,

    "Pearl Necklace": 4650

}))