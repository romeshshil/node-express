var Product=require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/crud');

var product =[ 
	new Product({
		imagePath:"https://gscm-84a.kxcdn.com/main/images/18511/2a9161f79ccda92d963e672ad7d39b7f_61233737.jpg",
		title:"This is Iamge Title ONe",
		desc:"The latter will attempt to install the module globally, the former, in the directory where the command is issued. It will typically install the module in a folder called node_modul node program is the command to use to start your Node.js program",
		price:"25000"
	}),

	new Product({
		imagePath:"https://gscm-84a.kxcdn.com/main/images/18511/2a9161f79ccda92d963e672ad7d39b7f_61233737.jpg",
		title:"This is Iamge Title ONe",
		desc:"The latter will attempt to install the module globally, the former, in the directory where the command is issued. It will typically install the module in a folder called node_modul node program is the command to use to start your Node.js program",
		price:"25000"
	}),
		new Product({
		imagePath:"https://gscm-84a.kxcdn.com/main/images/18511/2a9161f79ccda92d963e672ad7d39b7f_61233737.jpg",
		title:"This is Iamge Title ONe",
		desc:"The latter will attempt to install the module globally, the former, in the directory where the command is issued. It will typically install the module in a folder called node_modul node program is the command to use to start your Node.js program",
		price:"25000"
	}),
		new Product({
		imagePath:"https://gscm-84a.kxcdn.com/main/images/18511/2a9161f79ccda92d963e672ad7d39b7f_61233737.jpg",
		title:"This is Iamge Title ONe",
		desc:"The latter will attempt to install the module globally, the former, in the directory where the command is issued. It will typically install the module in a folder called node_modul node program is the command to use to start your Node.js program",
		price:"25000"
	}),
		new Product({
		imagePath:"https://gscm-84a.kxcdn.com/main/images/18511/2a9161f79ccda92d963e672ad7d39b7f_61233737.jpg",
		title:"This is Iamge Title ONe",
		desc:"The latter will attempt to install the module globally, the former, in the directory where the command is issued. It will typically install the module in a folder called node_modul node program is the command to use to start your Node.js program",
		price:"25000"
	}),
		new Product({
		imagePath:"https://gscm-84a.kxcdn.com/main/images/18511/2a9161f79ccda92d963e672ad7d39b7f_61233737.jpg",
		title:"This is Iamge Title ONe",
		desc:"The latter will attempt to install the module globally, the former, in the directory where the command is issued. It will typically install the module in a folder called node_modul node program is the command to use to start your Node.js program",
		price:"25000"
	}),
];

var done=0;
for(var i=0;i<product.length;i++){
	product[i].save(function(err, result){
		done++;
		if(done==product.length){
			exit();
		}
	});
}
	function exit(){
	mongoose.disconnect();
	}

